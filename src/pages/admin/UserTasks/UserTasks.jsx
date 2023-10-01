import TasksTile from "../../../components/TasksTileAdmin/TasksTile";
import logo from "../../../images/logo.svg";
import "./UserTasks.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginStatus from "../../../backend/loginStatus";
import fetchSubmissionsByUsers from "../../../backend/fetchSubmissionsByUsers";
import fetchUserData from "../../../backend/fetchUserData";
import Loading from "../../../components/Loading/Loading";

const UserTasks = () => {
  // const tasks = [1,2,2,2,2,2,34,4]
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    sorority: "",
  });
  const [userid, setUserid] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if (!x.isAdmin) {
        navigate("/");
      }
    }

    async function getUserId() {
      const searchParams = new URLSearchParams(window.location.search);
      const id = await searchParams.get("userid");
      console.log("userid is ", id);
      setUserid(id);
    }

    async function getData() {
      const data = await fetchSubmissionsByUsers(userid);
      setSubmissions(data);
    }
    async function getUserData() {
      const datax = await fetchUserData(userid);
      console.log("user id is ", userid);
      console.log("data aaya hai ", datax);
      setUserData(datax);
    }

    async function callfunctions() {
      setLoading(true);
      await getUserId();
      await checkLogin();
      await getUserData();
      await getData();
      setLoading(false);
    }

    callfunctions();
  }, [navigate, userid]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bulk-task-body">
          <img className="logo-right" src={logo} alt="" />
          <div className="user-task-header">
            <div className="user-task-header-l">
              <strong>
                <p>{userData.name}</p>
              </strong>
              <p>
                Email: {userData.email}
                <br />
                Phone : {userData.phone}
                <br />
                College : {userData.college}
                <br />
                Sorority : {userData.sorority}
              </p>
            </div>
            {/* <div className="user-task-header-r">
    <img src={edit} alt="" />
  </div> */}
          </div>

          <div className="tasks-list">
            {submissions.length > 0 ? (
              submissions.map((element) => {
                return (
                  <div
                    onClick={() => {
                      navigate(
                        "/admin/taskdetails?submissionid=" + element._id
                      );
                    }}
                  >
                    <TasksTile data={element} key={element._id} />
                  </div>
                );
              })
            ) : (
              <p>No Submissions!</p>
            )}
          </div>

          {/* <div>
            <button className="add-bulk-task-btn"><img src={add} className="add-bulk-task-btn-img" alt="" /></button>
        </div> */}
        </div>
      )}
    </>
  );
};

export default UserTasks;
