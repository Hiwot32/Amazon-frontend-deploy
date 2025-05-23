import React, { useState } from 'react'
import proCss from '..//../products/products.module.css'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout/Layout';
import axios from 'axios';
import { useEffect } from 'react';
import { productUrl } from '../../../Api/endPoint';
import ProductCard from '../../products/ProductCard';

function Details() {
    const [product, setProduct] = useState({})
    const {productId}=useParams();
    console.log(productId)


    useEffect(()=>{
        axios.get(`${productUrl}/products/${productId}`)
        .then(res=>{
            setProduct(res.data)
        })
    },[])

  return (
    <Layout>
    <div>
        <ProductCard  product={product} />
      
    </div>
    </Layout>
  )
}

export default Details
