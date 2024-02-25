import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

const Cart = ({cart, setCart}) => {

    // plus
    const plus = (product) => {

      const exist = cart.find((x) => {
  
        return x.id === product.id
      })
      setCart(cart.map((e) => {
        return e.id === product.id ? {...exist, qty: exist.qty +1} : e
      }))
    }
  // minus
    const minus = (product) => {
  
      const exist = cart.find((x) => {
  
        return x.id === product.id
      })
      setCart(cart.map((e) => {
        return e.id === product.id ? { ...exist, qty: exist.qty -1} : e
      }))
      }
  // remove
  const removeProduct = (product) => {
      const exist = cart.find((x) => {
        return x.id === product.id
      })
      if(exist.qty > 0) {
        setCart(cart.filter((e) => {
          return e.id !== product.id
        }))
      }
    }
     //Total Price
     const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <div className='cart'>
      <h3># cart</h3>
      {
            cart.length === 0 && 
            <>
            <div className='empty_cart'>
                <h2>Your Shopping cart is empty</h2>
                <Link to='/shop'><button>Shop Now</button></Link>
            </div>
            </>
        }
      <div className="container">
        {
          cart.map((e) =>{
            return (
              <>
              <div className='box' style={{flexDirection: 'row', borderBottom:'2px solid'}}>
                  <div className='img_box'>
                    <img src={e.image} alt=''></img>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                    <h3>{e.Name}</h3>
                    <p>Price: ${e.price}</p>
                    <p>Total: ${e.price * e.qty}</p>
                    </div>
                    <div className='quantity'>
                      <button onClick={() => plus (e)}>+</button>
                      <input type='number' value={e.qty}></input>
                      <button onClick={() => minus (e)}>-</button>
                    </div>
                    <div className='icon'>
                      <li onClick={() => removeProduct(e)}><IoMdClose /> </li>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <div className='bottom'>
          {
            cart.length > 0 && 
            <>
            <div className='Total'>
              <h4>Sub Total: ${total}</h4>
            </div>
            <button>checkout</button>
            </>
          }
        </div>
    </div>
  )
}

export default Cart
