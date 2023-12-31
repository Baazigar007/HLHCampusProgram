import realm_app from "./UserContext";
import * as Realm from "realm-web";

async function createUserFromData(userObject) {
  
// Assuming you have a reference to your MongoDB collection
const usersCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("userinfo")
  .collection("userdata");

 await realm_app.emailPasswordAuth
    .registerUser({
      email: userObject.email,
      password: userObject.password,
    })
    
  console.log(userObject);
  const credentials = Realm.Credentials.emailPassword(
    userObject.email,
    userObject.password
  );
  console.log("creds are", credentials)
  const user = await realm_app.logIn(credentials);
  userObject.userId = user.id;
  usersCollection
    .insertOne(userObject)
    .then(() => {
      console.log("User data inserted into MongoDB");
      alert("New user is created with id:- ", user.id, ".\nData is uploaded successfully!")
    })
    .catch((error) => {
      console.error("Error inserting user data:", error);
    });

  user.logOut();
}

export default createUserFromData;
