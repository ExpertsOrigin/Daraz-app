import React, { useEffect, useState } from 'react'
import '../Assets/Style/Products.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function Spproduct() {
  const [data, setdata] = useState([])
  const { id } = useParams();
  const navigate = useNavigate()

  const [cartdata, setcartdata] = useState([])
  sessionStorage.setItem("id", id)
  useEffect(() => {
    axios.get(`http://localhost:4000/order${id}`).then((res) => {

      setdata(res.data.d || [])
    }).catch((error) => {
      console.log(error)
    })
  }, [id])

  const addtocart = () => {
    const check = sessionStorage.getItem("isLoggedIn")
    if (check) {

      const email = sessionStorage.getItem("email")
      const id = sessionStorage.getItem("id")
      axios.post("http://localhost:4000/cartsave", { email, id }).then((res) => {
        setcartdata(res.data.d)
        window.location.reload()
      }).catch((error) => {
        console.log(error)
      })

      navigate('/mycart')

    } else {
      navigate('/login')
    }

  }
  const bynow = () => {
    const check = sessionStorage.getItem("isLoggedIn")
    if (check) {

      const email = sessionStorage.getItem("email")
      const id = sessionStorage.getItem("id")
      axios.post("http://localhost:4000/cartsave", { email, id }).then((res) => {

        window.location.reload()
      }).catch((error) => {
        console.log(error)
      })

      navigate(`/order/${id}`)

    } else {
      navigate('/login')
    }

  }

  const Logout = () => {
    sessionStorage.clear();
    alert("logged out successfully");
    navigate("/")
}

  return (
    <>
            <button className="logout" onClick={Logout}>Logout</button>

      <section className="main-section">
        {
          data.map((res) => {
            const { randomid, detail, price, imageurl } = res;
            return (
              <>
                <div className="product-item imgdiv"><img className='product-image' src={imageurl} alt="image loading" /></div>
                <div className="product-item pricediv">
                  <h4 className="viewproduct-h1-1">{detail}</h4>
                  <p className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    &nbsp; 65 Ratings | 157 Answered Questions</p>
                  <p className="rating">No Brand | More Automative from No Brand</p>
                  <hr className="horiline" />
                  <h2 className="product-price-h2-1">Rs. {price}</h2>
                  <p className="quantity">Quantity = 1</p>
                  {/* <button className='bybtn' ><Link className='buy-button' to={`/order/${randomid}`}>Buy now</Link></button> */}
                  <button className='bybtn' onClick={bynow} >Buy now</button>
                  <button className='bybtn' onClick={addtocart} >Add to cart</button>
                </div>

              </>
            )
          })
        }

        <div className="product-item store">
          <div className="delivery">
            <h6 className="hint">Delivery</h6>
            <h5 className="delivery-location"><i class="fa-solid fa-location-dot"></i> Punjab</h5>
            <hr className="horiline" />
            <h6 className="delivery-charges"><i class="fa-solid fa-truck"></i> Standard Delivery :&nbsp;&nbsp; 200</h6>
            <p className="cash-delivery"><i class="fa-solid fa-money-bill-wave"></i> Cash on Delivery Available</p>
          </div>
          <hr className="horiline" />

          <div className="services">
            <h6 className="hint">Services</h6>

            <p className="services-1">14 days free & easy return</p>
            <p className="services-1">Warranty not available</p>
          </div>
          <hr className="horiline" />

          <div className="sold-by">
            <h6 className="hint">Sold-by</h6>

            <h4 className="owner">Online Siddiqui Store</h4>
          </div>
        </div>
      </section>


    </>
  )
}
