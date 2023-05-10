import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router"
 

 function BaseLayout() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default BaseLayout;