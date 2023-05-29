import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import Product from "./pages/Product";
import BasketPage from "./pages/Basket";
import ProductModal from "./pages/Product/ProductModal";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Product/>}/>
                <Route path={'/basket'} element={<BasketPage/>}/>
                <Route path={"/favorite"} element={<Favorites/>}/>
                <Route path={"/product-modal/:ModalId"} element={<ProductModal/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
