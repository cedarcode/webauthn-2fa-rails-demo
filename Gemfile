source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

gem 'rails', '~> 6.1.7', '>= 6.1.7.8'

gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'jbuilder', '~> 2.7'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem "rollbar", "3.3.0"
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'webauthn', '~> 2.2'
gem 'webpacker', '~> 5.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'dotenv-rails', '~> 2.7'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem "rubocop", "~> 0.82.0"
  gem "rubocop-rails", "~> 2.5"
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'minitest-stub_any_instance', '~> 1.0'
  gem 'selenium-webdriver'
end

group :production do
  gem "rack-host-redirect", "~> 1.3"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
