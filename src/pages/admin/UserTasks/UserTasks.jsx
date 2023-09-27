import TasksTile from "../../../components/TasksTileAdmin/TasksTile";
import logo from "../../../images/logo.svg"
import add from "../../../images/add_icon.svg"
import "./UserTasks.css"
import edit from "../../../images/pencil.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import loginStatus from "../../../backend/loginStatus";

const UserTasks = () =>{
    const tasks = [1,2,2,2,2,2,34,4]
    const navigate = useNavigate()
  useEffect(() => {
    
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if(!x.isAdmin){
        navigate('/')
      }
    }
       checkLogin();
    }, [navigate]);
    return (
        <>
                    <div className="bulk-task-body">
            <img className="logo-right" src={logo} alt="" />
            <div className="user-task-header">
                <div className="user-task-header-l">
                <strong><p>John Doe</p></strong>
                <p>Email: john@gmail.com<br/>Phone : 78955555555<br/>College : USICT<br/>Sorority : Techspace</p>
                </div>
                <div className="user-task-header-r">
                    <img src={edit} alt="" />
                </div>
            </div>

            <div className="tasks-list">
                {tasks.map((element)=>{
                    return <TasksTile/>
                })}
            </div>
                
                <div>
                    <button className="add-bulk-task-btn"><img src={add} className="add-bulk-task-btn-img" alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default UserTasks;