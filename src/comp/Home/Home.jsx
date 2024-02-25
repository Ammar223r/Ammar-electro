import React from 'react'
import "./Home.css"

import { Link } from 'react-router-dom';
import Trending from './Trending';
import Product1 from './Product1';

const Home = () => {
  return (
    <div>
      <div className='home'>
            <div className='top_banner' >
                <img src='./image/slide-1.webp'  />                
                <div className='content'>                
                  <h2>silver aluminum</h2>
                  <h3>Apple Watch</h3>
                  <p>30% offer at you first order</p>
                  <Link to={'/shop'}>Shop Now</Link>
                </div>
            </div>
            <div>
                <Product1/>
            </div>
            <div>
            <Trending/>
            </div>
    </div>
    </div>
  )
}

export default Home
