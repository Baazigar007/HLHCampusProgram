import './PastSubmission.css';
import logo from '../../images/logo.svg';
import avatar from '../../images/avatar.svg';
import PastSubmissionTile from '../../components/PastSubmissionTile/PastSubmissionTile';

const PastSubmission = () => {
    let list =[1,2,3,4];
    return(
        <>
        <div className='submitbody'>
        <img className="menu" src={logo} alt="" />
         <div className='sb-head'>
                    <h2>Past Submission</h2>
                   </div>
       
            <div className='sb-bottom'>
                   <div className="p-image"> 
                          <img src={avatar} alt ="pfp"/>
                   </div>
                  
                   <div className='sumissions'>
                   {list.length === 0 ? (
                                  <p>No submissions!</p>
                                   ) : 
                   list.map((item) => {
                       return <PastSubmissionTile />;
                    })
                   }
                       
                        
                   </div>
            </div>

        </div>
        
        </>
    )

}

export default PastSubmission;