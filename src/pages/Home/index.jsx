import { useLoaderData } from "react-router";
import React from "react";
import style from "../../styles/styles.css"
import plantList from "../../datas/plantList.js";
import Carousel from "../../components/carousel";




export default function Home() {
    const plant = useLoaderData();
    return (
        <div className={style.home}>
            <div >
                <Carousel plant={plant} />
           </div>
      
         
        </div>
    );
}

export  function PlantLoader() {
  return plantList;
};