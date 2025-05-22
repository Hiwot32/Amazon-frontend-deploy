import React from 'react'
import {CategoryData} from './FullCategory'
import CategoryCard from './CategoryCard'
import category from './category.module.css'

function Category() {
  return (
    <div className={category.Category_container}>
        {
            CategoryData.map((categoryInfo, index)=>{
               return <CategoryCard data={categoryInfo} />
            })
        }
      
    </div>
  )
}

export default Category
