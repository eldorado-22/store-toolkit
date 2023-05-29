import React from 'react';
import {UseAppSelector} from "../../Hooks/reducer-hooks";
import BasketCard from "./Basket";
import {useNavigate} from "react-router-dom";

const BasketPage = () => {
    const navigate = useNavigate()
    const {basket} = UseAppSelector(s => s.BasketSlice)

    return (
        <div className="container">
            <div className="py-24">
                {
                    basket.length ?
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        delete
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    basket.map(el => <BasketCard el={el}/>)
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="flex justify-center py-20">
                            <button onClick={() => navigate("/")} className="border-4 border-blue-700 rounded-lg  py-10 px-44">
                                Open Product
                            </button>
                        </div>
                }
            </div>
        </div>
    );
};

export default BasketPage;