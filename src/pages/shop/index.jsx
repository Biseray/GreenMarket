import React from 'react'
import { useLoaderData } from "react-router";
import CardList from "../../components/CardList"
import plantList from '../../datas/plantList.js';
function Shop() {
       const plantShop = useLoaderData();
    return (
      
    <div>
            < CardList plantShop={plantShop} />
    </div>
  )
}

export default Shop;


export function dataPlant() {
      return plantList;
}


