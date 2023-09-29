import './CreateTask.css';
import { useEffect, useState } from 'react';
import createTaskFromData from '../../../backend/createTask';
import loginStatus from '../../../backend/loginStatus';
import { useNavigate } from 'react-router-dom';

const  CreateTask = () =>{
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

    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [amt, setAmt] = useState(null)
    const [deadline, setDeadline] = useState(null);
    const [type, setType] = useState(null)
    // const [bulktask, setBulktask] = useState(null)

    function createNewTask(){
        if(title == null || desc == null || amt == null || deadline == null || type == null){
            // createTaskFromData([title,desc,amt,deadline,type,bulktask]);
            alert("Fill in all the compulsory fields!")
        }
        else{
            const taskObject = {
                "title": title,
                "description": desc,
                "amount": amt,
                "deadline": deadline,
                "type": type,
            }
            createTaskFromData(taskObject);
        }
    }
    return (
        <>
        <div className="create-body">
            <h1>Create a new Task</h1>
            <section>   
                <input type="text" className="user-input" name="title" placeholder="Task Title" id="" onChange={(evt)=>setTitle(evt.target.value)}/>
                <input type="text" className="user-input-desc" name="desc" placeholder="Task Description" id="" onChange={(evt)=>setDesc(evt.target.value)}/>
                <input type="text" className="user-input" name="amt" placeholder="Amount" id="" onChange={(evt)=>setAmt(evt.target.value)}/>
                <input type="date" className="user-input" name="deadline" placeholder='Deadline' value={deadline} id="" onChange={(evt)=>setDeadline(evt.target.value)}/>
                <input type="text" className="user-input" name="type" placeholder="Task Type" id="" onChange={(evt)=>setType(evt.target.value)}/>
               
                <button onClick={()=>createNewTask()} className="submit-button">Add</button>
            </section>
        </div>
        </>
    )
}

export default CreateTask