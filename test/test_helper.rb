ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def login_as(user)
    post session_path, params: { username: user.username, password: user.password }

    user
  end

  def create_user_with_credential(username: 'bob',
                                  password: 'password',
                                  credential_nickname: 'USB Key',
                                  webauthn_credential: nil)
    if webauthn_credential.blank?
      raw_challenge = SecureRandom.random_bytes(32)
      challenge = WebAuthn.configuration.encoder.encode(raw_challenge)
      public_key_credential = WebAuthn::FakeClient.new(ENV["WEBAUTHN_ORIGIN"]).create(challenge: challenge)
      webauthn_credential = WebAuthn::Credential.from_create(public_key_credential)
    end

    User.create!(
      username: username,
      password: password,
      webauthn_credentials: [
        WebauthnCredential.new(
          external_id: webauthn_credential.id,
          nickname: credential_nickname,
          public_key: webauthn_credential.public_key,
          sign_count: webauthn_credential.sign_count
        )
      ]
    )
  end

  def add_virtual_authenticator
    options = ::Selenium::WebDriver::VirtualAuthenticatorOptions.new

    page.driver.browser.add_virtual_authenticator(options)
  end

  def add_credential_to_authenticator(authenticator, user, nickname: 'My Credential')
    credential_id = SecureRandom.random_bytes(16)
    encoded_credential_id = Base64.urlsafe_encode64(credential_id)
    key = OpenSSL::PKey.generate_key("ED25519")
    encoded_private_key = Base64.urlsafe_encode64(key.private_to_der)

    cose_public_key = COSE::Key::OKP.from_pkey(OpenSSL::PKey.read(key.public_to_der))
    cose_public_key.alg = -8
    encoded_cose_public_key = Base64.urlsafe_encode64(cose_public_key.serialize)

    credential_json = {
      "credentialId" => encoded_credential_id,
      "isResidentCredential" => false,
      "rpId" => "localhost",
      "privateKey" => encoded_private_key,
      "signCount" => 0,
      "userHandle" => user.webauthn_id
    }

    authenticator.add_credential(credential_json)

    user.webauthn_credentials.create!(
      nickname: nickname,
      external_id: Base64.urlsafe_encode64(credential_id, padding: false),
      public_key: encoded_cose_public_key,
      sign_count: 0,
    )
  end
end
