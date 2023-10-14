import "./TasksTile.css";
import edit from "../../images/pencil.svg";
import EditTask from "../../pages/admin/EditTask/EditTask";
import Modal from 'react-modal';
import { useState } from "react";

const TasksTile = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
      <div className="taskstilebody">
        <div>
          <strong>
            <p>{props.data.title}</p>
          </strong>
          <div className="descbody">
          <p>Task Desc: {props.data.description}</p>
          </div>
          <p>Task Amount: {props.data.amount}</p>
          <p>Task Deadline: {props.data.deadline}</p>
        </div>
        <div onClick={()=>{setIsOpen(true)}} style={{"cursor": "pointer"}}>
          <img src={edit} alt="" />
        </div>
        <Modal
        style={{"content": {"backgroundColor": "#E48EC3", }}}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Task Modal"
      >
       <EditTask data={props.data}/>
      </Modal>
      </div>
    </>
  );
};

export default TasksTile;
