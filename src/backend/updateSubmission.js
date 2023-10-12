import realm_app from "./UserContext";

async function updateSubmission(submission){
    const data_id = submission._id
    
    delete submission._id

    const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("subinfo")
    .collection("subdata")
    .updateOne(
        { _id: data_id },
        { $set: submission }
    ).then((val)=>console.log("success")).catch((err)=>{
        alert(err + "\nPlease try again!")
    })
    console.log(res)
   
}

export default updateSubmission;