
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
                        <p>Desc: {props.data.description}</p>
                        <p>Deadline: {props.data.deadline}</p>
                        <p>Task Type: {props.data.type}</p>
                    </div>
                    <img src={pinkhand} alt="pink-hand-logo"></img>
                </div>
                
            </div>
        </>
    )
}

export default HomeTile;