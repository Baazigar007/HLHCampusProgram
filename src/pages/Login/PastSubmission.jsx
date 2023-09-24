import './PastSubmission.css';
import avatar from '../../images/avatar.svg';
import PastSubmissionTile from '../../components/PastSubmissionTile/PastSubmissionTile';
import TopSheet from '../../components/TopSheet/TopSheet';

const PastSubmission = () => {
    let list =[1,2,3,4];
    return(
        <>
        <div className='submitbody'>
        <TopSheet/>
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