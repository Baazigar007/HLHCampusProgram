import logo from "../../../images/logo.svg"
import add from "../../../images/add_icon.svg"
import "./BulkTasks.css"
import TasksTile from "../../../components/TasksTileAdmin/TasksTile"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import loginStatus from "../../../backend/loginStatus"
const BulkTasks = () =>{
    const tasks = [1,2,34,5,5]
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
            <div className="bulk-task-header">
                <p className="add-a-bulk-task">Add a Bulk-Task for everyone!</p>
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

export default BulkTasks;