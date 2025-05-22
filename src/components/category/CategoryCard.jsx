import React from 'react'
// import Category from './Category'
import category from './category.module.css'

function CategoryCard({data}) {
  return (
    <div className={category.container}>
        <a href="/">
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgSrc} />
            <p>Shop Now</p>
        </a>
      
    </div>
  )
}

export default CategoryCard
