import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { productUrl} from '../../../Api/endPoint'
import axios from 'axios'
import ProductCard from '../../products/ProductCard'
import proCss from '..//../products/products.module.css'

function Results() {
     const [result, setResult]=useState([]);
    const {categoryName}=useParams();


    useEffect(()=>{
        axios.get(`${productUrl}/products/category/${categoryName}`)
    .then(res=>{
        setResult(res.data)
        console.log(res.data)
    })
    }, [])
    
  return (
    
    <Layout>
        <h1 style={{padding:"25px"}}>Results</h1>
    <p style={{padding:"25px" }}>{categoryName}</p>
        
        <div className={proCss.main_card}>
            {result?.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </Layout>
  )
}

export default Results
