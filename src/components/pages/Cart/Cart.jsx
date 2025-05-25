import React from 'react'
import { DataContext } from '../../DataProvider/DataProvider'
import { useContext } from 'react';
import Layout from '../../Layout/Layout';
import ProductCard from '../../products/ProductCard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import styled from './cartstyle.module.css'
import { Types } from '../../../utilities/actionTypes';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function Cart() {
  const [{basket, user}, dispatch]=useContext(DataContext);
  const total=basket.reduce((amount,item)=>
    item.price*item.amount+amount, 0
  )

  const increment=(item)=>{
    dispatch({
      type:Types.ADD_TO_BASKET,
      item
    })
  }

  const decrement=(id)=>{
    dispatch({
      type:Types.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    
      <Layout>
        <div className={styled.container}>
          <div className={styled.cart_container}>
            <h2>Your Shopping Cart</h2>
            <hr />
            {
              basket?.lengeth===0?(<p>No items in your cart</p>):
              (basket?.map((item,i)=>{
                return <div className={styled.product_added}><ProductCard 
                product={item} 
                flex={true} 
                productDes={true}
                renderAdd={false} />

                <div className={styled.btn_container}>
                  <button className={styled.btn} onClick={()=>increment(item)}><IoMdArrowDropup size={20}/></button>
                  <span>{item.amount}</span>
                  <button className={styled.btn} onClick={()=>decrement(item.id)}><IoMdArrowDropdown size={20
                  }/>
                  </button>
                  
                  
                  
                  
                </div>

                </div>
              }))
            }

          </div>
          {
            basket?.legth!==0 &&(
               <div className={styled.subtotal}>
                <div>
                  <p>Subtotal ({basket?.length} items)</p>
                  <CurrencyFormat amount={total} />
                </div>
                <span>
                  <input type="checkbox" />
                  <small>This order contains a gift</small>

                </span>
                <span>
                  <Link to="/payment">Continue to chekout</Link>
                </span>

          </div>

            )
          }
         
        </div>

      </Layout>
      
    
  )
}

export default Cart
