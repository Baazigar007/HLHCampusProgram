import realm_app from "./UserContext";

async function SubmitData(submitObject, imgarray){
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let task_id = ""
    for(let i=0;i<16;i++){
      task_id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    submitObject._id = task_id;
    const imageres = await realm_app.currentUser.mongoClient("mongodb-atlas").db("uploads").collection("images").insertOne(
        {
            _id: task_id,
            images: imgarray
        }
    )
    console.log(imageres)
    const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("subinfo")
    .collection("subdata")
    .insertOne(submitObject);
    console.log(submitObject);
    console.log(res);
}

export default SubmitData;