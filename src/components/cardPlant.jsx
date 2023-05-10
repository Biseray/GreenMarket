import React from 'react'
import style from "../styles/card.module.css"
import { Link } from "react-router-dom";
export default function cardPlant({id,imgUrl,name }) {
    return (
       
        
        <div key={id} className={style.Card}>
            <Link to={`/GreenMarket/Produit/${id}`} className={style.linkCard} >
           
            <div className={style.posImg}>
                <img src={imgUrl} alt="" className={style.imgPlant} /><h2 className={style.title}>{name}</h2>
            </div>
            
        </Link>
    </div>
        
  )
}
