import React from 'react'
import Header from '../../Header/Header.jsx'
import CarouselEffect from '../../carousel/carouselEffect.jsx'
import Category from '../../category/Category.jsx'
import Product from '../../products/Product.jsx'
import Layout from '../../Layout/Layout.jsx'


function Home() {
  return (
    <div>
      <Layout>
      <CarouselEffect />
      <Category />
      <Product />
      </Layout>
    </div>
  )
}

export default Home
