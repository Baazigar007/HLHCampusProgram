import './PastSubmission.css';
import avatar from '../../images/avatar.svg';
import PastSubmissionTile from '../../components/PastSubmissionTile/PastSubmissionTile';
import TopSheet from '../../components/TopSheet/TopSheet';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import loginStatus from '../../backend/loginStatus';

const PastSubmission = () => {
    let list =[1,2,3,4];
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
    return(
        <>
        <div className='submitbody'>
        <TopSheet/>
         <div className='sb-head'>
                    <h2>Past Submission</h2>
                   </div>
       
            <div className='sb-bottom'>
                   <div className="p-image"> 
                          <img src={avatar} alt ="pfp"/>
                   </div>
                  
                   <div className='sumissions'>
                   {list.length === 0 ? (
                                  <p>No submissions!</p>
                                   ) : 
                   list.map((item) => {
                       return <PastSubmissionTile />;
                    })
                   }
                       
                        
                   </div>
            </div>

        </div>
        
        </>
    )

}

export default PastSubmission;