import "./BalanceTile.css"
const BalanceTile= (props) =>{
    return (
        <>
            <div className="tile-box">
                
                <div className="tile-right">
                    <div className="tile-info">
                        <p className="tile-info-head">Task 1</p>
                        <p>Amount : +0$</p>
                        <p>Comment : Rejected, Deadline not met</p>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default BalanceTile;