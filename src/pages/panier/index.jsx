import React, { useState } from 'react';
import plantList from '../../datas/plantList.js';
import style from "../../styles/panier.module.css"
export default function Panier() {
  const [dataPanier, setDataPanier] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const supArticle = (id) => {
    const newCart = dataPanier.filter(product => product.id !== id);
    setDataPanier(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));


  }

  return (
    <div className={style.cardArticle}>
      {dataPanier.map(({ id, name, imgUrl , quantity}) => {
        const plant = plantList.find(product => product.id === id);
        const price = plant ? plant.price : 0;

        return (
          <div key={id}>
            <img src={imgUrl} alt="" />
            <div>{name}</div>
                <div>{price} €</div>
                <div>{quantity}</div>
                <button onClick={() => supArticle(id)}> Supprimer</button>
                
          </div>
        );
      })}

      <div> { }</div>
    </div>
  );
}
