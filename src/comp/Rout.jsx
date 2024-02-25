import React from 'react'
import { Route,Routes } from 'react-router-dom';

import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import Cart from "./Cart/Cart"
import Contact from "./Contact/Contact"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"

const rout = ({shop, Filter, allcatefilter, addtocart , cart, setCart }) => {

return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>} />

        <Route path='/shop'  element={<Shop 
        shop={shop} 
        Filter={Filter}
        allcatefilter={allcatefilter} 
        addtocart={addtocart}/>} />

        <Route path='/cart' element={<Cart 
        cart={cart} 
        setCart={setCart}/>} />
        
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
    </Routes>
    </div>
)
}

export default rout
