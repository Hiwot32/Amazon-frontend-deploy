import React from 'react'
import {CategoryData} from './FullCategory'
import CategoryCard from './CategoryCard'
import category from './category.module.css'

function Category() {
  return (
    <div className={category.Category_container}>
        {
            CategoryData.map((categoryInfo)=>{
               return <CategoryCard data={categoryInfo} key={categoryInfo.name}/>
            })
        }
      
    </div>
  )
}

export default Category
