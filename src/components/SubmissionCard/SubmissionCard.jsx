import { useNavigate } from "react-router-dom"
import acc_icon from "../../images/account_icon.png"
import handyellow from "../../images/hand-yellow.svg"
import "./SubmissionCard.css"
const SubmissionCard = (props) =>{
    const navigate = useNavigate()
    return (
        <>
            <div className="card-parent" onClick={()=>{navigate("/admin/usertasks?userid="+props.data.userId)}}>
                <div className="card-left">
                    <img src={acc_icon} alt="" srcset="" />
                    
                </div>
                <div className="card-right">
                    <div className="subcard-left">
                        <strong><p>Name: {props.data.name}</p></strong>
                        <strong><p>College: {props.data.college}</p></strong>
                        <p>Total Submissions: {props.data.taskSubmissions?props.data.taskSubmissions.length:0}</p>
                        <p>Total Earned: {props.data.totalEarned}</p>
                    </div>
                    <img src={handyellow} alt="" className="subcard-right" />
                </div>
            </div>
        </>
    )
}

export default SubmissionCard;