

import React from "react";
import { useState } from "react";
import style from "../styles/carousel.module.css"



export default function Carousel({ plant }) {
 
    const [picturesIndex, setPicturesIndex] = useState(0)

    const filterImgFav = plant.filter((item) => item.fav === true);
    const id = plant.find((item) => item.id === filterImgFav[picturesIndex].id)
    
    const handlePrevClick = () => {
        let prevIndex = picturesIndex - 1;
        if (picturesIndex === 0) {
            prevIndex = filterImgFav.length -1;

        }
        setPicturesIndex(prevIndex);
    }

    const handleNextClick = () => {

        let nextIndex = picturesIndex + 1;
        if (nextIndex > filterImgFav.length - 1) {
            nextIndex = 0;
        } 
        setPicturesIndex(nextIndex);
    }

  

    return (
        <div className={style.containerCarousel}>
          <img src={filterImgFav[picturesIndex].imgUrl} alt="" className={` ${style.posCarousel}  `} />
            <div className={`${style.posFleche} `}>
                <div className={style.flecheLeft}>
                    <button className={style.fleche}  onClick={handlePrevClick} > &#60;</button> 
                </div>
                <div>
                    <button className={style.fleche} onClick={handleNextClick} >   &#62;</button>
                      <button    className={style.test} >
               dzdzdzdz
            </button>
                </div>

            </div>
          
           
        </div>
    )
}
