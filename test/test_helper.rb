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
  end

  def create_user_with_credential(username: 'bob',
                                  password: 'password',
                                  credential_nickname:,
                                  webauthn_credential:)
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

  def stub_create(fake_credentials)
    # Decode base64url encoded JSON data
    decode(fake_credentials["response"], "clientDataJSON")

    # Parse to avoid escaping already escaped characters
    fake_credentials["response"]["clientDataJSON"] = JSON.parse(fake_credentials["response"]["clientDataJSON"])

    fake_credentials = fake_credentials.to_json
    script =
      "var base64urlDecode = encodedData => atob(encodedData.replace(/_/g, '/').replace(/-/g, '+'));
       var toUint8Array = (data) => { return Uint8Array.from(data, c => c.charCodeAt(0)) };
       var credential = JSON.parse('" + fake_credentials + "');
       credential['rawId'] = toUint8Array(base64urlDecode(credential['rawId']));
       credential['response']['attestationObject'] =
         toUint8Array(base64urlDecode(credential['response']['attestationObject']));
       credential['response']['clientDataJSON'] =
         toUint8Array(JSON.stringify(credential['response']['clientDataJSON']));
       credential['getClientExtensionResults'] = () => ({});
       var stub = window.sinon.stub(navigator.credentials, 'create').resolves(credential);"
    page.execute_script(script)
  end

  def decode(hash, key)
    hash[key] = Base64.decode64(hash[key])
  end
end
