import "./Profile.css";
import avatar from "../../images/avatar.svg";
import handblue from "../../images/hand-blue.svg";
import TopSheet from "../../components/TopSheet/TopSheet";
import logoutUser from "../../backend/logout";
import { useNavigate } from "react-router-dom";

// PROFILE BODY
export default function ProfilePage() {
  const navigate = useNavigate()
  async function logout(){
    logoutUser().then((_)=>{
      navigate('/')
    })
  }
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
            <button onClick={()=>{logout()}}>logout</button>
            <div className="p-info">
              <h4 className="p-head">Name</h4>
              <input type="name " value="John Dee"></input>
              <h4 className="p-head">Email Address</h4>
              <input type="email " value="John@gmail.com"></input>
              <h4 className="p-head">Phone</h4>
              <input type="Phone" value="78944444444"></input>
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
