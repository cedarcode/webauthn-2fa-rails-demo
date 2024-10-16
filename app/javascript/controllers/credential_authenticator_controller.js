import { Controller } from "@hotwired/stimulus"
import * as Credential from "credential";

export default class extends Controller {
  verifyKey(event) {
    var [data, status, xhr] = event.detail;
    console.log(data);
    var credentialOptions = data;
    Credential.get(credentialOptions);
  }
}
