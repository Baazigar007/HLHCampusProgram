
import "./HomeTile.css"
import pinkhand from "../../images/hand-pink.svg"
const HomeTile= (props) =>{
    return (
        <>
            <div className="tile-box">
                
                <div className="tile-right">
                    <div className="tile-info">
                        <p className="tile-head">Task 1</p>
                        <p>Desc: Add 10 photos of your campus</p>
                        <p>Deadline: 04- 11- 2023</p>
                        <p>Task Type: Beginner</p>
                    </div>
                    <img src={pinkhand} alt="pink-hand-logo"></img>
                </div>
                
            </div>
        </>
    )
}

export default HomeTile;