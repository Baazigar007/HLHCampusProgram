import realm_app from "./UserContext";

async function SubmitData(submitObject){
    const res = await realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("subinfo")
    .collection("subdata")
    .insertOne(submitObject);
    console.log(submitObject);
    console.log(res);
}

export default SubmitData;