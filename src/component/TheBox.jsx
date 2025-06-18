import React from 'react'
import Image from './Image'
import { imgData } from '../data/date'

export default function TheBox() {
    return (
        <div className="m-5 p-5  flex  max-w-full justify-center items-center flex-wrap">
            <div className='p-2 m-2 max-w-xl'>
                <h1 className=' p-2 m-1 font-extrabold text-2xl '>Marketing Website done with Astro</h1>
                <p className='p-2 m-1'>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Cupiditate veritatis aliquid
                    laboriosam praesentium dicta, quae natus
                    voluptatibus voluptate eaque dolorem excepturi
                    totam ullam aliquam eveniet quibusdam asperiores
                    est iusto nisi?</p>

                <button className="p-2 m-2 border-2 border-indigo  bg-black text-white rounded">Download for free</button>
                <button className="p-2 m-2 border-2 border-black  rounded" >Github Repo</button>
            </div>
            <div className="p-2 m-2">

                {imgData.map((img) => {
                    return <Image key={img.id} rex={img} />

                })}
            </div>
        </div>
    )
}
