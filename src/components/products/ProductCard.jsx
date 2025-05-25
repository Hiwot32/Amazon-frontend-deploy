import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import proCss from './products.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../DataProvider/DataProvider'
import { Types } from '../../utilities/actionTypes'


function ProductCard({product,flex,productDes,renderAdd}) {
    const {image, title, id, rating, price, description} = product;
     
    const [{state},dispatch]=useContext(DataContext)


    const addToCart=()=>{
        dispatch({
            type:Types.ADD_TO_BASKET,
            item:{
                image, title, id, rating, price, description
            }

        })
    }
    
  return (
    <div className={`${proCss.products_card} ${flex?proCss.product_flexed: ' '}`}>
        <Link to={`/products/${id}`}>
            <img src={image} />
        </Link>
        <div>
        <div className={proCss.products_title}>
            <h3>{title}</h3>
            {productDes && <div style={{maxWidth:"700px"}}>{description}</div>}
        </div> 
        <div className={proCss.products_rating}>
            <Rating value={rating?.rate} precision={0.1} />
            <small>{rating?.count}</small>
        </div>

        <div className={proCss.price} >
            <CurrencyFormat amount={price} />
        </div>
        {
            renderAdd && <button className={proCss.products_button} onClick={addToCart}>
            add to cart
        </button>
        }
        
        </div>
      
    </div>
  )
}

export default ProductCard
