import * as WebAuthnJSON from "@github/webauthn-json"

function getCSRFToken() {
  var CSRFSelector = document.querySelector('meta[name="csrf-token"]')
  if (CSRFSelector) {
    return CSRFSelector.getAttribute("content")
  } else {
    return null
  }
}

async function create(callbackUrl, credentialOptions) {
  try {
    const credential = await WebAuthnJSON.create({ "publicKey": credentialOptions });
    const response = await fetch(callbackUrl, {
      method: "POST",
      body: JSON.stringify(credential),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-Token": getCSRFToken()
      },
      credentials: 'same-origin'
    });
    if (response.ok) {
      window.location.replace("/");
    } else if (response.status < 500) {
      response.text().then(console.log);
    } else {
      console.log("Sorry, something wrong happened.");
    }
  } catch(error) {
    console.log(error);
  };

  console.log("Creating new public key credential...");
}

async function get(credentialOptions) {
  try {
    const credential = await WebAuthnJSON.get({ "publicKey": credentialOptions });
    const response = await fetch("/webauthn_credential_authentication", {
      method: "POST",
      body: JSON.stringify(credential),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-Token": getCSRFToken()
      },
      credentials: 'same-origin'
    });
    if (response.ok) {
      window.location.replace("/");
    } else if (response.status < 500) {
      response.text().then(console.log);
    } else {
      console.log("Sorry, something wrong happened.");
    }
  } catch(error) {
    console.log(error);
  };

  console.log("Getting public key credential...");
}

export { create, get }
