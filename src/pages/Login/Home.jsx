import "./Home.css";
import TopSheet from "../../components/TopSheet/TopSheet";
import HomeTile from "../../components/HomeTile/HomeTile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginStatus from "../../backend/loginStatus";
import avatar from "../../images/avatar.svg";
import realm_app from "../../backend/UserContext";

export default function HomePage() {
    let list =[1,2,3];
    const [name, setName] = useState(null)
    
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
    const namee = realm_app.currentUser.customData.name
    setName(namee)
   },[])
    return(
        <>
        <div className='homebody'>
        <TopSheet/>
         <div className='h-head'>
                    <h2>Home</h2>
                   </div>
       
            <div className='h-bottom'>
                   <div className="p-image"> 
                          <img src={avatar} alt ="pfp"/>
                   </div>
                   <div>
                    <h2 className="u-head">Hi {name}</h2>
                   </div>
                  
                   <div className='tasks'>
                   {list.length === 0 ? (
                                  <p>No tasks!</p>
                                   ) : 
                   list.map((item) => {
                       return <HomeTile />;
                    })
                   }
                       
                        
                   </div>
            </div>

        </div>
        </>
    );

}