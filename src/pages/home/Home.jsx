import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Header from '../../component/Header'
import TheBox from '../../component/TheBox'
import ProductList from '../product/ProductList'


export default function Home() {
    return (
        <div>
            <div className='p-1 m-1'>
                <ProductList />




            </div></div>
    )
}

