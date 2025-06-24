import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import { imgData } from '../data/date'
import Image from './Image'
import TheBox from './TheBox'
import Footer from './Footer'
import Home from '../pages/home/Home'

export default function RootLayout() {
    return (
        <>
            <div className=''>


                <Home />


            </div>




        </>
    )
}
