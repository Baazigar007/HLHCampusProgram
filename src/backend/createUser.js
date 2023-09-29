import realm_app from "./UserContext"
import * as Realm from "realm-web"

// Assuming you have a reference to your MongoDB collection
const usersCollection = realm_app.currentUser.mongoClient('mongodb-atlas').db('userinfo').collection('userdata');

async function createUserFromData(userObject){
     realm_app.emailPasswordAuth.registerUser({
        email: userObject.email,
        password: userObject.password
    }).then((val)=>console.log("val is ", val)).catch((err)=>{
        alert(err)
    })
//  userObject._id = "task_id";
    console.log(userObject);

    usersCollection.insertOne(userObject)
  .then(() => {
    console.log('User data inserted into MongoDB');
  })
  .catch((error) => {
    console.error('Error inserting user data:', error);
  });

    // console.log(register)
    // const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // let task_id = ""
    // for(let i=0;i<16;i++){
    //   task_id += characters.charAt(Math.floor(Math.random() * characters.length));
    // }
    
    // userObject._id = task_id;
    // console.log(userObject);
    // const res = await realm_app.currentUser
    //   .mongoClient("mongodb-atlas")
    //   .db("userinfo")
    //   .collection("userdata")
    //   .insertOne(userObject);
    // console.log(res);
}

export default createUserFromData
