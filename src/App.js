import React from "react"; 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import Error404 from "./pages/Error404/index";
import Home, { PlantLoader } from "./pages/Home/index";
import Apropos from "./pages/apropos/index";
import "../src/index.css"
import Shop, { dataPlant } from "./pages/shop/index"
import Produit, { productLoader } from "./pages/produit"
import Panier from "./pages/panier/index"
import Confirmation from "./pages/confirmation/index";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/GreenMarket" element={<BaseLayout />} errorElement={<Error404 />}>
    <Route index element={<Home />} loader={PlantLoader} />
    <Route path="/GreenMarket/apropos" element={<Apropos />} />
    <Route path="/GreenMarket/shop" element={<Shop />} loader={dataPlant} />
    <Route path="/GreenMarket/Produit/:id" element={<Produit />} loader={productLoader} />
    <Route path="/GreenMarket/Panier" element={<Panier />} /> 
    <Route path="/GreenMarket/confirmation" element={<Confirmation />} /> 
  </Route>
))

function App() {
  return (
   <RouterProvider router={router}/> 
  );
}

export default App;
