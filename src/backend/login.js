import realm_app from "./UserContext";
import * as Realm from "realm-web";

async function login(email, password) {
  const creds = Realm.Credentials.emailPassword(email, password);

  return realm_app
    .logIn(creds)
    
}

export default login;
