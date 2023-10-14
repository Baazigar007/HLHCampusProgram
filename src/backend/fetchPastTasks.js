import realm_app from "./UserContext";

async function fetchPastTasks() {
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("subinfo")
  .collection("subdata");
  const userid =  await realm_app.currentUser.id;
    const filtered_data = []
    console.log(userid)
   const data = await tasksCollection.find();
  for(let i=0;i<data.length;i++){
    if(userid===data[i].user_id){
        filtered_data.push(data[i])
    }
  }
    console.log(data);
    console.log("new ", filtered_data)
    return filtered_data

}

export default fetchPastTasks;
