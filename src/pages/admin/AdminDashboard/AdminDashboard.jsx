import "./AdminDashboard.css";
import SubmissionCard from "../../../components/SubmissionCard/SubmissionCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginStatus from "../../../backend/loginStatus";
import logoutUser from "../../../backend/logout";
import Loading from "../../../components/Loading/Loading";
import convertArrayOfObjectsToCSV from "../../../backend/convertToCSV";
import fetchAllUsers from "../../../backend/fetchAllUsers";
import AdminSheet from "../../../components/AdminSheet/AdminSheet";
import school_names from "../../Login/schooldata";
const AdminDashboard = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [schools, setSchools] = useState(school_names)
  const [submissions_list, setSubmissions_list] = useState([])
  const [submissions_list_copy, setSubmissions_list_copy] = useState([])
  const [currentSchool, setCurrentSchool] = useState("all")
 
  async function setSchoolFilter(val){
    setCurrentSchool(val)
    console.log("val is ",val)
    if(val==="all"){
      setSubmissions_list(submissions_list_copy);
    }
    else{
      const filteredArray = submissions_list.filter((object) => object.college === val);
     await setSubmissions_list(filteredArray)
      // setSubmissions_list(filteredArray)
      console.log("val is ", filteredArray)
      console.log("val is ", submissions_list)
    }
  }
  async function exportToCSV(){
    convertArrayOfObjectsToCSV()
  }
  useEffect(() => {
    setLoading(true)
    async function checkLogin() {
      var x = await loginStatus();
      // console.log("checking", x);
      if(!x.isAdmin){
        navigate('/')
      }
    }

async function getData(){
  const data = await fetchAllUsers();
  let schools = []
  setSubmissions_list(data)
  setSubmissions_list_copy(data)
  // for(let index in submissions_list){
  //   schools.push(submissions_list[index].college)
  // }
  // const schoolset = removeDuplicates(schools)
  // console.log("school set ", schoolset)
  // setSchools(schoolset)
}
       checkLogin();
       getData()
       setLoading(false)
    }, [navigate, submissions_list]);
  
  return (
    <>
      {
        loading?<Loading/>:<div className="admin-dash-parent">
          <AdminSheet/>
        <div className="topblue">
        {/* <img className="logo-right" src={logo} alt="" /> */}

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
                {
                  schools.map((element)=>{
                    return <option value={element}>{element}</option>
                  })
                }
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

        <div className="submission-parent-admin">
          <div className="submissions-admin">
            <p>Users</p>
          </div>
        </div>
        <div className="submissions-list">
          {submissions_list.length === 0 ? (
            <p>No submissions!</p>
          ) : 
          submissions_list.map((item) => {
            if(!item.isAdmin && (item.college==currentSchool || currentSchool==="all")){
              return <SubmissionCard data={item} key={item._id}/>;
            }
            return <div></div>
          })
          }
        </div>
        {/* <button className="add-task-button" onClick={()=>{logoutAdmin()}}>LogOut</button>
        <button className="add-task-button" onClick={()=>{navigate('/admin/bulktasks')}}>View/Add Bulk Tasks</button>
        <button className="add-task-button" onClick={()=>{navigate('/admin/createuser')}}>Create New User</button> */}
      </div>
      }
    </>
  );
};

export default AdminDashboard;
