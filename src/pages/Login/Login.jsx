import "./Login.css";
import logo from "../../images/logo.svg";
import logotext from "../../images/logotext.svg";
import handblue from "../../images/hand-blue.svg";
import { useEffect, useState } from "react";
import loginStatus from "../../backend/loginStatus";
import { useNavigate } from "react-router-dom";
import login from "../../backend/login";
import Loading from "../../components/Loading/Loading";
import realm_app from "../../backend/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [loading, setLoading] = useState(false);

  function loginWithEmailPass() {
    setLoading(true);
    console.log(email, pwd);



    if (email === null || pwd === null) {
      alert("Fill in all the necessary fields!");
    } else {
      login(email, pwd)
        .then((_) => {
          console.log("user logged in");
          setLoading(false);
          checkLogin();
        })
        .catch((error) => {
          console.log(error.error);
          alert(error.error + "\nPlease try again!");
          setLoading(false);
        });
    }
    
  }

  async function checkLogin() {
    var x = await loginStatus();
    console.log("checking", x);
    if (x.isLogged === true) {
      if(x.isAdmin){
        navigate("/admin");
      }
      else{
        navigate("/home");
      }
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    
  async function checkLogin() {
    var x = await loginStatus();
    console.log("checking", x);
    if (x.isLogged === true) {
      if(x.isAdmin){
        navigate("/admin");
      }
      else{
        navigate("/home");
      }
    }
  }
     checkLogin();
  }, [navigate]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="loginbody">
          <img src={logotext} className="logotext" alt="" />
          <img src={logo} alt="" />
          <div className="loginbottom">
            <div className="campus-text">
              <p>Campus Ambassador Program</p>
            </div>
            <div className="loginfields">
              <input
                type="text"
                className="login-input"
                placeholder="Username"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                type="password"
                className="login-input"
                placeholder="Password"
                onChange={(event) => {
                  setPwd(event.target.value);
                }}
              />
              <button
                className="loginbtn-button"
                onClick={() => loginWithEmailPass()}
              >
                <div className="loginbtn">
                  <p>Sign In</p>
                  <img src={handblue} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
