import { useNavigate } from "react-router-dom";
import TasksTileUser from "../../components/TasksTileUser/TasksTileUser";
import "./SubmitTask.css"
import { useEffect } from "react";
import loginStatus from "../../backend/loginStatus";
import { useState } from "react";
import SubmitData from "../../backend/submitTask";
import realm_app from "../../backend/UserContext";

const SubmitTask = () =>{
  //checked logged in 
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
  
  //fetching taskid and userid
  const task_id = "taskid1111";
  const user_id = realm_app.currentUser.customData.userId;
  console.log(user_id);


    //setter handles
  const [comment, setComment] = useState(null);
  const [imgurl, setImgurl] = useState(null);
  const [reward, setReward] = useState(null);
  const [review, setReview] = useState(null);

  //onclick function 

  function submission(){
    //  if(comment == null || imgurl == null){
    //   alert("Fill in all the compulsory fields!")
    //  }
    //  else{
      const submitObject = {
       "comment" : comment,
       "imgurl" : imgurl,
       "user_id" : user_id,
       "task_id" : task_id,
       "reward": reward,
       "review" : review,
      } 
      SubmitData(submitObject);
      alert("Submitted successfully");
 //    }
  }
  
    return (
        <>
        <div className="submit-task-body">
            <div className="submit-task-header">
                <p>Task Name</p>
            </div>
            <TasksTileUser/>
            <div className="add-files">
                <p className="add-photo-text">{"Add photos as proof of task (maximum 10)"}</p>
            <input type="file" accept="image/*" multiple max="10" />
            <p>{"Add comment (optional)"}</p>
            <input type="text" placeholder="Type your comment here" onChange={(evt)=>setComment(evt.target.value)}/>
            <button onClick={()=>submission()} className="submit-task-btn">Submit</button>
            </div>
        </div>
        </>
    )
}

export default SubmitTask;