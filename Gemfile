source 'https://rubygems.org'

ruby '3.3.5'

gem 'rails', '~> 8.0.2'

gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'importmap-rails'
gem 'jbuilder', '~> 2.7'
gem 'puma', '~> 6.6'
gem 'rollbar', '~> 3.6'
gem 'sassc-rails', '~> 2.0'
gem 'sprockets-rails', '~> 3.5'
gem 'sqlite3', '>= 1.4'
gem 'stimulus-rails'
gem 'webauthn', '~> 3.4'

group :development, :deploy do
  gem "kamal", '~> 2.5'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'dotenv-rails', '~> 3.1'
end

group :development do
  gem "rubocop", "~> 1.75"
  gem "rubocop-rails", "~> 2.30"
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'minitest-stub_any_instance', '~> 1.0'
  gem 'selenium-webdriver'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
