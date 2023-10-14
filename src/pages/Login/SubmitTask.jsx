import { useNavigate, useParams } from "react-router-dom";
import TasksTileUser from "../../components/TasksTileUser/TasksTileUser";
import "./SubmitTask.css"
import { useEffect } from "react";
import loginStatus from "../../backend/loginStatus";
import { useState } from "react";
import SubmitData from "../../backend/submitTask";
import realm_app from "../../backend/UserContext";
import fetchSingleTask from "../../backend/fetchSingleTask";
import updateData from "../../backend/updateTask";
import Loading from "../../components/Loading/Loading";
import Topsheet from "../../components/TopSheet/TopSheet";

const SubmitTask = () =>{
  //checked logged in 
  const [taskDetails, setTaskDetails] = useState({})
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([]);
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
    const params = useParams()
    const[taskId, setTaskId] = useState(null)
    const handleChange = (event) => {
      const files = event.target.files;
      setImages(files);
    };
    useEffect(()=>{
      setLoading(true)
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("taskid");
        setTaskId(id)
      async function getTask(taskid){
        const data = await fetchSingleTask(id)
        setTaskDetails(data)
        console.log("data is ", data)
      }
      getTask(id);
      setLoading(false)

    }, [params])
    
  const user_id = realm_app.currentUser.customData.userId;
  const user_data = realm_app.currentUser.customData;
  console.log(user_id);


  const [comment, setComment] = useState(null);
  
  async function readAsDataURLAsync(file) {
    const reader = new FileReader();
  
    return new Promise((resolve, reject) => {
      reader.onload = function() {
        resolve(reader.result);
      };
  
      reader.onerror = function(error) {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }

  async function submission(){
setLoading(true)
      console.log(images.length)
      if(images.length>10 || images.length<1){
        alert("Please upload atleast 1 and a maximum of 10 images!")
      }
      else{
        let imgarray = []
        for(let i=0;i<images.length;i++){
          const el = await readAsDataURLAsync(images[i]);
          imgarray.push(el)
        }
         const submitObject = {
        "title": taskDetails.title,
       "comment" : comment,
       "user_id" : user_id,
       "task_id" : taskDetails.id,
       "reward":0,
       "status": "pending",
       "amount": taskDetails.amount,
       "description": taskDetails.description,
       "deadline": taskDetails.deadline,
       "userdata": user_data,

      } 
    await  SubmitData(submitObject, imgarray);
    await  updateData(taskDetails, user_id)
      alert("Task submitted successfully!");
      setLoading(false)

      navigate('/home')
      }
     
  }
  
    return (
        <>
        {
          loading?<Loading/>:<div className="submit-task-body">
            <Topsheet/>
          <div className="submit-task-header">
              <p>{taskDetails.title}</p>
          </div>
          <TasksTileUser data={taskDetails}/>
          <div className="add-files">
              <p className="add-photo-text">{"Add photos as proof of task (maximum 10)"}</p>
          <input type="file" accept="image/*" multiple max="10" onChange={handleChange}/>
          <p>{"Add comment (optional)"}</p>
          <input type="text" placeholder="Type your comment here" onChange={(evt)=>setComment(evt.target.value)}/>
          <button onClick={()=>submission()} className="submit-task-btn">Submit</button>
          </div>
      </div>
        }
        </>
    )
}

export default SubmitTask;