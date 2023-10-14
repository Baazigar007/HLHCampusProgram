
import "./PastSubmissionTile.css"
const PastSubmissionTile= (props) =>{
    return (
        <>
            <div className="tile-box">
                
                <div className="tile-right">
                    <div className="tile-info">
                        <p>{props.data.title}</p>
                        <p>Status : {props.data.status}</p>
                        <p>Comment : {props.data.comment}</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default PastSubmissionTile;