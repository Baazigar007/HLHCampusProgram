import './Balance.css';
import avatar from '../../images/avatar.svg';
import BalanceTile from '../../components/BalanceTile/BalanceTile';
import TopSheet from '../../components/TopSheet/TopSheet';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import loginStatus from '../../backend/loginStatus';
import realm_app from '../../backend/UserContext';
import fetchWallet from '../../backend/fetchWallet';


const Balance = () =>{
  //checked logged in
    const[wallet, setWallet] = useState([])
    const [pending, setPending] = useState(0)
    const [accepted, setAccepted] = useState(0);
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
    console.log(realm_app.currentUser.customData)
    const earned = realm_app.currentUser.customData.totalEarned.$numberInt
    setEarn(earned)
    const balance = realm_app.currentUser.customData.balance.$numberInt
   setBal(balance)
    console.log(balance)
    console.log(earned)

   },[])

   useEffect(() => {
    // logic to fetch active data
    async function getTasks(){
     const res =  await fetchWallet()
     setWallet(res[0])
     setPending(res[1])
     setAccepted(res[2])
    }
    getTasks()
    // const tasks  = 
    
  }, []);

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
                       <h3 className='status-box'>Accepted: {accepted}</h3>
                     </div>

                     <div className='b-i-right'>
                       <h3 className='status-box'>Pending: {pending}</h3>
                     </div>
                    
                  </div>
                  
                   <div className='bal-list'>
                   {wallet.length === 0 ? (
                                  <p>No Rewards!</p>
                                   ) : 
                   wallet.map((item) => {
                       return <BalanceTile key={item} data={item}/>;
                    })
                   }
                   
                       
                        
                   </div>
            </div>

        </div>
        </>
    )
    
}

export default Balance;