import TasksTileUser from "../../components/TasksTileUser/TasksTileUser";
import "./SubmitTask.css"
const SubmitTask = () =>{
    return (
        <>
        <div className="submit-task-body">
            <div className="submit-task-header">
                <p>Task Name</p>
            </div>
            <TasksTileUser/>
            <div className="add-files">
                <p className="add-photo-text">{"Add photos as proof of task (maximum 10)"}</p>
            <input type="file" accept="image/*" multiple max="10" />
            <p>{"Add comment (optional)"}</p>
            <input type="text" placeholder="Type your comment here"/>
            </div>
        </div>
        </>
    )
}

export default SubmitTask;