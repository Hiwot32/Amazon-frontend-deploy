import React,{useContext, useState} from 'react'
import Layout from '../../Layout/Layout'
import style from './paymentStyle.module.css'
import { DataContext } from '../../DataProvider/DataProvider'
import ProductCard from '../../products/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../../Api/axios'
import {SyncLoader} from 'react-spinners'
import { db } from '../../../utilities/firebase'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore";
import { Types } from '../../../utilities/actionTypes'


function Payment() {

  const[{user, basket}, dispatch]=useContext(DataContext);
  const totalItem=basket?.reduce((amount,item)=>{
        return item.amount+amount
    }, 0);

     const total=basket.reduce((amount,item)=>
    item.price*item.amount+amount, 0
  )

    const[cardError, setCardError]=useState(null)
    const[processing, setProcessing]=useState(false)
    const stripe=useStripe();
    const elements=useElements();
    const navigate=useNavigate();

    const handlChange=(e)=>{
      e?.error?.message? setCardError(e?.error?.message): setCardError("")

    }

    const handlePayment=async (e)=>{
      e.preventDefault();

      try{
        setProcessing(true)

        const response=await axiosInstance({
          method:"POST",
           url: `/payment/create?total=${Math.round(total * 100)}`
        })
        console.log(response.data);
        const clientSecret=response.data?.clientSecret;

        const confirmation= await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method:{
            card: elements.getElement(CardElement)
          }

          }
          
        )

       

      await setDoc(
  doc(db, "users", user.uid, "orders", confirmation.paymentIntent.id),
  {
    basket: basket,
    amount: confirmation.paymentIntent.amount,
    created: confirmation.paymentIntent.created,
  }
);

        dispatch({type:Types.EMPTY_BASKET})
         setProcessing(false)

         navigate("/orders", {state: {msg: "You have placed new orders"}});

      }catch(error){
        console.log(error)
        setProcessing(false)

      }
    }

  return (
    <Layout>
    <div>
      <div className={style.payment_header}>
        Checkout ({totalItem}) items
      </div>
      <hr />

      <section>
        <div className={style.flex}>
          <h3>Delivery Address</h3>
          <div >
            {/* <div>{user.email}</div> */}
            <div>123 React</div>
            <div>Chicago</div>
          </div>
        </div>
          <hr />

          <div className={style.flex}>
            <div>
              <h3>Review Items and delivery</h3>
            </div>
          <div>
            {
              basket?.map((item)=><ProductCard product={item} flex={true} />)
            }
          </div>
          </div>
          <hr />

          <div className={style.flex}>
            <h3>Payment methods</h3>
            <div className={style.payment_card}>
              <form onSubmit={handlePayment}>
                {
                  cardError && <small style={{color:"red"}}>{cardError}</small>
                }
                <CardElement onChange={handlChange}/>

                <div className={style.payment_price}>
                  <div>
                    <span style={{display:"flex"}}><p>Total order |</p> <CurrencyFormat amount={total} /></span>
                  </div>
                  <div>
                    <button type="submit">
                      {
                        processing? (
                          <div className={style.loading}>
                            <SyncLoader size={15} />
                            <p>Please wait...</p>

                          </div>
                        ):"Pay now"
                      }
                      </button>

                  </div>
                </div>

              </form>

            </div>
          </div>


      </section>
    </div>
    </Layout>
  )
}

export default Payment
