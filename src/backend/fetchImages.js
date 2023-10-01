import realm_app from "./UserContext";

async function fetchImages(subid) {
const subCollection = realm_app.currentUser
  .mongoClient("mongodb-atlas")
  .db("uploads")
  .collection("images");
  
  console.log("subid is", subid)

  const data = await subCollection.findOne({_id: subid})
//   cons
return data.images;

}

export default fetchImages;
