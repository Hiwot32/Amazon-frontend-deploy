import React, { useState } from 'react'
import proCss from '..//../products/products.module.css'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout/Layout';
import axios from 'axios';
import { useEffect } from 'react';
import { productUrl } from '../../../Api/endPoint';
import ProductCard from '../../products/ProductCard';
import Loader from '../../Loader/Loader';

function Details() {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading]= useState(false)
    const {productId}=useParams();
    console.log(productId)


    useEffect(()=>{
      setIsLoading(true)
        axios.get(`${productUrl}/products/${productId}`)
        .then(res=>{
            setProduct(res.data)
            setIsLoading(false)
        })
    },[])

  return (
    <Layout>
    <div>
      {isLoading?(<Loader />):( <ProductCard  product={product} flex={true} productDes={true} renderAdd={true}/>)}
       
      
    </div>
    </Layout>
  )
}

export default Details
