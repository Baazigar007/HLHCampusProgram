import "./Profile.css";
import avatar from "../../images/avatar.svg";
import handblue from "../../images/hand-blue.svg";
import TopSheet from "../../components/TopSheet/TopSheet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import loginStatus from "../../backend/loginStatus";
import realm_app from "../../backend/UserContext";
import { useState } from "react";
import updateUserData from "../../backend/updateUserData";
import Loading from "../../components/Loading/Loading";

// PROFILE BODY
export default function ProfilePage() {
  const [userinfo, setUserInfo] = useState({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [college, setCollege] = useState("")
  const [sorority, setSorority] = useState("")
  const [loading, setLoading] = useState(false)
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

    useEffect(()=>{
      const info = realm_app.currentUser.customData
      setUserInfo(info)
      setName(info.name)
      setEmail(info.email)
      setPhone(info.phone)
      setCollege(info.college)
      setSorority(info.sorority)
     },[])

     function is_10_digit_string(string) {
      return string.length === 10 && string.match(/^\d{10}$/) !== null;
    }
async  function saveData(){
    let x = userinfo
    if(!is_10_digit_string(phone)){
      alert("Phone number is not correctly formatted!")
      setLoading(false)
    }
    else{
      x.name = name;
      x.email = email;
      x.college = college
      x.phone = phone
      x.sorority = sorority
      await setUserInfo(x)
      await setLoading(true)
      await updateUserData(userinfo)
      console.log(userinfo)
      setLoading(false)
    }
    
  }

//return part for design and structure 
  return (
    <>
      {
        loading?<Loading/>:<div className="profilebody">
        <TopSheet/>
        <div className="sb-head">
          <h2>Your Profile</h2>
        </div>
        <div className="profilebottom">
          <div className="profilefields">
            <div className="p-image">
              <img className="image" src={avatar} alt="pfp" />
            </div>
            <div className="p-info">
              <h4 className="p-head">Name</h4>
              <input type="text" value={name} onChange={(evt)=>{setName(evt.target.value)}}></input>
              <h4 className="p-head">Email Address</h4>
              <input type="email" value={email} onChange={(evt)=>{setEmail(evt.target.value)}}></input>
              <h4 className="p-head">Phone</h4>
              <input type="tel" value={phone} onChange={(evt)=>{setPhone(evt.target.value)}}></input>
              <h4 className="p-head">College</h4>
              <input type="text" value={college} onChange={(evt)=>{setCollege(evt.target.value)}}></input>
              <h4 className="p-head">Sorority</h4>
              <input type="text" value={sorority} onChange={(evt)=>{setSorority(evt.target.value)}}></input>
            </div>
            <button onClick={()=>{saveData()}}>
              <div className="savebtn">
                <img src={handblue} alt="" />
                <p>Save</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      }
    </>
  );
}
