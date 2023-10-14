import './PastSubmission.css';
import avatar from '../../images/avatar.svg';
import PastSubmissionTile from '../../components/PastSubmissionTile/PastSubmissionTile';
import TopSheet from '../../components/TopSheet/TopSheet';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import loginStatus from '../../backend/loginStatus';
import fetchPastTasks from '../../backend/fetchPastTasks';

const PastSubmission = () => {
    const [list, setList] = useState([])
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

      useEffect(() => {
        // logic to fetch active data
        async function getTasks(){
         const tasks =  await fetchPastTasks()
         setList(tasks)
        }
        getTasks()
        // const tasks  = 
        
      }, []);
    return(
        <>
        <div className='submitbody'>
        <TopSheet/>
         <div className='sb-head'>
                    <h2>Past Submissions</h2>
                   </div>
       
            <div className='sb-bottom'>
                   <div className="p-image"> 
                          <img className='image' src={avatar} alt ="pfp"/>
                   </div>
                  
                   <div className='sumissions'>
                   {list.length === 0 ? (
                                  <p>No Submissions!</p>
                                   ) : 
                   list.map((item) => {
                       return <PastSubmissionTile key={item} data={item}/>;
                    })
                   }
                       
                        
                   </div>
            </div>

        </div>
        
        </>
    )

}

export default PastSubmission;