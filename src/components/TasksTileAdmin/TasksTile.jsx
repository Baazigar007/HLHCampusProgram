import "./TasksTile.css";
import edit from "../../images/pencil.svg";

const TasksTile = (props) => {
  return (
    <>
      <div className="taskstilebody">
        <div>
          <strong>
            <p>{props.data.title}</p>
          </strong>
          <p>Task Desc: {props.data.description}</p>
          <p>Task Amount: {props.data.amount}</p>
          <p>Task Deadline: {props.data.deadline}</p>
        </div>
        <div>
          <img src={edit} alt="" />
        </div>
      </div>
    </>
  );
};

export default TasksTile;
