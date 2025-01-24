import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { cashfree } from './util'
import './paypal.css';

import { useNavigate, useParams } from 'react-router-dom';

const Cashfree = () => {
    const navigate = useNavigate();
    const params = useParams()
    const isSessionId = params.sessionid
    const [loading, setLoading] = useState('');
    const [sessionId, setSessionId] = useState('');
    let version = cashfree.version();
    
    const getSessionId = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.post('https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/createOrderProd', {version})
        .then((res)=>{
            setLoading(false);
            setSessionId(res.data.payment_session_id);
            console.log(res.data);
            // window.open(res.data, '_blank');
        })
        .catch((err)=>{
            setLoading(false);
            console.log(err);
        })
    }

    const handlePayment = ()=>{
        let checkoutOptions = {
            paymentSessionId: sessionId,
            returnUrl: "https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/checkStatusForWebProd/{order_id} ",
            
        }   
        cashfree.checkout(checkoutOptions).then(function(result){
            console.log(result)
            if(result.error){
                alert(result.error.message);
            }
            if(result.redirect){
                // navigate("/");
                console.log("Redirection")
                console.log(result);
            }
        });
    }

    useEffect(()=>{
        setSessionId(isSessionId)
    }, [isSessionId])

  return (
    <>
    <div className='main'>
        
        <div className='card px-5 py-4 mt-5'>
            <form onSubmit={getSessionId}>
                <h1>Session Id</h1>
                <input type="text" value={sessionId} onChange={(e)=>{setSessionId(e.target.value)}} />
                {!loading? <div className='col-12 center'>
                    <button className='w-100 ' type="submit">getSessionID</button>
                </div>
                :
                <div className='col-12 center'>
                    <button className='w-100 text-center' type="submit">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden ">Wait...</span>
                    </div>
                    </button>
                </div>
                }
            </form>
            <div className='col-12 center'>
                <button className='w-100 ' type="submit" onClick={handlePayment}>Pay Now</button>
            </div>
        </div>
    </div>
    <p className='m-0'>@codesense24</p>
    <p className='' style={{fontSize: "14px"}}>Subscribe my youtube channel</p>
    </>
  )
}

export default Cashfree