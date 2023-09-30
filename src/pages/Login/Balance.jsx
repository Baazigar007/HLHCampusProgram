import './Balance.css';
import avatar from '../../images/avatar.svg';
import BalanceTile from '../../components/BalanceTile/BalanceTile';
import TopSheet from '../../components/TopSheet/TopSheet';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import loginStatus from '../../backend/loginStatus';
import realm_app from '../../backend/UserContext';


const Balance = () =>{
  //checked logged in
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

  //setter function for bal and total earn
  const [bal,setBal] = useState(null)
  const [earn, setEarn] = useState(null)
  //fetching data 
  
  useEffect(()=>{
    const earned = realm_app.currentUser.customData.totalEarned
    setEarn(earned)
    const balance = realm_app.currentUser.customData.totalBalance
   setBal(balance)
    console.log(balance)
    console.log(earned)

   },[])

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
                        <h3 className='amt-box'>{'$'+ earn}</h3>
                        <p className='box-head'>Total Earned</p>
                      </div>

                      <div className='b-i-right'>
                        <h3 className='amt-box'>{'$' + bal}</h3>
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