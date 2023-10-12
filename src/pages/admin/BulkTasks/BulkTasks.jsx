import logo from "../../../images/logo.svg"
import add from "../../../images/add_icon.svg"
import "./BulkTasks.css"
import TasksTile from "../../../components/TasksTileAdmin/TasksTile"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import loginStatus from "../../../backend/loginStatus"
import fetchAllTasks from "../../../backend/fetchAllTasks"
import Loading from "../../../components/Loading/Loading"
import AdminSheet from "../../../components/AdminSheet/AdminSheet"
const BulkTasks = () =>{
    // const tasks = [1,2,34,5,5]
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
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

    useEffect(()=>{
        setLoading(true)
       async function getData(){
        const data = await fetchAllTasks();
        setTasks(data)
       }
       getData()
       setLoading(false)
    })
    return (
        <>
            {
                loading?<Loading/>:<div className="bulk-task-body">
                    <AdminSheet/>
                {/* <img className="logo-right" src={logo} alt="" /> */}
                <div className="bulk-task-header">
                    <p className="add-a-bulk-task">Add a Bulk-Task for everyone!</p>
                </div>
    
                <div className="tasks-list">
                    {tasks.map((element)=>{
                        return <TasksTile data={element}/>
                    })}
                </div>
                    
                    <div>
                        <button className="add-bulk-task-btn" onClick={()=>{navigate('/admin/createtask')}}><img src={add} className="add-bulk-task-btn-img" alt="" /></button>
                    </div>
                </div>
            }
        </>
    )
}

export default BulkTasks;