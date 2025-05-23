import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import proCss from './products.module.css'
import { Link } from 'react-router-dom'


function ProductCard({product}) {
  return (
    <div className={proCss.products_card}>
        <Link to={`/products/${product.id}`}>
            <img src={product.image} />
        </Link>
        <div className={proCss.products_title}>
            <h3>{product.title}</h3>
        </div> 
        <div className={proCss.products_rating}>
            <Rating value={product.rating?.rate} precision={0.1} />
            <small>{product.rating?.count}</small>
            {/* <p>{product.rating}</p> */}
        </div>

        <div>
            <CurrencyFormat amount={7.3} />
        </div>
        <button className={proCss.products_button}>
            add to cart
        </button>
      
    </div>
  )
}

export default ProductCard
