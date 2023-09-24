import "./TaskDetails.css";
import avatar from "../../../images/avatar.svg";
import handblue from "../../../images/hand-blue.svg"
import filesvg from "../../../images/file-text.svg"

const TaskDetails = () => {
    const files= [1,2,3,4,5,7,8,9,0];
  return (
    <>
      <div className="task-details-body">
        <div className="task-details-header">
          <div>
            <img src={avatar} className="task-details-avatar" alt="" />
          </div>
          <div className="user-task-header-l">
            <strong>
              <p>John Doe</p>
            </strong>
            <p>
              Email: john@gmail.com
              <br />
              Phone : 78955555555
              <br />
              College : USICT
              <br />
              Sorority : Techspace
            </p>
          </div>
        </div>

        <div className="taskname-details">
          <p>Task Name</p>
        </div>

        <div className="task-info-parent">
          <div className="toggles">
            <div className="status-filter">
              <label for="status" className="label-details">
                Status:
              </label>
              <br />
              <select name="status" className="taskdetails-select" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="status-filter">
              <label for="status" className="label-details">
                Amount:
              </label>
              <br />
              <select name="status" className="taskdetails-select" id="status">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="added-files">
            <p className="label-details">Added files</p>
            <div className="files-grid">
                {files.map((el)=>{
                    return <img src={filesvg} alt="" srcset="" />
                })}
            </div>
          </div>

          <div className="Comments">
            <p className="comments">Comments</p>
            <center><div className="comment">
                    <p>Comment will appear here</p>
            </div></center>
          </div>

          <div className="save-btn-parent">
          <button><div className="save-btn">
                <img src={handblue} alt="" />
                <p>Save</p>
            </div></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
