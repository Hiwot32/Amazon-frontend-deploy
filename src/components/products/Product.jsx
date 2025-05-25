import { useState } from 'react'
import axios from 'axios'
import { useEffect, } from 'react'
import ProductCard from './ProductCard';
import proCss from './products.module.css'

function Product() {
    const[products, setProducts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            setProducts(response.data)
        })

    },[])

  return (
    <div className={proCss.main_card}>
        {
            products.map((item)=>{
               return <ProductCard product={item} key={item.id} renderAdd={true}/>
            })
        }
      
    </div>
  )
}

export default Product
