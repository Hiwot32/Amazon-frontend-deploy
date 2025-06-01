import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Orders from '../pages/Orders/Orders'
import Payment from '../pages/Payment/Payment'
import Cart from '../pages/Cart/Cart'
import Results from '../pages/Results/Results'
import Details from '../pages/ProductDetails/Details'
import { Elements } from '@stripe/react-stripe-js'
import {CheckoutProvider} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51RTnQ0CTy05rqUzntwzp4M7KfU9GQlDtA3N7Pt0S1WnEsXk4yTsBNd9TRadVlWOWk2G2eEiFWyXuW8NH4VBRll0U00HUnsJL3Q");
import ProtectedRout from '../ProtectedRout/ProtectedRout'

function Routings() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={
              <ProtectedRout msg={"You must login"} redirect={"/orders"}>
                  <Orders />
              </ProtectedRout>

              } />
            <Route path="/payment" element={
              <ProtectedRout msg={"You must login to pay"} redirect={"/payment"}>
                <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
              </ProtectedRout>
              
              } />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            </Routes>

        </Router>
      
    </div>
  )
}

export default Routings
