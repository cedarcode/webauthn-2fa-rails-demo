class HomeController < ApplicationController
  before_action :enforce_authenticated_user

  def index
  end

  private

  def credential
    @credential ||= current_user.webauthn_credentials.first
  end
  helper_method :credential
end
