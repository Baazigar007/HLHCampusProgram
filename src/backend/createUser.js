import realm_app from "./UserContext"
import * as Realm from "realm-web"
async function createUserFromData(userObject){
     realm_app.emailPasswordAuth.registerUser({
        email: userObject.email,
        password: userObject.password
    }).then((val)=>console.log("val is ", val)).catch((err)=>{
        alert(err)
    })
 userObject._id = "task_id";
    console.log(userObject);
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
