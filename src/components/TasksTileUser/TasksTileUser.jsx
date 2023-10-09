import "./TasksTileUser.css";

const TasksTileUser = (props) => {
  return (
    <>
      <div className="taskstilebody">
        <div>
        <p className="tile-desc"><b>Task Desc:</b> {props.data.description}</p>
          <p><b>Task Amount:</b> {props.data.amount}</p>
          <p><b>Task Deadline:</b> {props.data.deadline}</p>
        </div>
      </div>
    </>
  );
};

export default TasksTileUser;
