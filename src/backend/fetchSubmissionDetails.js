import realm_app from "./UserContext";

async function fetchSubmissionDetails(subid) {
const subCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("subinfo")
  .collection("subdata");
  
  console.log("subid is", subid)

  const data = await subCollection.findOne({_id: subid})
  console.log("hehe ", data)
//   cons
return data;

}

export default fetchSubmissionDetails;
