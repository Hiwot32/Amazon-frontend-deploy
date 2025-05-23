import React from 'react'
import category from './category.module.css'
import { Link } from 'react-router-dom'

function CategoryCard({data}) {
  return (
    <div className={category.container}>
        <Link to={`/category/${data.name}`}>
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgSrc} />
            <p>Shop Now</p>
        </Link>
      
    </div>
  )
}

export default CategoryCard
