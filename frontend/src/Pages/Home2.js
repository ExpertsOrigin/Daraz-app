import React from 'react'
import '../Assets/Style/draz.css'

export default function Home2() {
    return (
        <>
            <header>
                <div className="container-flude nav-bar">

                    {/* <!-- menu --> */}
                    <ul className="main-menu">
                        <li>
                            <a href="/">SAVE MAOR ON APP</a>
                        </li>
                        <li>
                            <a href="/">SELL ON DRAZ</a>
                        </li>
                        <li>
                            <a href="/">HELP & SUPPORT</a>
                        </li>
                        <li>
                            <a href="/">LOGIN</a>
                        </li>

                        <li>
                            <a href="/">SIGNUP</a>
                        </li>
                    </ul>

                    <div className="main-nav">

                        <div className="brand-name">

                            <img src={require("../Assets/Images/drazlogo.png")} alt="img" height="40px" width="115px" />
                        </div>

                        <div className="topnav">
                            <form>
                                <input type="text" placeholder="Search" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>

                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </header>

            {/* <!-- slider sec  --> */}
            <section className="main-slider">
                <div className="slider-box">
                    <div id="slider">
                        <img src={require("../Assets/Images/shoping.jpg")} alt="img" />
                        <img src={require("../Assets/Images/shoping2.jpg")} alt="img" />
                        <img src={require("../Assets/Images/shoping3.jpg")} alt="img" />
                        <img src={require("../Assets/Images/shoping4.jpg")} alt="img" />
                    </div>

                    <div className="indicators">
                        <span id="btn1" className="active" ></span>
                        <span id="btn2"></span>
                        <span id="btn3"></span>
                        <span id="btn4"></span>
                    </div>
                </div>

                <div className="trydraz">

                    <img src={require("../Assets/Images/trydraz.png")} alt="img" />

                </div>

            </section>

            {/* <!-- For Sale --> */}
            <section >
                <div className="text-sale">
                    <h4>Flash sale</h4>

                </div>
                <div className="flashsale">
                    <div className="main-sales">
                        <div className="on-sale-now">
                            <p>On Sale Now</p>
                        </div>
                        <button>Shop All Product</button>
                    </div>
                    <hr />


                    <div className="container1"  >
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop1.png')} alt="img loading" />
                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop2.png')} alt="img loading" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop3.png')} alt="img loading" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop1.png')} alt="img loading" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop2.png')} alt="img loading" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop3.png')} alt="img loading" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </section>

            {/* <!-- Cetagories --> */}
            <section className='cata'>

                <div className="text-cetagories">
                    <h4>Cetagories</h4>

                </div>

                <div className="main-cetagories">
                    <div className="sub-cetagories">

                        <div className="card1">
                            <img src={require('../Assets/Images/image1.png')} alt="img" />

                            <p>Sunglasses</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image2.png')} alt="img" />

                            <p>Sunglasses</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image3.png')} alt="img" />

                            <p>Sunglasses</p>

                        </div>
                        <div className="card1">
                            <img src={require('../Assets/Images/image2.png')} alt="img" />

                            <p>Sunglasses</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image1.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image3.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>
                        <div className="card1">
                            <img src={require('../Assets/Images/image1.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image2.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>


                    </div>

                    {/* <!-- 222 --> */}
                    <div className="sub-cetagories2">

                        <div className="card1">
                            <img src={require('../Assets/Images/image1.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image2.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image3.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>
                        <div className="card1">
                            <img src={require('../Assets/Images/image2.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image1.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image3.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>
                        <div className="card1">
                            <img src={require('../Assets/Images/image1.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                        <div className="card1">
                            <img src={require('../Assets/Images/image2.png')} alt="img" />

                            <p>Sunglassis</p>

                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Just for you --> */}
            <section>
                <div className="text-sale1">
                    <h4>Just for You</h4>
                </div>


                <div className="just-for-you">
                    <div className="container1">
                        <div className="row">           
                           


                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop3.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                {/* <!-- sec22 --> */}

                <div className="just-for-you">
                    <div className="container1">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop1.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop2.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop3.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop1.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop2.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="card">
                                    <img src={require('../Assets/Images/shop3.png')} alt="img" />

                                    <div className="card-content">
                                        <p>samsung galxy fold<br /> 566GB +20GB</p>
                                        <h5>Rs 332442</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Load More --> */}

            <button className="loadmore">Load More</button>




        </>
    )
}
