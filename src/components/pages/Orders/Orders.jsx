import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../../utilities/firebase'
import { DataContext } from '../../DataProvider/DataProvider'
import Layout from '../../Layout/Layout'
import styled from './ordersStyle.module.css'
import ProductCard from '../../products/ProductCard'
import { collection, doc, onSnapshot, query, orderBy } from 'firebase/firestore';


function Orders() {
  const[{user}, dispatch]=useContext(DataContext)
  const[orders, setOrders]=useState([]);

   useEffect(() => {
    if (user?.uid) {
      const ordersRef = collection(db, "users", user.uid, "orders")
      const q = query(ordersRef, orderBy("created", "desc"))

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      })

      return () => unsubscribe()
    } else {
      setOrders([])
    }
  }, [user])
  return (
    <Layout>
      <div className={styled.container}>
        <div className={styled.orders_container}>
          <h2>Your orders</h2>
          {orders?.length==0 && <div style={{paaddign:"20px"}}>You do not have orders</div>}
          <div >{
            orders?.map((eachOrder, i)=>{
              return(
                <div key={i}>
                  <hr />
                  <p>Order Id: {eachOrder?.id}</p>
                  {
                    eachOrder?.data?.basket?.map(order=>{
                     return <ProductCard
                      flex={true}
                      product={order}
                      key={order.id}
                      />
                    })
                  }
                </div>
              )
            })
            }

          </div>
        </div>
      
    </div>


    </Layout>
    
  )
}

export default Orders
