import realm_app from "./UserContext";
async function createTaskFromData(taskObject) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let task_id = ""
  for(let i=0;i<16;i++){
    task_id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  taskObject._id = task_id;
  taskObject.completed_by = []
  console.log(taskObject);
  const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("taskinfo")
    .collection("taskdata")
    .insertOne(taskObject);
  console.log(res);
}

export default createTaskFromData;
