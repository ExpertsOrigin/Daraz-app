import React from 'react'
import '../Assets/Style/Home.css'
import { Link, useNavigate } from 'react-router-dom'
import '../Assets/Style/Menu.css'
export default function Home() {
  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.clear();
    alert("logged out successfully");
    navigate("/")
  }

  return (
    <>
      <button className="logout" onClick={Logout}>Logout</button>

      <section className="first-section">

        <div className="menu-items">
          <Link className='menu-grocery-1'>Groceries and pets</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Fresh produce</Link><br />
            <Link className="the-menu-links">Animals</Link><br />
            <Link className="the-menu-links">Dogs</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">Frozen Food</Link><br />
          </div><br />


          <Link className='menu-grocery-1'>Health & Beauty</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Make-up</Link><br />
            <Link className="the-menu-links">Beauty Tools</Link><br />
            <Link className="the-menu-links">Skin Care</Link><br />
            <Link className="the-menu-links">Hair Care</Link><br />
            <Link className="the-menu-links">Fragrance</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Men's Fashion</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Face Wash</Link><br />
            <Link className="the-menu-links">Hair Dressing</Link><br />
            <Link className="the-menu-links">Clothes</Link><br />
            <Link className="the-menu-links">Shoes</Link><br />
            <Link className="the-menu-links">Winter Clothing</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Women's Fashion</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Pents</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">Shoes</Link><br />
            <Link className="the-menu-links">Winter Clothing</Link><br />
            <Link className="the-menu-links">Sweaters</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Mother & Baby</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Baby kit</Link><br />
            <Link className="the-menu-links">Washing Soap</Link><br />
            <Link className="the-menu-links">Clothes</Link><br />
            <Link className="the-menu-links">Shoes</Link><br />
            <Link className="the-menu-links">Nursery</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Home & Lifestyle</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Bath</Link><br />
            <Link className="the-menu-links">Kitchen</Link><br />
            <Link className="the-menu-links">Furniture</Link><br />
            <Link className="the-menu-links">Floor</Link><br />
            <Link className="the-menu-links">Carpet</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Electronic Devices</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Washing Machine</Link><br />
            <Link className="the-menu-links">Juicer</Link><br />
            <Link className="the-menu-links">Iron</Link><br />
            <Link className="the-menu-links">Computer</Link><br />
            <Link className="the-menu-links">Laptop</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Electronic Accessories</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">Printer</Link><br />
            <Link className="the-menu-links">Cable</Link><br />
            <Link className="the-menu-links">Mouse</Link><br />
            <Link className="the-menu-links">Monitor</Link><br />
            <Link className="the-menu-links">Hair Machine</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>TV & Home Appliances</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">TV</Link><br />
            <Link className="the-menu-links">Computer</Link><br />
            <Link className="the-menu-links">Spinner</Link><br />
            <Link className="the-menu-links">Sewing Machine</Link><br />
            <Link className="the-menu-links">Washing Machine</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Sports & Outdoors</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Watches, Bags & Jewellery</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
          </div><br />

          <Link className='menu-grocery-1'>Automotive & Motorbikes</Link>
          <div className="menu-grocery-1-div">
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
            <Link className="the-menu-links">clothes</Link><br />
          </div><br />
        </div>
        <div className="slider">

          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require("../Assets/Images/slide1.jpeg")} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={require("../Assets/Images/slide2.jpeg")} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={require("../Assets/Images/slide3.jpeg")} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>


      <section className="catagories">
        <h5>Catagories</h5>
        <div className="cata">

          <div className="outerproduct"><Link to="/grocery" className="catallink"><img src={require("../Assets/Images/grocery.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/cosmetics" className="catallink"><img src={require("../Assets/Images/moisturizer.png")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/electronics" className="catallink"><img src={require("../Assets/Images/electronics.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/accessories" className="catallink"><img src={require("../Assets/Images/headphone.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/wallpaper" className="catallink"><img src={require("../Assets/Images/walldecor.png")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/pots" className="catallink"><img src={require("../Assets/Images/pots.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/shampoo" className="catallink"><img src={require("../Assets/Images/shampoo.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/shampoo" className="catallink"><img src={require("../Assets/Images/shampoo.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/shampoo" className="catallink"><img src={require("../Assets/Images/shampoo.jpg")} className='cata-img' alt="..." /></Link></div>
          <div className="outerproduct"><Link to="/shampoo" className="catallink"><img src={require("../Assets/Images/shampoo.jpg")} className='cata-img' alt="..." /></Link></div>

        </div>
      </section>



    </>
  )
}
