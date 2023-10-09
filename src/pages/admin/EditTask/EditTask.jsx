import "./EditTask.css";
import { useEffect, useState } from "react";
import loginStatus from "../../../backend/loginStatus";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import updateBulkTaskData from "../../../backend/updateBulkTask";

const EditTask = (props) => {
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

  const [title, setTitle] = useState(props.data.title);
  const [desc, setDesc] = useState(props.data.description);
  const [amt, setAmt] = useState(props.data.amount);
  const [deadline, setDeadline] = useState(props.data.deadline);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);

  async function createNewTask() {
    if (
      title == null ||
      desc == null ||
      amt == null ||
      deadline == null
    ) {
      alert("Fill in all the compulsory fields!");
    } else {
      const taskObject = {
        title: title,
        description: desc,
        amount: amt,
        deadline: deadline,
        type: type,
        _id: props.data._id
      };
      setLoading(true);
      await updateBulkTaskData(taskObject);
      alert("success")
      
      setLoading(false);
      alert("Value updated successfully! You may close the modal now")
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="edit-body">
          <h1>Edit Task</h1>
          <section>
            <input
              type="text"
              className="user-edit-input"
              name="title"
              placeholder="Task Title"
              id=""
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            />
            <input
              type="text"
              className="user-edit-input-desc"
              name="desc"
              placeholder="Task Description"
              id=""
              value={desc}
              onChange={(evt) => setDesc(evt.target.value)}
            />
            <input
              type="text"
              className="user-edit-input"
              name="amt"
              placeholder="Amount"
              id=""
              value={amt}
              onChange={(evt) => setAmt(evt.target.value)}
            />
            <input
              type="date"
              className="user-edit-input"
              name="deadline"
              placeholder="Deadline"
              id=""
              value={deadline}
              onChange={(evt) => setDeadline(evt.target.value)}
            />
            {/* <input
              type="text"
              className="user-edit-input"
              name="type"
              placeholder="Task Type"
              id=""
              onChange={(evt) => setType(evt.target.value)}
            /> */}
                <select
             className="type-drop"
             name="type"
              id=""
            onChange={(evt) => setType(evt.target.value)}
            >
            <option value="Bulk Task">Bulk Task</option>
           <option value="Simple Task">Simple Task</option>
            </select>

            <button onClick={() => createNewTask()} className="submit-button">
              Save Changes
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default EditTask;
