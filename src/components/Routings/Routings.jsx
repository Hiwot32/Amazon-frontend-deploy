import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Orders from '../pages/Orders/Orders'
import Payment from '../pages/Payment/Payment'
import Cart from '../pages/Cart/Cart'
import Results from '../pages/Results/Results'
import Details from '../pages/ProductDetails/Details'

function Routings() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            </Routes>

        </Router>
      
    </div>
  )
}

export default Routings
