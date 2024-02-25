import React from 'react'
import "./Trending.css"

import { Link } from 'react-router-dom';
import Products from './Products'
import  { useState, useEffect } from 'react';
import { FaEye,FaHeart } from "react-icons/fa";



const Trending = () => {

  const [trending, setTrending] = useState(Products);
    
    //filter products
    const filtercate = (x) => 
    {
    const filterproduct = Products.filter((e) => 
    {
        return e.type === x
    })
    setTrending(filterproduct)
    }

    //All Trending Product
    const allProduct = () =>
    {
    setTrending(Products)
    }
    
  return (
    <div className='home'>
        <div className='trending'>
            <div className='container'>
                <div className='box'>
                    <div className='header'>
                        <div className='heading'>
                            <h2 >#Trending</h2>
                        </div>
                        <div className='cate'>
                            <h3 onClick={() => allProduct () }>All</h3>
                            <h3 onClick={() => filtercate ('new')}>New</h3>
                            <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                            <h3 onClick={() => filtercate ('top')}>top selling</h3>
                        </div>
                    </div>
                    <div className='products'>
                        <div className='container'>
                            {
                                trending.map((e) => 
                                {
                                    return(
                                        <>
                                        <div className='box-products'>
                                            <div className='img-box'>
                                                <img src={e.image}/>
                                                <div className='icon'>
                                                    <div className='icon-box'>
                                                    <FaEye />
                                                    </div>
                                                    <div className='icon-box'>
                                                    <FaHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='info hhh'>
                                            <h3 className='h3'>{e.Name}</h3>
                                            <p className='p'><span style={{color:"#232323"}}>price:</span> ${e.price}</p>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                            <Link to={'/shop'} className='button'>Go to Shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending
