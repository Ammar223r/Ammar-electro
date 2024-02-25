import React from 'react'
import "./Footer.css"
import { FaInstagram ,FaTwitter ,FaFacebook  } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
// import { Container } from 'react-bootstrap';
const Footer = () => {
return (
    <div>
    <footer className='padding'>
        <div className="container">
                <div className="logo1">
                    <div className='logo11'>
                        <a class="logo navbar-brand" href="#"><span>Electro</span> Shop</a>
                    </div>
                </div>

            <div className="boxes flex">
                <div className="box">
                    <div className="name">
                        <h4>company</h4>
                    </div>
                        <div className="info">
                            <ul>
                                <li><a href="">about us</a></li>
                                <li><a href="">our services</a></li>
                                <li><a href="">privacy policy</a></li>
                                <li><a href="">affiliate program</a></li>
                            </ul>
                        </div>
                </div>
                <div className="box">
                    <div className="name">
                    <h4>get help</h4>
                    </div>
                    <div className="info">
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">shipping</a></li>
                                <li><a href="">returns</a></li>
                                <li><a href="">order status</a></li>
                            </ul>
                            </div>
                </div>
                <div className="box">
                    <div className="name">
                        <h4>online shop</h4>
                    </div>
                        <div className="info">
                            <ul>
                                <li><a href="">watch</a></li>
                                <li><a href="">laptop</a></li>
                                <li><a href="">HEADPHONES</a></li>
                                <li><a href="">SPEAKER</a></li>
                            </ul>
                        </div>
                </div>
                <div className="box">
                    <div className="name">
                        <h4>follow us</h4>
                    </div>
                        <div className="info">
                            <ul >
                                <li><a className='icon' href=""><FaFacebook /></a></li>
                                <li><a className='icon' href=""><FaTwitter /></a></li>
                                <li><a className='icon' href=""><FaInstagram /></a></li>
                                <li><a className='icon' href=""><FaTiktok /></a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
