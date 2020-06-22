Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  resources :webauthn_credentials, only: [:new, :create] do
    post :options, on: :collection, as: 'options_for'
  end

  resource :webauthn_credential_authentication, controller: 'webauthn_credential_authentication', only: [:new, :create] do
    post :options, on: :collection, as: 'options_for'
  end

  root to: "home#index"
end
