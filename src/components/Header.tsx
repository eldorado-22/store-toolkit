import React from 'react';
import {NavLink} from "react-router-dom";
import {UseAppDispatch, UseAppSelector} from "../Hooks/reducer-hooks";
import {CurrentAllDefaults, modeDate} from "../Store/Reducer/ActionReducer/ProductAction";
import logo from "../images/logo.png";

    const Header = () => {
    const dispatch = UseAppDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => dispatch(CurrentAllDefaults(e.target.value))

    const {mode} = UseAppSelector(s => s.productSliceReducer)

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <nav
                        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <NavLink to={"/"}>
                                <a href="#" className="flex items-center mb-4 sm:mb-0">
                                    <img src={logo} className="h-8 mr-3"
                                         alt="Flowbite Logo"/>
                                    <span
                                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Store</span>
                                </a>
                            </NavLink>

                            <div className="flex md:order-2">
                                <select onChange={handleChange} id="countries" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="kg">kg</option>
                                    <option value="usa">usa</option>
                                    <option value="ru">ru</option>
                                </select>
                                <button onClick={() => dispatch(modeDate(!mode))}
                                        className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {mode ? "White" : "Black"}
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                 id="navbar-sticky">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <NavLink to={"/"}>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                           aria-current="page">
                                            Product
                                        </a>
                                    </NavLink>
                                    <NavLink to={"/basket"}>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Basket
                                        </a>
                                    </NavLink>
                                    <NavLink to={"/favorite"}>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Favorite
                                        </a>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;