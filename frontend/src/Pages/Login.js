import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../Assets/Style/Login.css'
import axios from 'axios'

export default function Login() {

  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  // const { id } = useParams();
  
  
  const handleinput = (e)=>{
  setdata({
    ...data, [e.target.name]:e.target.value
  })
  }
  const Logout = () => {
    sessionStorage.clear();
    alert("logged out successfully");
    navigate("/")
}

  function Login(){
  if( data.email !== undefined && data.password !== undefined ){
    axios.post("http://localhost:4000/login",{data}).then((res)=>{
      alert(res.data.msg);
        // console.log(res.data.d);
         sessionStorage.setItem("email", res.data.d.email)
         sessionStorage.setItem("name", res.data.d.name)
         sessionStorage.setItem("phone", res.data.d.phone)
         sessionStorage.setItem("address", res.data.d.address)
         sessionStorage.setItem("isLoggedIn", true)
         navigate('/')
         window.location.reload()
        }).catch((error)=>{
          console.log(error)
        })
      }else{
        alert("please insert data")
      }
    }
    


 const all = ()=>{
 Login();

 }

// const email = sessionStorage.getItem("email")
// console.log(email)
   
// let randomInt = Math.floor(Math.random()*11)
// let randomInt = Math.random().toInt()
// let randomInt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
// let randomInt = Math.random().toString(36).substring(2, 18);


  return (
    <>
      <p className="welcome-daraz">Welcome to Daraz! Please Login <span className='new-member'>New Member? <Link to="/signup">Register</Link> Here</span></p>
      <section className="login-section">
        <div className="login-div">
          <label className='login-label' htmlFor="email">Email <br /><input name='email' type="text" className="sign-up-input login-input" placeholder='Please enter email' onChange={handleinput} /></label>
          
          
          {/* <label className='login-label' htmlFor="role">Login as <br />
          <select name="role" id="" className="sign-up-input login-input" onChange={handleinput}>
            <option>Select role</option>
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
          
          </label> */}

          {/* <input name='role' type="text" className="sign-up-input login-input" placeholder='Seller or Customer' onChange={handleinput} /> */}
          
          <label className='login-label' htmlFor="password">Password <br /><input name='password' type="text" className="sign-up-input login-input" placeholder='Please enter password' onChange={handleinput} /></label>
          <Link className='reset-password' to="/updatepassword">Reset your password</Link>
        </div>
        <div className="login-div">
          <button className="signup-btn signbtn loginbtn" onClick={all}>Login</button>
          <p className="or-login">Or, login with</p>
          <button className="signup-btn signbtn loginbtn">Facebook</button>
          <button className="signup-btn signbtn loginbtn">Google</button>

        </div>


      </section>

    </>
  )
}
