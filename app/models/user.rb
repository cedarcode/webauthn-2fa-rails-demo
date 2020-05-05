class User < ApplicationRecord
  has_secure_password

  has_many :webauthn_credentials, dependent: :destroy

  validates :username, presence: true, uniqueness: true
end
