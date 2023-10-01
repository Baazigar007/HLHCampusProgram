import "./AdminDashboard.css";
import SubmissionCard from "../../../components/SubmissionCard/SubmissionCard";
import logo from "../../../images/logo.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginStatus from "../../../backend/loginStatus";
import logoutUser from "../../../backend/logout";
import Loading from "../../../components/Loading/Loading";
import convertArrayOfObjectsToCSV from "../../../backend/convertToCSV";
import fetchAllUsers from "../../../backend/fetchAllUsers";
const AdminDashboard = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [schools, setSchools] = useState([])
  const [submissions_list, setSubmissions_list] = useState([])
  const [submissions_list_copy, setSubmissions_list_copy] = useState([])
  async function logoutAdmin(){
    setLoading(true);
    logoutUser().then(()=>{
      navigate('/')
    })
  }
  async function setSchoolFilter(val){
    if(val==="all"){
      setSubmissions_list(submissions_list_copy);
    }
    else{
      const filteredArray = submissions_list.filter((object) => object.college === val);
      setSubmissions_list(filteredArray)
    }
  }
  function removeDuplicates(array) {
    const set = new Set(array);
    return Array.from(set);
  }

  async function exportToCSV(){
    convertArrayOfObjectsToCSV()
  }
  useEffect(() => {
    setLoading(true)
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if(!x.isAdmin){
        navigate('/')
      }
    }

async function getData(){
  const data = await fetchAllUsers();
  let schools = []
  setSubmissions_list(data)
  setSubmissions_list_copy(data)
  for(let index in submissions_list){
    schools.push(submissions_list[index].college)
  }
  const schoolset = removeDuplicates(schools)
  console.log("school set ", schoolset)
  setSchools(schoolset)
}
       checkLogin();
       getData()
       setLoading(false)
    }, [navigate, submissions_list]);
  
  return (
    <>
      {
        loading?<Loading/>:<div className="admin-dash-parent">
        <div className="topblue">
        <img className="logo-right" src={logo} alt="" />

          <p className="setfilter">Set Filters:</p>

          <div className="filters">
            {/* <div className="status-filter">
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
            </div> */}

            <div className="status-filter">
              <label for="status">School:</label>
              <br />
              <select name="status" id="status" onChange={(evt)=>{setSchoolFilter(evt.target.value)}}>
                <option value="all">All</option>
                {/* {
                  schools.map((element)=>{
                    return <option value={element}>{element}</option>
                  })
                } */}
              </select>
            </div>
{/* 
            <div className="status-filter">
              <label for="status">Date From:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div> */}

            {/* <div className="status-filter">
              <label for="status">Date Till:</label>
              <br />
              <select name="status" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div> */}

            <div className="status-filter">
              <button className="export-csv-button" onClick={()=>{exportToCSV()}}>Export To CSV</button>
            </div>
          </div>
        </div>
        <div className="submission-parent">
          <div className="submissions">
            <p>Users</p>
          </div>
        </div>
        <div className="submissions-list">
          {submissions_list.length === 0 ? (
            <p>No submissions!</p>
          ) : 
          submissions_list.map((item) => {
            if(!item.isAdmin){
              return <SubmissionCard data={item} key={item._id}/>;
            }
            return <div></div>
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
