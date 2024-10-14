import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/Style/Electronics.css'
import axios from 'axios'

export default function Grocery() {
  const [data, setdata] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/showbathitem").then((res) => {
      setdata(res.data)
    }).catch((error) => {
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

      <div className="product-card">

<div className="side-menu">
  <h4 className="side-menu-h4-1">Filters</h4>
  <h5 className="side-menu-h4-1">Promotion & Services</h5>
  <hr />
  <button className="filter-btn">Free Delivery</button>
  <button className="filter-btn">Best Price Guarateed</button>
  <button className="filter-btn">Authentic Brands</button>
  <button className="filter-btn">Daraz Verified</button>
  <button className="filter-btn">Cash On Delivery</button>
  <button className="filter-btn">Installment</button>
  <h4 className="side-menu-catagory"></h4>
  <h4 className="side-menu-brands">Brand</h4>
    <hr />
    <div className="brands-menu">
    <p className="brands-names">Mishbeeka</p>
    <p className="brands-names">BASEIN</p>
    <p className="brands-names">Blingstar</p>
    <p className="brands-names">Techmanistan</p>
    <p className="brands-names">FastForward</p>
    <p className="brands-names">Premier Home</p>
    </div>
    <h5 className="brand-location">Location</h5>
    <hr />
    <p className="brands-names">Pakistan</p>
    <p className="brands-names">China</p>
    <p className="brands-names">India</p>
</div>






<div className="pro-item-cards">
{
          data.map((res) => {
            const { randomid,detail, price, imageurl } = res;
            return (
              <>
                <Link to={`/spproduct/${randomid}`}>
                  <div class="card">
                    <img src={imageurl} class="card-img-top" alt="image loading" />
                    <div class="card-body">
                      <h6 class="card-title">{detail} </h6>
                      {/* <p className='card-p'><i class="fa-solid fa-star"></i> 4.2/5(64). 285 Sold</p> */}
                      <h5 class="card-text">{price}</h5>

                    </div>
                  </div>
                </Link>
              </>
            )
          })
        }
</div>



      
      </div>
    </>
  )
}
