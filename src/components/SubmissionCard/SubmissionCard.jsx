import acc_icon from "../../images/account_icon.png"
import handyellow from "../../images/hand-yellow.svg"
import "./SubmissionCard.css"
const SubmissionCard = (props) =>{
    return (
        <>
            <div className="card-parent">
                <div className="card-left">
                    <img src={acc_icon} alt="" srcset="" />
                    <p className="ambassador-name">John Dee<br/>USICT</p>
                </div>
                <div className="card-right">
                    <div className="subcard-left">
                        <p>Task</p>
                        <p>Submission</p>
                        <p>Details</p>
                    </div>
                    <img src={handyellow} alt="" className="subcard-right" />
                </div>
            </div>
        </>
    )
}

export default SubmissionCard;