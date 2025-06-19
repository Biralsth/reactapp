import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Header from '../../component/Header'
import TheBox from '../../component/TheBox'
import ProductList from '../product/ProductList'
import Display from './Display'
import Beschreibung from './Beschreibung'
import Menu from './Menu'
import ContactDeRestro from './ContactDeRestro'


export default function Home() {
    return (
        <div className='w-auto scale font-serif'>
            <Display />
            <Beschreibung />
            <Menu />
            <ContactDeRestro />


        </div>
    )
}

