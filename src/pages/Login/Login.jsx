import "./Login.css";
import logo from "../../images/logo.svg";
import logotext from "../../images/logotext.svg";
import handblue from "../../images/hand-blue.svg";

export default function LoginPage() {
  return (
    <>
      <div className="loginbody">
        <img src={logotext} className="logotext" alt="" />
        <img src={logo} alt="" />
        <div className="loginbottom">
            <div className="campus-text">
                <p>Campus Ambassador Program</p>
            </div>
            <div className="loginfields">
                <input type="text" className="login-input" placeholder="Username"/>
                <input type="password" className="login-input" placeholder="Password" />
                <button className="loginbtn-button"><div className="loginbtn"><p>Sign In</p><img src={handblue} alt="" /></div></button>
            </div>
          
        </div>
      </div>
    </>
  );
}
