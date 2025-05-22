import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './img/data'
import carouselCss from './carousel.module.css'

function CarouselEffect() {
  return (
    <div>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
        >
            {
                img.map(imgSrc=>{
                   return <img src={imgSrc} />
                })
            }
        </Carousel>
        <div className={carouselCss.heroImg}>

        </div>
      
    </div>
  )
}

export default CarouselEffect
