import "./AdminSheet.css";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import logo from "../../images/logo.svg"
import avatar from "../../images/avatar.svg"
import { useNavigate } from "react-router-dom";
import logoutUser from "../../backend/logout";

const AdminSheet = () => {
  async function logout(){
    logoutUser().then((_)=>{
      navigate('/')
    })
  }
    const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <img className="logo-right" src={logo} onClick={() => setOpen(true)} alt="" />

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} >
        <Sheet.Container >
          <Sheet.Header className="sheetbody" />
          <Sheet.Content className="sheetbody">{
        
          <div className="sheetcontent">
            {/* <img src={avatar} alt="" /> */}
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/admin')}}>
                <p>Dashboard</p>
            </div>
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/admin/bulktasks')}}>
                <p>View Tasks</p>
            </div>
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/admin/createuser')}}>
                <p>Create User</p>
            </div>
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/admin/createtask')}}>
                <p>Create Task</p>
            </div>

            <div className="sheet-tile" onClick={()=>{logout()}}>
                <p>logOut</p>
            </div>


            <button className="closebtn" onClick={()=>{setOpen(false)}}>close</button>
         

          </div>
          }</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default AdminSheet;
