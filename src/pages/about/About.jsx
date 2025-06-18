import React from 'react'
import { NavLink } from 'react-router'
import { uiImage } from '../../data/date'

export default function About({ }) {
    return (
        <div className='bg-cover text-white' style={{ backgroundImage: `url(${uiImage})` }}>

            <div className=' p-10'>
                <h1 className='font-bold text-4xl font-mono'>midUI</h1>
                <p className='max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, fugit ut id, esse reiciendis sint laborum accusamus aperiam voluptas.</p>

                <div className='m-5 p-5 flex '>
                    <ul className='list-disc'>
                        <li>A</li>
                        <li>Faster dev</li>
                        <li>Cleaner HTML</li>
                        <li>Customizable and themeable</li>
                        <li> Pure CSS</li>
                    </ul>
                    <div className='p-2 m-6 pb-6 border w-45 h-3/12 border-red-900 rounded-lg'>
                        <h1 className='opacity-30'>● ● ●</h1>
                        <h1 className='font-sans'>$ npm run dev</h1>

                    </div>
                </div>
                <button className='p-2 m-1 font-semibold shadow-gray-950 shadow-inner bg-[rgba(255,255,255,0.8)] text-black rounded'>See more</button>
                <button className='p-2 m-1 bg-gray-700 text-white  shadow-gray-400  shadow-inner rounded'>How to use?</button>
            </div>
        </div>
    )
}
