import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import ProductCard from "./pages/Product/ProductCard";
import Basket from "./pages/Basket/Basket";
import Favorites from "./pages/Favorites";
import Product from "./pages/Product";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Product/>}/>
                <Route path={"/basket"} element={<Basket/>}/>
                <Route path={"/favorite"} element={<Favorites/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
