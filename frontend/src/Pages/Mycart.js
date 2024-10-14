import React, { useEffect, useState } from 'react'
import '../Assets/Style/Cart.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export default function Mycart() {
    const { id } = useParams();
    const [data, setdata] = useState([])
    const navigate = useNavigate();
    const [checkdata, setcheckdata] = useState([]);
    const [finedata, setfinedata] = useState([])
    const email = sessionStorage.getItem("email");
    const name = sessionStorage.getItem("name");
    const check = sessionStorage.getItem("isLoggedIn")

    
    const productprice = sessionStorage.getItem("price")
    

    sessionStorage.setItem("id", id)
    sessionStorage.setItem("email", email);

    // useEffect(() => {
    //     if (check || email) {
    //         navigate("/mycart");
    //     }else{
    //         navigate("/login")
    //     }
    // })
    const Logout = () => {
        sessionStorage.clear();
        alert("logged out successfully");
        navigate("/")
    }

    const handleinput = (e) => {
        const { name,checked } = e.target;
        setcheckdata((prevData) => ({
            ...prevData, name, checked
        }));
    };

    console.log(checkdata)
    useEffect(() => {
        if (checkdata) {
            axios.post("http://localhost:4000/checkondata", { checkdata }).then((res) => {
                setfinedata(res.data.d)
                sessionStorage.setItem("singleprice",res.data.d[0].price)
            }).catch((error) => {
                console.log(error)
            })
        }else{
            
        }
    },[checkdata])

    useEffect(() => {
        const email = sessionStorage.getItem("email")
        axios.post("http://localhost:4000/viewcartdata", { email }).then((res) => {
            setdata(res.data.d || [])
            sessionStorage.setItem("price", res.data.d[0].price)
            sessionStorage.setItem("randomid", res.data.d[0].randomid)
        }).catch((error) => {
            console.log(error)
        })
    }, [id])
    const randomid = sessionStorage.getItem("randomid")

    const singleprice = sessionStorage.getItem("singleprice")
    console.log(singleprice)
    const price = Number(singleprice)
    const sum = price + 145;

const singleproductid = checkdata.name;

    return (
        <>
            <button className="logout" onClick={Logout}>Logout</button>
            <section className="cart">
                <div className="cart-pro">


                    {
                        data.map((res) => {
                            const { randomid, detail, price, image } = res;
                            return (
                                <>
                                
                                    <div key={randomid} >
                                        <input type="checkbox" name={randomid} onChange={handleinput} />                                     
                                        <div className="single-product">
                                            <h5 className="single-product-h5-1">SAA WORKS</h5>
                                            <hr />
                                            <div className="single-div"><img className='cart-product-img' src={image} alt="img loading" /> <p className="product-detailing">{detail}<br /><span className="product-detailing-span">No brand , color Family: Multicolor</span></p>
                                                <p className="pro-pricing">{price} </p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }


                </div>








                <div className="order-summary">
                    <h4 className="summary-h4-1">Order Summary</h4>
                    <p className="subtotal">Subtotal <span className="summary-product-price">Rs.{singleprice}</span></p>
                    <p className="subtotal">Shipping Fee <span className="summary-product-price">Rs. 145</span></p>
                    <hr />
                    <p className="subtotal">Total <span className="summary-product-price">Rs. {sum}</span></p>
                    <button className="proceed-to-checkout"><Link className='cart-btn' to={`/order/${singleproductid}`} >PROCEED TO CHECKOUT</Link></button>

                </div>
            </section>


        </>
    )
}
