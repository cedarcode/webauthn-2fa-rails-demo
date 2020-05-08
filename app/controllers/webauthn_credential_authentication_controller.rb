class WebauthnCredentialAuthenticationController < ApplicationController
  before_action :ensure_login_initiated
  before_action :ensure_user_not_authenticated

  def new
  end

  def options
    get_options = WebAuthn::Credential.options_for_get(allow: current_user.webauthn_credentials.pluck(:external_id))

    session[:current_challenge] = get_options.challenge

    respond_to do |format|
      format.json { render json: get_options }
    end
  end

  def create
    webauthn_credential = WebAuthn::Credential.from_get(params)

    credential = current_user.webauthn_credentials.find_by(external_id: webauthn_credential.id)

    begin
      webauthn_credential.verify(
        session[:current_challenge],
        public_key: credential.public_key,
        sign_count: credential.sign_count
      )

      credential.update!(sign_count: webauthn_credential.sign_count)
      session[:user_authenticated] = true

      render json: { status: "ok" }, status: :ok
    rescue WebAuthn::Error => e
      render json: "Verification failed: #{e.message}", status: :unprocessable_entity
    end
  end

  private

  def ensure_login_initiated
    if !current_user
      redirect_to new_session_path, alert: "Login was not initiated"
    end
  end

  def ensure_user_not_authenticated
    if !current_user&.second_factor_enabled? || session[:user_authenticated]
      redirect_to root_path, alert: "User's already authenticated"
    end
  end
end
