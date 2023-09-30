import realm_app from "./UserContext";

async function fetchActiveTasks() {
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("taskinfo")
  .collection("taskdata");
  const userid =  await realm_app.currentUser.id;
    const filtered_data = []
   const data = await tasksCollection.find();
   console.log(data[0].completed_by)
  for(let i=0;i<data.length;i++){
    console.log("check ", data[i].completed_by, "  ", userid)
    if(!data[i].completed_by.includes(userid)){
        filtered_data.push(data[i])
    }
  }
    console.log(data);
    console.log("new ", filtered_data)
    return filtered_data

}

export default fetchActiveTasks;
