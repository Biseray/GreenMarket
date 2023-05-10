import React from 'react'
import CardPlant from './cardPlant'
import style from "../styles/cardList.module.css"
export default function CardList({plantShop}) {
  return (
      <div className={style.containerCard}>
          {plantShop.map(({id,imgUrl,name }) => 
            
              <CardPlant
                    
                        key={id}
                        id={id}
                        imgUrl={imgUrl}
                        name={name}
              
              />
          )}
    </div>
  )
}
