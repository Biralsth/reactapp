


import React from "react";
import { NavLink } from "react-router";


export default function Header() {
    return (
        <header className="bg-blue-400 text-white p-4 shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">T-Rex</h1>

                <nav className='space-x-5'>
                    <NavLink to={'/'} className="hover:text-gray-200">Home</NavLink>
                    <NavLink to={'/about'} className="hover:text-gray-200">About</NavLink>
                    <NavLink to={'/contact'} className="hover:text-gray-200">Contact</NavLink>
                    <NavLink to={'/product/:id'} className="hover:text-gray-200">Product</NavLink>
                </nav>
            </div>
        </header>
    );
}
