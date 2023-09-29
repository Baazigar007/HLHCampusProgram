import "./Profile.css";
import avatar from "../../images/avatar.svg";
import handblue from "../../images/hand-blue.svg";
import TopSheet from "../../components/TopSheet/TopSheet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import loginStatus from "../../backend/loginStatus";
import realm_app from "../../backend/UserContext";
import { useState } from "react";

// PROFILE BODY
export default function ProfilePage() {
  //navigation for logged in
  const navigate = useNavigate()
  useEffect(() => {
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if (x.isLogged === true) {
        if(x.isAdmin){
          navigate("/admin");
        }
      }
      else{
        navigate('/')
      }
    }
       checkLogin();
    }, [navigate]);

//fetch start
const [userObject, setUserObject] = useState(null);

useEffect(() => {
  
  if (realm_app.currentUser) {
   
    const usersCollection = realm_app.currentUser.mongoClient('mongodb-atlas').db('userinfo').collection('userdata');

    usersCollection.findOne({ id :  realm_app.currentUser.userId})
      .then((user) => {
        setUserObject(user);
        console.log("fetch done",user);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }
}, [realm_app.currentUser]);
//fetch base end


//return part for design and structure 
  return (
    <>
      <div className="profilebody">
        <TopSheet/>
        <div className="sb-head">
          <h2>Your Profile</h2>
        </div>
        <div className="profilebottom">
          <div className="profilefields">
            <div className="p-image">
              <img src={avatar} alt="pfp" />
            </div>
            <div className="p-info">
              <h4 className="p-head">Name</h4>
              <input type="name " value="Jatin"></input>
              <h4 className="p-head">Email Address</h4>
              <input type="email " value="j@gmail..com"></input>
              <h4 className="p-head">Phone</h4>
              <input type="Phone" value="9999999999"></input>
              <h4 className="p-head">College</h4>
              <input type="name " value="USICT"></input>
              <h4 className="p-head">Soronity</h4>
              <input type="name " value="Tech"></input>
            </div>
            <button>
              <div className="savebtn">
                <img src={handblue} alt="" />
                <p>Save</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
