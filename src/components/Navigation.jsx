import React from "react";
import { NavLink } from "react-router-dom";
import logo  from "../logoPl.png"
import style from "../styles/navigation.module.css"

export default function Navigation() {
    return (
        <div className={style.banner}> 
        <div className={style.posNav}>
            <div className={style.posLogo} >
                    <img src={logo} className={style.logo} alt="logo" />
                    <h1 className={style.title}>GreenMarket</h1>
            </div>
            <div>
                
                <nav className={style.navBarLink}>
                        <NavLink to="/GreenMarket/"  > Accueil </NavLink>
                        <NavLink to="/GreenMarket/shop" > Shop </NavLink>
                        <NavLink to="/GreenMarket/Panier"  > Panier </NavLink>
                         <NavLink to="/GreenMarket/apropos"  > A propos  </NavLink>
                        
                </nav>
            </div>
        </div>
        </div >
    )
}