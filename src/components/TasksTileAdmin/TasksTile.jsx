import "./TasksTile.css";
import edit from "../../images/pencil.svg";

const TasksTile = () => {
  return (
    <>
      <div className="taskstilebody">
        <div>
          <strong>
            <p>Task Name 1</p>
          </strong>
          <p>Task Desc</p>
          <p>Task Amount</p>
          <p>Task Deadline</p>
        </div>
        <div>
          <img src={edit} alt="" />
        </div>
      </div>
    </>
  );
};

export default TasksTile;
