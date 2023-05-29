import React from 'react';
import {IProduct} from "../../types/Product";
import {UseAppDispatch, UseAppSelector} from "../../Hooks/reducer-hooks";
import {NavLink, useNavigate} from "react-router-dom";
import {AddToBasket} from "../../Store/Reducer/ActionReducer/BasketAction";
import {RiShoppingBasket2Fill, RiShoppingBasket2Line} from "react-icons/ri";

interface IProductCards {
    el: IProduct
}

const ProductCard = ({el}: IProductCards) => {
    const dispatch = UseAppDispatch()
    const {defaultCurrent, allDefaultCurrent} = UseAppSelector(state => state.productSliceReducer)
    const {basket} = UseAppSelector(s => s.BasketSlice)
    // const {favorite} = UseAppSelector(s => s.FavoriteSliceReducer)
    const found = basket.some(some => some.id === el.id)
    // const favoriteFound = favorite.some(some => some.id === el.id)
    const navigate = useNavigate()


    return (
        <div className="basis-1/5 m-6">
            <div className="container">
                <NavLink to={`/product-modal/${el.id}`}>
                    <img width={200} src={el.image} alt="img"/>
                </NavLink>
                <h1>{el.title}</h1>
                <p className="font-mono font-bold">{el.price * allDefaultCurrent[defaultCurrent][0]} {allDefaultCurrent[defaultCurrent][1]}</p>
                <div className="my-3 flex  justify-between">
                    {
                        found ?
                            <button onClick={() => navigate("/basket")}
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <RiShoppingBasket2Fill/>
                            </button>
                            :
                            <button onClick={() => dispatch(AddToBasket(el))}
                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                                <RiShoppingBasket2Line/>
                            </button>
                    }
                    {/*<button onClick={() => dispatch(AddToFavorite(el))}><MdFavorite className={favoriteFound ? "text-red-600 text-3xl" : "text-3xl"}/></button>*/}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;