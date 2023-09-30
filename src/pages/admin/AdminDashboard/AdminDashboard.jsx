import "./AdminDashboard.css";
import SubmissionCard from "../../../components/SubmissionCard/SubmissionCard";
import logo from "../../../images/logo.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginStatus from "../../../backend/loginStatus";
import logoutUser from "../../../backend/logout";
import Loading from "../../../components/Loading/Loading";
const AdminDashboard = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  async function logoutAdmin(){
    setLoading(true);
    logoutUser().then(()=>{
      navigate('/')
    })
  }
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
  const submissions_list = [1,2];
  return (
    <>
      {
        loading?<Loading/>:<div className="admin-dash-parent">
        <div className="topblue">
        <img className="logo-right" src={logo} alt="" />

          <p className="setfilter">Set Filters:</p>

          <div className="filters">
            <div className="status-filter">
              <label for="status">Status:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="status-filter">
              <label for="status">Payment Status:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="status-filter">
              <label for="status">School:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="status-filter">
              <label for="status">Date From:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="status-filter">
              <label for="status">Date Till:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="status-filter">
              <button className="export-csv-button">Export To CSV</button>
            </div>
          </div>
        </div>
        <div className="submission-parent">
          <div className="submissions">
            <p>Submissions</p>
          </div>
        </div>
        <div className="submissions-list">
          {submissions_list.length === 0 ? (
            <p>No submissions!</p>
          ) : 
          submissions_list.map((item) => {
            return <SubmissionCard />;
          })
          }
        </div>
        <button className="add-task-button" onClick={()=>{logoutAdmin()}}>LogOut</button>
        <button className="add-task-button" onClick={()=>{navigate('/admin/bulktasks')}}>View/Add Bulk Tasks</button>
      </div>
      }
    </>
  );
};

export default AdminDashboard;
