import realm_app from "./UserContext";

async function fetchUserData(id) {
    console.log("user data getting")
const userCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("userinfo")
  .collection("userdata");
   const data = await userCollection.find();
   for(let i=0;i<data.length;i++){
    if(data[i].userId === id){
        return data[i]
    }
   }
  return data[0]

}

export default fetchUserData;
