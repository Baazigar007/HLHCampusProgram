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
    ).then((val)=>alert("updated data successfully! The changes will appear after you relogin")).catch((err)=>{
        alert(err)
    })
}

export default updateData;