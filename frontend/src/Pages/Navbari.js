import React from 'react'
import '../Assets/Style/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
export default function Navbari() {

  const email = sessionStorage.getItem("email");


  return (
    <>
      <section className="navigation-bar">

        <Navbar expand="lg" className="bg-body-tertiary nav-color">
          <Container className='container'>
            <Navbar.Brand href="/home"><Link to="/" className='logo-link' ><img className='daraz-logo' src={require("../Assets/Images/darazlogo.png")} alt="" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="login-search">
                  <input className='search-input' type="text" />
                  <div className="signup-form">
                    <Link className='sign-links' to="/login"  >Login</Link> &nbsp;&nbsp;&nbsp;
                    <Link className='sign-links' to="/signup"  >Signup</Link>
                   
                  </div>
                    <p className='login-email'>{email}</p>
                   </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>


    </>
  )
}
