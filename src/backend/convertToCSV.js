import realm_app from "./UserContext";


function downloadFileFromString(string, filename) {
    // Create a new Blob object from the string.
    const blob = new Blob([string]);
  
    // Create a URL object from the Blob object.
    const url = window.URL.createObjectURL(blob);
  
    // Create a new anchor element and set its `href` attribute to the URL object.
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
  
    // Set the `download` attribute of the anchor element to the desired filename.
    anchorElement.download = filename;
  
    // Append the anchor element to the document body.
    document.body.appendChild(anchorElement);
  
    // Click the anchor element.
    anchorElement.click();
  
    // Remove the anchor element from the document body.
    document.body.removeChild(anchorElement);
  }

async function convertArrayOfObjectsToCSV(){
    const userCollection = realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("userinfo")
    .collection("userdata");
  const data1 = await userCollection.find();
  toCSV(data1, "User-Data.csv")

    const tasksCollection = realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("taskinfo")
    .collection("taskdata");
  const data2 = await tasksCollection.find();
  toCSV(data2, "Task-Data.csv")

    const subCollection = realm_app.currentUser
    .mongoClient("mongodb-atlas")
    .db("subinfo")
    .collection("subdata");
  const data3 = await subCollection.find();
  toCSV(data3, "Submission-Data.csv")

}


async function toCSV(data, filename) {


  // Get the keys of the objects.
  const keys = Object.keys(data[0]);

  // Create a CSV header row.
  const headerRow = keys.join(",");

  // Map over the array of objects and create a row for each object.
  const csvRows = data.map((object) => {
    const values = Object.values(object);
    return values.join(",");
  });

  // Join the CSV rows together with a newline separator.
  const csvString = [headerRow, ...csvRows].join("\n");
//   console.log(csvString)
  downloadFileFromString(csvString, filename)
  return csvString;
}


export default convertArrayOfObjectsToCSV