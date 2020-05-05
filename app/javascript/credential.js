import * as WebAuthnJSON from "@github/webauthn-json"

function getCSRFToken() {
  var CSRFSelector = document.querySelector('meta[name="csrf-token"]')
  if (CSRFSelector) {
    return CSRFSelector.getAttribute("content")
  } else {
    return null
  }
}

function callback(url, body) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-CSRF-Token": getCSRFToken()
    },
    credentials: 'same-origin'
  }).then(function(response) {
    if (response.ok) {
      window.location.replace("/")
    } else if (response.status < 500) {
      response.text().then(console.log);
    } else {
      console.log("Sorry, something wrong happened.");
    }
  });
}

function create(callbackUrl, credentialOptions) {
  WebAuthnJSON.create({ "publicKey": credentialOptions }).then(function(credential) {
    callback(callbackUrl, credential);
  }).catch(function(error) {
    console.log(error);
  });

  console.log("Creating new public key credential...");
}

export { create }
