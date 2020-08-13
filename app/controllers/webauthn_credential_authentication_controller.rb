class WebauthnCredentialAuthenticationController < ApplicationController
  before_action :ensure_user_not_authenticated
  before_action :ensure_login_initiated

  def new
  end

  def options
    get_options = WebAuthn::Credential.options_for_get(allow: user.webauthn_credentials.pluck(:external_id))

    session[:current_challenge] = get_options.challenge

    respond_to do |format|
      format.json { render json: get_options }
    end
  end

  def create
    webauthn_credential = WebAuthn::Credential.from_get(params)

    credential = user.webauthn_credentials.find_by(external_id: webauthn_credential.id)

    begin
      webauthn_credential.verify(
        session[:current_challenge],
        public_key: credential.public_key,
        sign_count: credential.sign_count
      )

      credential.update!(sign_count: webauthn_credential.sign_count)
      session.delete(:webauthn_user_id)
      sign_in(user)

      render json: { status: "ok" }, status: :ok
    rescue WebAuthn::Error => e
      render json: "Verification failed: #{e.message}", status: :unprocessable_entity
    end
  end

  private

  def user
    @user ||= User.find_by(id: session[:webauthn_user_id])
  end

  def ensure_login_initiated
    if session[:webauthn_user_id].blank?
      redirect_to new_session_path
    end
  end

  def ensure_user_not_authenticated
    if current_user
      redirect_to root_path
    end
  end
end
