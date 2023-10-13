import "./CreateTask.css";
import { useEffect, useState } from "react";
import createTaskFromData from "../../../backend/createTask";
import loginStatus from "../../../backend/loginStatus";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import AdminSheet from "../../../components/AdminSheet/AdminSheet";
import fetchAllUsers from "../../../backend/fetchAllUsers";

const CreateTask = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if (!x.isAdmin) {
        navigate("/");
      }
    }
    checkLogin();
  }, [navigate]);

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [amt, setAmt] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSingle, setisSingle] = useState(false);
  const [users, setUsers] = useState([])
  const [assigned, setAssigned] = useState(null)

  async function createNewTask() {
    if (
      title == null ||
      desc == null ||
      amt == null ||
      deadline == null ||
      type == null
    ) {
      alert("Fill in all the necessary fields.");
    } else {
      if(type==="Single Task"){
        const taskObject = {
          title: title,
          description: desc,
          amount: amt,
          deadline: deadline,
          type: type,
          assigned_to: assigned
        };
        setLoading(true);
        await createTaskFromData(taskObject);
        alert("Task created successfully!");
        setLoading(false);
      }
      else{
        const taskObject = {
          title: title,
          description: desc,
          amount: amt,
          deadline: deadline,
          type: type,
        };
        setLoading(true);
        await createTaskFromData(taskObject);
        alert("Task created successfully!");
        setLoading(false);
      }
      
    }
  }

  useEffect(()=>{
    async function getUsers(){
      const users = await fetchAllUsers();
      setUsers(users);
    }
    getUsers()
  }, [])

  async function toggleType(val){
    setType(val)
    if(val==="Bulk Task"){
      setisSingle(false);
    }
    else{
      setisSingle(true)
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="create-body">
          <AdminSheet />
          <h1>Create a new Task</h1>
          <section>
            <input
              type="text"
              className="user-input"
              name="title"
              placeholder="Task Title"
              id=""
              onChange={(evt) => setTitle(evt.target.value)}
            />
            <input
              type="text"
              className="user-input-desc"
              name="desc"
              placeholder="Task Description"
              id=""
              onChange={(evt) => setDesc(evt.target.value)}
            />
            <input
              type="text"
              className="user-input"
              name="amt"
              placeholder="Amount"
              id=""
              onChange={(evt) => {
                const input = evt.target.value;
              
                if (/^[0-9]*$/.test(input)) {
                 
                  setAmt(input);
                }
                else{
                  alert("Fill numeric value");
                }
               
              }}
            />
            <input
              type="date"
              className="user-input"
              name="deadline"
              placeholder="Deadline"
              id=""
              onChange={(evt) => setDeadline(evt.target.value)}
            />
         
            <select
              className="type-drop"
              name="type"
              id=""
              onChange={(evt) => toggleType(evt.target.value)}
            >
              <option value="Bulk Task">Bulk Task</option>
              <option value="Single Task">Single Task</option>
              <option value="Social Media Task">Social Media</option>
              <option value="Inperson Task">In-person</option>
              <option value="Seminar Task">Seminar</option>
              <option value="PopUpShop Task">PopUpShop</option>
              <option value="Bonus Task">Bonus</option>
           
            </select>
            {
              isSingle?<select
              className="type-drop"
              name="type"
              id=""
              onChange={(evt) => setAssigned(evt.target.value)}
            >
              <option value="none">Assign to</option>
              {
                users.map((user)=>{
                  if(!user.isAdmin){
                    return  <option value={user.userId}>{user.name}</option>
                  }
                  return <p></p>
                })
              }
            </select>:<div></div>
            }
            <button onClick={() => createNewTask()} className="submit-button">
              Add
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default CreateTask;
