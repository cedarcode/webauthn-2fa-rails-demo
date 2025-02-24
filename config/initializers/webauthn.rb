WebAuthn.configure do |config|
  config.allowed_origins = [ENV["WEBAUTHN_ORIGIN"]]
  config.rp_name = "WebAuthn 2FA Rails Demo"
end
