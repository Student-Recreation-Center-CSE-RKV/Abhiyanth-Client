import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { cashfree } from './util'
import './paypal.css';

import { useParams } from 'react-router-dom';

const Cashfree = () => {
    const params = useParams()
    const isSessionId = params.sessionid
    const [loading, setLoading] = useState('');
    const [sessionId, setSessionId] = useState('');
    let version = cashfree.version();
    
    const getSessionId = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.post('https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/createOrder', {
            cust_id: "12345",
            email: "revanth@gmail.com",
            phone: "9885930886",
            name: "revanth",
            amount: 3,
            note: "testing",
            version:version
            })
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
            returnUrl: "https://us-central1-abhiyanth-a8d4c.cloudfunctions.net/checkStatusForWeb/{order_id} ",
            
        }   
        cashfree.checkout(checkoutOptions).then(function(result){
            console.log(result)
            if(result.error){
                alert(result.error.message);
            }
            if (result.status === "redirect" && result.url) {
            console.log("Redirecting to:", result.url);
            window.location.href = result.url; 
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
                <input type="text" value={sessionId} />
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