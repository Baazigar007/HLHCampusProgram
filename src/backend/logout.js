import realm_app from "./UserContext";

async function logoutUser(){
    await realm_app.currentUser.logOut();
    
}

export default logoutUser;