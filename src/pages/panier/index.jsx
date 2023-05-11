import React, { useState } from 'react';
import plantList from '../../datas/plantList.js';
import style from "../../styles/panier.module.css"
import { useNavigate } from 'react-router';




export default function Panier() {
  const [dataPanier, setDataPanier] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const navigate = useNavigate();
  let totalQuantity = 0; 
  let totalPrice = 0;
  const supArticle = (id) => {
    const newCart = dataPanier.filter(product => product.id !== id);
    setDataPanier(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));


  }
  const VerifLocalStrg = JSON.parse(localStorage.getItem("cart"));
  
  const handleSendCmd = () => {
    if (VerifLocalStrg) {
   
      localStorage.clear()
      navigate(`/GreenMarket/confirmation`)
    } else {
      alert('panier vide ') }
    
    
      
      
 }

   const handleClicReturnProduct = (id) => {
          
     navigate(`/GreenMarket/Produit/${id}`);
        
}

  return (
  <>
      { VerifLocalStrg ?  (
      <div className={style.containerArticle}>
        {dataPanier.map(({ id, name, imgUrl, quantity }) => {
          const plant = plantList.find(product => product.id === id);
          const price = plant ? plant.price : 0;
          totalQuantity += quantity;
          let totalPriceProduct = 0;
          totalPriceProduct = parseInt(price) * quantity;
          
          totalPrice += totalPriceProduct;
          return (
            
          
            <div key={id} className={style.cardArticle}>
              <img className={style.cardImg} src={imgUrl} alt="" />
              {console.log(totalPriceProduct)}
              <div>
                <div className={style.nameProduct}>{name}</div>
                <div className={style.priceQuantity}>
                  <div className={style.price}>{totalPriceProduct.toFixed(2)} €</div>
              <div  className={style.quantity}> Quantité :  {parseInt(quantity)}</div>
              </div>
             </div>
            
              <div className={style.posBtn}>
                <button onClick={() => supArticle(id)} className={style.btnDel }> Supprimer</button>
                <button onClick={() =>handleClicReturnProduct(id)} className={style.btnProduct }> page article</button>
            </div>
              
            </div>


          );
        })}
        
      
      <div>Total quantité: {totalQuantity}</div>
          <div>Total prix : {totalPrice}€ </div>
          <div className={style.PosBtnCmd}>
            <button className={style.BtnCmd} onClick={handleSendCmd}>
        Commander 
      </button>
          </div>
     
      
        </div>
      ) : (
      // Contenu à afficher lorsque la clé "cart" n'existe pas dans le localStorage
      <div>
        Le panier est vide.
      </div>)}
    </>
  );
  
}