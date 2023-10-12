import realm_app from "./UserContext";
async function updateUserData(userObject) {
const id = userObject.userId
delete userObject._id
  const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("userinfo")
    .collection("userdata").updateOne(
        { userId: id },
        { $set: userObject }
    ).then((val)=>alert("Updated data successfully! The changes will appear after you relogin")).catch((err)=>{
      alert(err + "\nPlease try again!")
    })
  console.log(res);
}

export default updateUserData;
