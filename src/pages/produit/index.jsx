import React from 'react'
import { useLoaderData, useNavigate } from "react-router";
import plantList from '../../datas/plantList.js';
import style from "../../styles/product.module.css"
import { useState } from 'react';

export default function Produit() {
  const dataProduct = useLoaderData();
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  
  const infoProduct = {
    id: dataProduct.id,
    name: dataProduct.name,
    imgUrl: dataProduct.imgUrl,
    quantity: value
  };

  const handleChange = (event) => {
    
 
    setValue(event.target.value);
  };

 const handleClickAcheter = () => {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQuantity = currentCart.reduce((acc, curr) => acc + curr.quantity, 0) + parseInt(value);
  
  if (totalQuantity > 200) {
    alert("Désolé, la quantité totale de produits dans le panier ne peut pas dépasser 200.");
    return;
  }
  
  const existingProductIndex = currentCart.findIndex(
    product => product.id === dataProduct.id
  );
     
       
    
  if (existingProductIndex !== -1) {
    const updatedCart = [...currentCart];
updatedCart[existingProductIndex].quantity += parseInt(value);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    const updatedCart = [...currentCart, infoProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
   }
   

  navigate("/GreenMarket/Panier");
};

  
  return (
    <div>
      {dataProduct.name}
      <div className={style.PosImg}>
        <img src={dataProduct.imgUrl} alt="" className={style.img} />
      </div>
      <div>{dataProduct.price} €</div>
      <input id="number" type="number" value={value} onChange={handleChange} />
      <button onClick={handleClickAcheter}> Acheter ! </button>
      {console.log(value)}
    </div>
  );
}

export function productLoader({ params }) {
    return plantList.find(product => product.id === params.id)
}
