import React from 'react';
import {Link} from "react-router-dom";
import {
    BsDribbble,
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube
} from "react-icons/bs";
import logo from "./../images/logo.png"
import social from "./../images/social.png"

const Footer = () => {
    return (

        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={logo} className="h-8 mr-3"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Store</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Link to={"/product"}>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Product</a>
                        </Link>
                        <Link to={"/basket"}>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Basket</a>
                        </Link>
                        <Link to={"/favorite"}>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Favorite</a>
                        </Link>
                        <a href="https://github.com/eldorado-22" className="hover:underline">GitHub</a>
                    </ul>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={social} className="h-8 mr-3"
                             alt="Flowbite Logo"/>
                        <span className="py-4 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Social Media</span>
                    </a>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <a href="https://www.instagram.com/zhumashevv_996/" target="_blank"
                           className="mr-4 hover:underline md:mr-6"><BsInstagram/></a>
                        <a href="https://www.linkedin.com/in/eldorado-jumashevv-51a792259/" target="_blank"
                           className="mr-4 hover:underline md:mr-6"><BsLinkedin/></a>
                        <a href="https://www.facebook.com/eldoradojumashevv/" target="_blank"
                           className="mr-3 hover:underline md:mr-6"><BsFacebook/></a>
                        <a href="https://github.com/eldorado-22" target="_blank"
                           className="mr-4 hover:underline md:mr-6"><BsGithub/></a>
                        <a href="https://www.youtube.com/channel/UCM4GdMSYh-zgfNwlY27vTgg" target="_blank"
                           className="mr-4 hover:underline md:mr-6"><BsYoutube/></a>
                        <a href="https://twitter.com/jumashevv996" target="_blank" className=" hover:underline md:mr-6"><BsTwitter/></a>
                        <a href="https://dribbble.com/jumashevv" target="_blank"
                           className="hover:underline "><BsDribbble/></a>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
                    <a href="#"
                       className="hover:underline"> Eldorado.JM™
                    </a>. All Rights Reserved.
                </span>
            </div>
        </footer>

    );
};

export default Footer;