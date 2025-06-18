import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import { imgData } from '../data/date'
import Image from './Image'
import TheBox from './TheBox'

export default function RootLayout() {
    return (
        <>

            <Header />
            <Outlet />




        </>
    )
}
