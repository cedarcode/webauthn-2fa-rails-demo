class HomeController < ApplicationController
  before_action :enforce_authenticated_user

  def index
  end
end
