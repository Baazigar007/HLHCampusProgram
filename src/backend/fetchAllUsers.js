import realm_app from "./UserContext";

async function fetchAllUsers() {
    console.log("user data getting")
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("userinfo")
  .collection("userdata");
   const data = await tasksCollection.find();
  return data

}

export default fetchAllUsers;
