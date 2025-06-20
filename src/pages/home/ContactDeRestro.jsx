import React from 'react'

export default function ContactDeRestro() {
    return (
        <a name="contact">

            <div className='p-15 mt-20 ml-50 max-w-[1100px] min-w-[500px] flex flex-wrap flex-col  '>
                <div className='my-8 p-2'>
                    <select name="" id="">
                        <option value="" hidden diasbled selected>Select your Country</option>
                        <option value="">India</option>
                        <option value="">Nepal</option>
                        <option value="">China</option>
                    </select>
                </div>
                <h1 className='text-4xl  mb-5'>Contact</h1>
                <p className='p-2 mt-5'> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>

                <h3 className='p-2 mt-5 text-xl  font-bold text-gray-700 '>Catering Service, 42nd Living St, 43043 New York, NY</h3>
                <p className='p-2 mt-1'>You can also contact us by phone 00553123-2323 or email catering@catering.com.</p>
                <div className='opacity-70 text p-1 my-5'>
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-b border-gray-300 rounded mt-10 px-4 py-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="No of people"
                        className="border-b border-gray-300 rounded mt-10 px-4 py-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="datetime-local"
                        defaultValue="09-09-2025"
                        className="border-b border-gray-300 rounded my-10 px-4 py-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Message/Special requirements"
                        className="border-b border-gray-300 rounded mt-10 px-4 py-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className='mt-8 p-2 z-50 text-black text-2xs font-medium  bg-gray-300 shadow-inner opacity-100 hover:bg-gray-400 hover:outline-none hover:ring-2 hover:ring-blue-500 hover:shadow-md hover:shadow-blue-500  '>
                        SEND MESSAGE
                    </button>
                </div>
            </div>
        </a>
    )
}
