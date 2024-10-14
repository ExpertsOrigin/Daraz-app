import React, { useState } from 'react'
import '../Assets/Style/Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
const navigate = useNavigate();
  const [data, setdata] = useState({});

  const handleinput = (e)=>{
  setdata({
    ...data, [e.target.name]:e.target.value
  })
  }

  const Signup = ()=>{
  if(data.name !== undefined && data.email !== undefined && data.password !== undefined && data.gender !== undefined && data.birthday !== undefined && data.address !== undefined && data.role !== undefined && data.phone !== undefined){
    axios.post("http://localhost:4000/signup",{data}).then((res)=>{
    alert(res.data)
    navigate("/login")
    }).catch((error)=>{
    console.log(error)
    })
  }else{
    alert("please insert data")
  }
  }




  return (
    <>
      <section className="signup-section">
        <div className="signup-div-1">
          <label >Phone Number <br /><input type="text" name='phone' className="sign-up-input" placeholder='Please enter phone number' onChange={handleinput} /></label>
          <label >Password <br /><input type="text" name='password' className="sign-up-input" placeholder='Enter password' onChange={handleinput} /></label>
          <label >Birthday <br /><input type="text" name='birthday' className="sign-up-input" onChange={handleinput} /></label>
          <label >Gender <br /><input type="text" name='gender' className="sign-up-input" onChange={handleinput} /></label>
          <p className="terms">Or sign up with</p>
          <div className="sign-buttons">
            <button className="sign-facebook signbtn">Facebook</button>
            <button className="sign-google signbtn">Google</button>
          </div>
        </div>
        <div className="signup-div-1"> 
          <label >Full Name <br /><input type="text" name='name' className="sign-up-input" onChange={handleinput}/></label>
          <label >Email <br /><input type="text" name='email' className="sign-up-input" onChange={handleinput}/></label>
          <label >Address <br /><input type="text" name='address' className="sign-up-input" onChange={handleinput}/></label>
          <label >Sign-up as <br /><input type="text" name='role' className="sign-up-input" placeholder='seller or customer' onChange={handleinput} /></label>

          <button className="signup-btn signbtn" onClick={Signup}>SIGN UP</button>
          <p className="terms">By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy Policy</p>




        </div>
      </section>


    </>
  )
}
