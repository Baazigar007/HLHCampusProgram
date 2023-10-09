
import "./HomeTile.css"
import pinkhand from "../../images/hand-pink.svg"
import { useNavigate } from "react-router-dom"
const HomeTile= (props) =>{
    const navigate = useNavigate()
    return (
        <>
            <div className="tile-box" onClick={()=>{navigate('/submit?taskid='+props.data._id)}}>
                
                <div className="tile-right">
                    <div className="tile-info">
                        <p className="tile-head">{props.data.title}</p>
                        <p className="tile-desc"><b>Desc: </b>{props.data.description}</p>
                        <p><b>Deadline:</b> {props.data.deadline}</p>
                        <p><b>Task Type:</b> {props.data.type}</p>
                    </div>
                    <img src={pinkhand} alt="pink-hand-logo"></img>
                </div>
                
            </div>
        </>
    )
}

export default HomeTile;