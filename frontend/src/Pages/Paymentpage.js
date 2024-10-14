import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "../Assets/Style/Paymentpage.css"
import axios from 'axios';
export default function Paymentpage() {
    const {id} = useParams();
    const [data,setdata] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
    axios.get(`http://localhost:4000/order${id}`).then((res)=>{
    setdata(res.data.d)
    }).catch((error)=>{
    console.log(error)
    })
    })

    const Logout = () => {
        sessionStorage.clear();
        alert("logged out successfully");
        navigate("/")
    }

  return (
<>
<button className="logout" onClick={Logout}>Logout</button>

<section className="payment">
    <h4 className="payment-h2-1">Select Payment Method</h4>
    <div className="payment-div-2">
        <div className="payment-method">
            <div className="all-banks bank"><Link to = "#"><img className='payment-img' src={require("../Assets/Images/easypaisa.png")} alt="" /></Link></div>
            <div className="all-banks easypaisa"><Link to = "#"><img className='payment-img' src={require("../Assets/Images/jazzcash.png")} alt="" /></Link></div>
            <div className="all-banks jazzcash"><Link to = "#"><img className='payment-img' src={require("../Assets/Images/HBL.png")} alt="" /></Link></div>
            <div className="all-banks cash-on-delivery"><Link to = "#"><img className='payment-img' src={require("../Assets/Images/cashondelivery.png")} alt="" /></Link></div>
            <div className="all-banks credit-card"><Link to = "#"><img className='payment-img' src={require("../Assets/Images/installment.png")} alt="" /></Link></div>
            <div className="all-banks credit-card"><Link to = "#"><img className='payment-img' src={require("../Assets/Images/credit-card.png")} alt="" /></Link></div>
        </div>
        <div className="payment-page-summary">
            <h4 className="summary-h4-1">Order Summary</h4>
            {
                data.map((res)=>{
                const {price} = res;
                return(
                    <>
                    <p className="summary-p-1">Subtotal <span className='summary-price-span'>Rs. {price}</span></p>
                    <p className="summary-p-2">Total Amount <span className='summary-price-span'>Rs. {price}</span></p>
                    </>
                )
                })
            }
        </div>
    </div>
</section>

</>
  )
}
