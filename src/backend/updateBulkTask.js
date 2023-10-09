import realm_app from "./UserContext";

async function updateBulkTaskData(taskObject){

    const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("taskinfo")
    .collection("taskdata")
    .updateOne(
        { _id: taskObject._id },
        { $set: taskObject }
    ).then((val)=>console.log("success 1")).catch((err)=>{
        alert(err)
    })
    console.log(res)
}

export default updateBulkTaskData;