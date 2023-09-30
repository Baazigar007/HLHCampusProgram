import realm_app from "./UserContext";

async function fetchAllTasks() {
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("taskinfo")
  .collection("taskdata");
   const data = await tasksCollection.find();
   return data

}

export default fetchAllTasks;
