# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "credential"

pin "@rails/ujs", to: "@rails--ujs.js" # @6.0.2

pin "@material/menu", to: "@material--menu.js" # @4.0.0
pin "@material/textfield", to: "@material--textfield.js" # @4.0.0
