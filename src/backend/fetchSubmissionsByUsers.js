import realm_app from "./UserContext";

async function fetchSubmissionsByUsers(id) {
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("subinfo")
  .collection("subdata");
    const filtered_data = []
    

   const data = await tasksCollection.find();
  for(let i=0;i<data.length;i++){
    if(id===data[i].user_id){
        filtered_data.push(data[i])
    }
  }
    console.log(data);
    console.log("new ", filtered_data)
    return filtered_data

}

export default fetchSubmissionsByUsers;
