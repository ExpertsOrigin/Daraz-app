import React, { useEffect, useState } from 'react'
import '../Assets/Style/Order.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
export default function Order() {
    
    const { id } = useParams();
    console.log(id)
    const [data, setdata] = useState([])
    const navigate = useNavigate();
    const name = sessionStorage.getItem("name");
    const phone = sessionStorage.getItem("phone");
    const address = sessionStorage.getItem("address");    
    const email = sessionStorage.getItem("email");
    const check = sessionStorage.getItem("isLoggedIn")

    // useEffect(() => {
    //   if (!check || !email) {
    //     navigate("/login");
    //   }
    // }, [])

sessionStorage.setItem("id",{id})
const Logout = () => {
    sessionStorage.clear();
    alert("logged out successfully");
    navigate("/")
}

    useEffect(() => {
        axios.get(`http://localhost:4000/order${id}`).then((res) => {
            setdata(res.data.d || [])

        }).catch((error) => {
            console.log(error)
        })
    }, [id])




    return (
        <>
            <button className="logout" onClick={Logout}>Logout</button>

            <section className="main-order">
                <div className="main-order-1 order-box-1 ordering-1 first-order-div" >
                    <p className="order-p-1">Deliver to {name}</p>
                    <p className="order-p-1">Home | {phone} | {address}</p>
                    <p className="order-p-1">Bill to the same address</p>
                    <p className="order-p-1">Email to: {email}</p>
                </div>

                <div className="main-order-1 order-box-2" >
                    <p className="order-p-1">Discount And Payment</p>
                    <p className="order-p-1"><i className="fa-solid fa-ticket"></i> Daraz Voucher <span className="price-span">No Applicable Voucher</span> </p>
                    <p className="order-p-1"><i className="fa-solid fa-receipt"></i> Promo Code</p>
                    <hr className="simpleline" />
                    <p className="order-p-1"><b>Order Summary</b></p>
                    <p className="order-p-1"><b>Items Total</b><span className="price-span">Rs.1139</span></p>
                    <p className="order-p-1"><b>Delivery Fee</b><span className="price-span">Rs.1139</span></p>
                    <p className="order-p-1"><b>Delivery Discount</b><span className="price-span">Rs.1139</span></p>
                    <p className="order-p-1"><b>Total Payment</b><span className="price-span">Rs.1139</span></p>
                    <p className="order-p-1 vat">VAT included, where applicable</p>
                    <button className='order-btn'><Link className='linkto-1' to={`/paymentpage/${id}`}  >Place Order</Link></button>

                </div>


                    <div className="main-order-1 order-box-1 second-div">
                    <p className="order-p-1">gushen store</p>
                    {
                        data.map((res) => {
                            const { detail } = res;
                            return (
                                <>
                                    <p className="order-p-1">{detail}</p>
                                    <hr className="simpleline" />
                    <div className="international-delivery"><p className="international">Standard Delivery | Free Received by 16 Jul - 25 Jul </p></div>
                    <div className="voucher"><p className="international">Store Voucher <span>Get Voucher <i className="fi fi-rr-angle-small-right"></i></span> </p></div>

                                </>
                            )
                        })
                    }
                    </div>



                    
            </section>


        </>
    )
}
