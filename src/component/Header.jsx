


import React from "react";
import { NavLink } from "react-router";


export default function Header() {
    return (
        <header className="sticky top-0 z-50 shadow-2xl  bg-white  text-black p-4  font-serif ">
            <div className="shadow-2xl shadow-gray-900 max-w-full mx-auto flex justify-between items-center">
                <NavLink to={'/'} className=" mx-5 text-xl  hover:bg-gray-200">Gourment au Catering</NavLink>

                <nav className='space-x-6 '>

                    <NavLink to={'/about'} className="hover:bg-gray-200 py-2 px-2">About</NavLink>
                    <NavLink to={'/menu'} className="hover:bg-gray-200 py-2 px-2">Menu</NavLink>
                    <NavLink to={'/contact'} className="hover:bg-gray-200 py-2 px-2">Contact</NavLink>

                </nav>
            </div>
        </header>
    );
}
