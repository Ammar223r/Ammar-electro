import React from 'react'
import "./NavBar.css"

import { MdLocalShipping } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

const NavBar = () => {

const navBarStyle = ({isActive}) =>{
    return {
        color: isActive ? "#fed700" : "#eee" 
    };
};
const logout=()=>{
  localStorage.removeItem("signUp")
  localStorage.removeItem("name")
  window.location.reload()
}

  return (
    <div className='header'>
    <div className='top'>
        <div className='icon'>
        <MdLocalShipping />
        </div>
        <div className='info'>
            <p>Free Shipping When you Shopping up to $1000</p>
        </div>
    </div>

    <div className='center'>
      <div className='logo'>
        <a class="logo navbar-brand" href="#"><span>Electro</span> Shop</a>
      </div>

          <div className='offer'>
          <p>flat 10% over all iphone</p>
        </div>

        <div className="bbb">
          <Button onClick={logout} className="logout">LogOut</Button>
        </div>
    </div>
   

    <Navbar expand="lg" className="navbar w-100 navbar-expand-lg sticky-top " style={{marginLeft:'0px', marginRight:"0px"}}>
      <div className='container w-100'>
      <div className="login">
        <div className='icon'>
        <FaUser />
        </div>
        <div className='info'>
          <div >
            <p>{localStorage.getItem('name')}</p>
          </div>
        </div>
      </div>
      <Nav>
      </Nav>

        <Navbar.Toggle className='color' aria-controls="navbar-nav" />

        <Navbar.Collapse className='Collapse' id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <NavLink className="navLink nav-link p-1 p-lg-3 " style={navBarStyle} to={'/'} aria-current="page" href="#">Home</NavLink>
            <NavLink className="navLink nav-link p-1 p-lg-3 " style={navBarStyle} to={'/shop'} aria-current="page" href="#">Shop</NavLink>
            <NavLink className="navLink nav-link p-1 p-lg-3 " style={navBarStyle} to={'/cart'} aria-current="page" href="#">Cart</NavLink>
            <NavLink className="navLink nav-link p-1 p-lg-3 " style={navBarStyle} to={'/login'} aria-current="page" href="#">login</NavLink>
            <NavLink className="navLink nav-link p-1 p-lg-3 " style={navBarStyle} to={'/contact'} aria-current="page" href="#">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
  </Navbar>
</div>
  )
}

export default NavBar
