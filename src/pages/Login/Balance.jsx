import './Balance.css';
import avatar from '../../images/avatar.svg';
import BalanceTile from '../../components/BalanceTile/BalanceTile';
import TopSheet from '../../components/TopSheet/TopSheet';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import loginStatus from '../../backend/loginStatus';


const Balance = () =>{
    const wallet =[1,2];
    const navigate = useNavigate()
  useEffect(() => {
    
    async function checkLogin() {
      var x = await loginStatus();
      console.log("checking", x);
      if (x.isLogged === true) {
        if(x.isAdmin){
          navigate("/admin");
        }
      }
      else{
        navigate('/')
      }
    }
       checkLogin();
    }, [navigate]);
    return(
        <>
          <div className='balancebody'>
          <TopSheet/>
         <div className='b-head'>
                    <h2>Your Balance</h2>
                   </div>
       
            <div className='b-bottom'>
                   <div className="p-image"> 
                          <img src={avatar} alt ="pfp"/>
                   </div>

                   <div className='bal-info'>
                     
                      <div className='b-i-left'>
                        <h3 className='amt-box'>$45</h3>
                        <p className='box-head'>Total Earned</p>
                      </div>

                      <div className='b-i-right'>
                        <h3 className='amt-box'>$50</h3>
                        <p className='box-head'>Balance</p>
                      </div>

                   </div>

                   <div className= 'submission-info'>
                     
                     <div className='b-i-left'>
                       <h3 className='status-box'>Accepted: 17</h3>
                     </div>

                     <div className='b-i-right'>
                       <h3 className='status-box'>Pending: 9</h3>
                     </div>
                    
                  </div>
                  
                   <div className='bal-list'>
                   {wallet.length === 0 ? (
                                  <p>No Rewards!</p>
                                   ) : 
                   wallet.map((item) => {
                       return <BalanceTile />;
                    })
                   }
                   
                       
                        
                   </div>
            </div>

        </div>
        </>
    )
    
}

export default Balance;