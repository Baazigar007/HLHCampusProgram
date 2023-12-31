import realm_app from "./UserContext";

async function fetchWallet() {
const tasksCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("subinfo")
  .collection("subdata");
  const userid =  await realm_app.currentUser.id;
    const filtered_data = []
let pending = 0;
let accepted = 0;
let earn = 0;
let bal = 0;
   const data = await tasksCollection.find();
  for(let i=0;i<data.length;i++){
    console.log("check ", data[i].completed_by, "  ", userid)
    if(data[i].user_id===userid){
        filtered_data.push(data[i])
        if(data[i].status==="accepted"){
            accepted++;
            earn += Number(data[i].reward);
            bal += Number(data[i].reward)
        }
        else{
            pending++;
        }
    }
  }
    console.log(data);
    console.log("new ", filtered_data)
    return [filtered_data, pending, accepted, earn, bal]

}

export default fetchWallet;
