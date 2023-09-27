import { useNavigate } from "react-router-dom";
import TasksTileUser from "../../components/TasksTileUser/TasksTileUser";
import "./SubmitTask.css"
import { useEffect } from "react";
import loginStatus from "../../backend/loginStatus";
const SubmitTask = () =>{
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
            <input type="text" placeholder="Type your comment here"/>
            <button className="submit-task-btn">Submit</button>
            </div>
        </div>
        </>
    )
}

export default SubmitTask;