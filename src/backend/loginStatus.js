import realm_app from "./UserContext";

async function loginStatus() {
  if (realm_app.currentUser) {
    console.log("user exists");
    console.log(realm_app.currentUser.customData)
    return {"isLogged": true, "isAdmin": realm_app.currentUser.customData.isAdmin};
  }
  console.log("user doesnt exist")
  return {"isLogged": false, "isAdmin": false};
}

export default loginStatus;