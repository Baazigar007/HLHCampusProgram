import "./Profile.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.svg";
import handblue from "../../images/hand-blue.svg";
import { Link } from "react-router-dom";

// PROFILE BODY
export default function ProfilePage(){
    return(
        <>
       <div className="loginbody">
    
      <img className="menu" src={logo} alt="" />
   
        
        <div className="loginbottom">
           
            <div className="loginfields">
                   <div className="p-image"> 
                          <img src={avatar} alt ="pfp"/>
                   </div>
                   <div className="p-info">
                    <h4 className="p-head">Name</h4>
                    <input type="name " value="John Dee" ></input>
                    <h4 className="p-head">Email Address</h4>
                    <input type="email " value="John@gmail.com" ></input>
                    <h4 className="p-head">Phone</h4>
                    <input type="Phone" value="78944444444" ></input>
                    <h4 className="p-head">College</h4>
                    <input type="name " value="USICT" ></input>
                    <h4 className="p-head">Soronity</h4>
                    <input type="name " value="Tech" ></input>
                   </div>
                <button><div className="loginbtn"><img src={handblue} alt="" /><p>Save</p></div></button>
            </div>
            
        </div>
      </div>
        </>
    );
}