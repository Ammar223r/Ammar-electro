import React from 'react'
import NavBar from './comp/NavBar/NavBar'
// import Rout from './comp/Rout'
import Rout from './comp/Rout';
import Products from "./comp/Home/Products";
import Footer from './comp/Footer/Footer'

import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const App = () => {
  
  // Shop
  const  [shop, setShop] = useState(Products);

  //Filter Shop Products

  const Filter = (x) =>{

  const catefilter = Products.filter((product) => {
  
    return product.cat === x 
  })
  setShop(catefilter)
  }

  const allcatefilter = () =>{
  setShop(Products)
  }

    // Cart And Shop 
    const [cart, setCart] = useState([]);
  
    const addtocart = (product) => {

      // Alert Button
      
      // بدايه السله
      const exist = cart.find((x) => {
        
        return x.id === product.id
      });
      if (exist) {
        Swal.fire({
          title: "This product is allready in cart",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        })
      }else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add to cart",
          showConfirmButton: false,
          timer: 1500
        });
      }

      setCart([...cart, {...product, qty:1}])
      
    }
    console.log(cart)
    // Add to cart
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Rout shop={shop} Filter={Filter} 
        allcatefilter={allcatefilter} 
        addtocart={addtocart} 
        cart={cart}
        setCart={setCart}/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

