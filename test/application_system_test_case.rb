require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: (ENV["TEST_BROWSER"] || :chrome).to_sym, screen_size: [1400, 1400]
  served_by host: 'localhost', port: 3030
end
