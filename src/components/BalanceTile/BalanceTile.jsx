import "./BalanceTile.css"
const BalanceTile= (props) =>{
    return (
        <>
            <div className="tile-box">
                
                <div className="tile-right">
                    <div className="tile-info">
                        <p className="tile-info-head">Task 1</p>
                        <p>Status: {props.data.status}</p>
                        <p>Amount : +{props.data.reward}$</p>
                        <p>Comment : {props.data.comment}</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default BalanceTile;