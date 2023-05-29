import React from 'react';
import {IProduct} from "../../types/Product";
import {UseAppDispatch, UseAppSelector} from "../../Hooks/reducer-hooks";

interface IProductCards {
    el: IProduct
}

const ProductCard = ({el}: IProductCards) => {
    const dispatch = UseAppDispatch()
    const {defaultCurrent, allDefaultCurrent} = UseAppSelector(state => state.productSliceReducer)



    return (
        <div className="w-[200px] m-6">
                <img width={200} src={el.image} alt=""/>
            <h1>{el.title}</h1>
            <p className="font-mono font-bold">{el.price * allDefaultCurrent[defaultCurrent][0]} {allDefaultCurrent[defaultCurrent][1]}</p>
            <div className="my-3 flex  justify-between">
                {/*{*/}
                {/*    found ?*/}
                {/*        <button onClick={() => navigate("/basket")} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">open Basket</button>*/}
                {/*        :*/}
                {/*        <button onClick={() => dispatch(AddToBasket(el))} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">add to basket</button>*/}
                {/*}*/}
                {/*<button onClick={() => dispatch(AddToFavorite(el))}><MdFavorite className={favoriteFound ? "text-red-600 text-3xl" : "text-3xl"}/></button>*/}
            </div>
        </div>
    );
};

export default ProductCard;