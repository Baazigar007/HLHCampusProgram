import realm_app from "./TaskContext"
async function createTaskFromData(){
    // implement creating user and pushing data functions here
    // await realm_app.emailPasswordAuth.registerUser()
    realm_app.createUser()
}

export default createTaskFromData