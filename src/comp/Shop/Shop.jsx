import React from 'react'
import { FaEye,FaHeart } from "react-icons/fa";
import "./Shop.css"

const Shop = ({shop, Filter, allcatefilter , addtocart}) => {
  return (
    <div>
      <div className="shop">
        <h2># SHOP</h2>
        <p>Home.Shop</p>
        <div className="container">
          <div className="sidebar">
            <div className='category'>
                      <div className='header'>
                          <h3>all categories</h3>
                      </div>
                      <div className='box'>
                          <ul>
                              <li onClick={() => allcatefilter ()}># All</li>
                              <li onClick={() => Filter ("tv")}># tv</li>
                              <li onClick={() => Filter ("laptop")}># laptop</li>
                              <li onClick={() => Filter ("watch")}># watch</li>
                              <li onClick={() => Filter ("speaker")}># speaker</li>
                              <li onClick={() => Filter ("electronics")}># electronics</li>
                              <li onClick={() => Filter ("headphone")}># headphone</li>
                              <li onClick={() => Filter ("phone")}># phone</li>
                          </ul>
                      </div>
                  </div>
                  <div className='banner'>
                      <div className='img_box'>
                          <img src='image/shop_left.avif' alt=''></img>
                      </div>
                  </div>
          </div>
          <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                          shop.map((e) =>{
                            return(
                              <>
                              <div className='box'>
                                        <div className='img_box'>
                                            <img src={e.image} alt=''></img>
                                            <div className='icon'>
                                              <li><FaEye /></li> 
                                              <li onClick={() => detailpage (e)}>
                                              <FaHeart />
                                              </li> 
                                            </div>
                                        </div>
                                        <div className='info2'>
                                            <h3 className='h3'>{e.Name}</h3>
                                            <p className='p'>$ {e.price}</p>
                                            <button className='btn2' onClick={() => addtocart (e)}>Add To Cart</button>
                                        </div>
                                    </div>
                              </>
                            )
                          })
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
