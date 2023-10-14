import "./TopSheet.css";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import logo from "../../images/logo.svg"
import avatar from "../../images/avatar.svg"
import { useNavigate } from "react-router-dom";
import logoutUser from "../../backend/logout";

const TopSheet = () => {
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
            <img  className="image"  src={avatar} alt="" />
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/home')}}>
                <p>Home</p>
            </div>
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/profile')}}>
                <p>Profile</p>
            </div>
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/pastsubmission')}}>
                <p>Past Submissions</p>
            </div>
            <div className="sheet-tile" onClick={()=>{setOpen(false); navigate('/balance')}}>
                <p>Balance</p>
            </div>

            <div className="sheet-tile" onClick={()=>{logout()}}>
                <p>logOut</p>
            </div>


            <button className="closebtn" onClick={()=>{setOpen(false)}}> close </button>
         

          </div>
          }</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default TopSheet;
