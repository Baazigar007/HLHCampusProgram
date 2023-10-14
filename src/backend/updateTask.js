import realm_app from "./UserContext";

async function updateData(taskDetails, user_id){
    const data = taskDetails.completed_by
    data.push(user_id)
    const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("taskinfo")
    .collection("taskdata")
    .updateOne(
        { _id: taskDetails._id },
        { $set: taskDetails }
    ).then((val)=>console.log("success 1")).catch((err)=>{
        alert(err + "\nPlease try again!")
    })
    console.log(res)
   
    const newData = await realm_app.currentUser.customData;
    delete newData._id
    newData.taskSubmissions.push(taskDetails._id)
    const res2 = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("userinfo")
    .collection("userdata")
    .updateOne(
        { userId: user_id },
        { $set: newData }
    ).then((val)=>alert("Updated data successfully!")).catch((err)=>{
        alert(err + "\nPlease try again!")
    })
    console.log(res2)
}

export default updateData;