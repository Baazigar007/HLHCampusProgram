import "./TasksTileUser.css";

const TasksTileUser = (props) => {
  return (
    <>
      <div className="taskstilebody">
        <div>
          <p>Task Desc: {props.data.description}</p>
          <p>Task Amount: {props.data.amount}</p>
          <p>Task Deadline: {props.data.deadline}</p>
        </div>
      </div>
    </>
  );
};

export default TasksTileUser;
