import React from 'react';
import {UseAppSelector} from "../../Hooks/reducer-hooks";
import ProductCard from "../Product/ProductCard";
import {useNavigate} from "react-router-dom";

const Favorite = () => {
    const {favorite} = UseAppSelector(s => s.FavoriteSlice)
    const navigate = useNavigate()

    return (
        <>
            {
                favorite.length ?
                    <div className="pt-32 flex flex-wrap justify-evenly">
                        {
                            favorite.map(el => <ProductCard el={el}/>)
                        }
                    </div>
                    :
                    <div className="flex justify-center  py-36">
                        <button onClick={() => navigate("/")} className="border-4 border-red-700 rounded-lg  py-10 px-44">
                            Open Product
                        </button>
                    </div>
            }
        </>
    );
};

export default Favorite;