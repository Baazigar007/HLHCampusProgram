import "./TaskDetails.css";
import avatar from "../../../images/avatar.svg";
import handblue from "../../../images/hand-blue.svg";
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginStatus from "../../../backend/loginStatus";
import fetchSubmissionDetails from "../../../backend/fetchSubmissionDetails";
import fetchImages from "../../../backend/fetchImages";
import updateSubmission from "../../../backend/updateSubmission";
import Loading from "../../../components/Loading/Loading";
import AdminSheet from "../../../components/AdminSheet/AdminSheet";

const TaskDetails = () => {
  const [submissionId, setSubmissionId] = useState(null);
  const [submission, setSubmission] = useState({});
  const [images, setImages] = useState([])
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  
  const [payStatus, setPayStatus] = useState(null)
  const [completionStatus, setCompletionStatus] = useState(null)


  async function saveTask(){
    const data = submission
    if(payStatus==="accepted" && data.reward!==data.amount){
      data.reward = data.amount
    }
    else if(payStatus==="pending" && data.reward===data.amount){
      data.reward = 0
    }

    if(completionStatus==="pending" && completionStatus!==data.status){
      data.status = "pending";
    }
    else if(completionStatus==="accepted" && completionStatus!==data.status){
      data.status = "accepted"
    }
    setLoading(true)
    const res = await updateSubmission(data)
    console.log(res)
    alert("successful")
    // console.log(res)
    setLoading(false)
    console.log(data)
  }
  useEffect(() => {
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if (!x.isAdmin) {
        navigate("/");
      }
    }

    async function callFunctions() {
      setLoading(true)
      await checkLogin();
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("submissionid");
      console.log(id);
       setSubmissionId(id);
      const datax = await fetchSubmissionDetails(id);
      
       setSubmission(datax);
      const imgs = await fetchImages(id);
      setImages(imgs)
      // console.log("idhar ka data ", imgs);
      setLoading(false)
      setPayStatus(datax.reward.toString()===datax.amount.toString()?"accepted":"pending")
      setCompletionStatus(datax.status==="accepted"?"accepted":"pending")
    }

    callFunctions()
  }, [navigate, submissionId]);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {
        loading?<Loading/>:<div className="task-details-body">
          <AdminSheet/>
        <div className="task-details-header">
          <div>
            <img src={avatar} className="task-details-avatar" alt="" />
          </div>
          <div className="user-task-header-l">
            <strong>
              <p>{submission.userdata?submission.userdata.name:""}</p>
            </strong>
            <p>
              Email: {submission.userdata?submission.userdata.email:""}
              <br />
              Phone : {submission.userdata?submission.userdata.phone:""}
              <br />
              College : {submission.userdata?submission.userdata.college:""}
              <br />
              Sorority : {submission.userdata?submission.userdata.sorority:""}
            </p>
          </div>
        </div>

        {
          isOpen?<div></div>:<div className="taskname-details">
          <p>{submission.title}</p>
        </div>
        }

        <div className="task-info-parent">
          <div className="toggles">
            <div className="status-filter">
              <label for="status" className="label-details">
                Status:
              </label>
              <br />
              <select name="status" className="taskdetails-select" value={completionStatus} id="status" onChange={(evt)=>{setCompletionStatus(evt.target.value)}}>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="status-filter">
              <label for="paystatus" className="label-details">
                Amount:
              </label>
              <br />
              <select name="paystatus" className="taskdetails-select" value={payStatus} id="paystatus" onChange={(evt)=>{setPayStatus(evt.target.value)}}>
                <option value="pending">Unpaid</option>
                <option value="accepted">Paid</option>
              </select>
            </div>
          </div>

          <div className="added-files">
            <p className="label-details">Added files</p>
            <button onClick={()=>{setIsOpen(true)}}>
              <div className="save-btn">
                <img src={handblue} alt="" />
                <p>View Files</p>
              </div>
            </button>
          </div>

          <div className="Comments">
            <p className="comments">Comments</p>
            <center>
              <div className="comment">
                <p>{submission.comment}</p>
              </div>
            </center>
          </div>

          <div className="save-btn-parent">
            <button onClick={()=>{saveTask()}}>
              <div className="save-btn">
                <img src={handblue} alt="" />
                <p>Save</p>
              </div>
            </button>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <button className="closebtn" onClick={()=>{setIsOpen(false)}}>close</button>
          <br /><br />
          {
            images.map((image)=>{
              return <img src={image} alt="" srcset="" className="submitted-images" />
            })
          }
      </Modal>
      </div>
      }
    </>
  );
};

export default TaskDetails;
