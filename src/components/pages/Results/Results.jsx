import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import { productUrl} from '../../../Api/endPoint'
import axios from 'axios'
import ProductCard from '../../products/ProductCard'
import proCss from '..//../products/products.module.css'
import Loader from '../../Loader/Loader'

function Results() {
    const [result, setResult]=useState([]);
    const [isLoading, setIsLoading]=useState(false)
    const {categoryName}=useParams();


    useEffect(()=>{
        setIsLoading(true)
        axios.get(`${productUrl}/products/category/${categoryName}`)
    .then(res=>{
        setResult(res.data)
        setIsLoading(false)
    })
    }, [])
    
    return (
    
    <Layout>

       
        <h1 style={{padding:"25px"}}>Results</h1>
    <p style={{padding:"25px" }}>{categoryName}</p>
         {isLoading?(<Loader />):( <div className={proCss.main_card}>
            {result?.map((product)=>(
                <ProductCard key={product.id} product={product} productDes={false} renderAdd={true}/>
            ))}
        </div>)}
       
    </Layout>
    )
}

export default Results
