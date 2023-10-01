import realm_app from "./UserContext";

async function fetchSingleTask(taskid) {
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("taskinfo")
  .collection("taskdata");

  console.log(taskid)

  const data = await tasksCollection.findOne({_id: taskid})
return data;

}

export default fetchSingleTask;
