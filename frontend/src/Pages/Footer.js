import React from 'react'
import '../Assets/Style/Footer.css'
export default function Footer() {
  return (
    <>
   <section className="main-footer">
   <section className="footer">
      <div className="footer-1">
        <h4 className="care">Customer Care</h4><p className="care-items">
        Help Center  <br />
        How to Buy <br />
        Corporate & Bulk Purchasing <br />
        Return & Refund <br />
        Daraz Shop <br />
        Contact Us <br />
        Purhcase Protection  <br />
        Daraz Pick up Point <br />
        </p> 
        <h4 className="care">Make Money with Us</h4>
        <p className="care-items">
          Daraz University <br />
          Sell on Daraz <br />
          Join Daraz Affiliate Program <br />
        </p>
        </div>
      <div className="footer-1">
        <h4 className="care">Daraz</h4>
        <p className="care-items">
        
About Us <br />
Digital Payments <br />
Daraz Donates <br />
Daraz Blog <br />
Terms & Conditions <br />
Privacy Policy <br />
NTN Number : 4012118-6 <br />
STRN Number : 1700401211818 <br />
Online Shopping App <br />
Online Grocery Shopping <br />
Daraz Exclusive <br />
        </p>
      </div>
      <div className="footer-1"><img src={require("../Assets/Images/payment.png")} alt="" /></div>
      <div className="footer-1"><img src={require("../Assets/Images/exclusivedeal.png")} alt="" /></div>
    </section>
   </section>
    </>
  )
}
