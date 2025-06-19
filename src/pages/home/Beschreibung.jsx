import React from 'react'

export default function Beschreibung() {
    return (
        <div className='  max-w-[1600px] min-w-[500px] flex flex-wrap-reverse justify-center items-center m-10 mt-40  border-b border-gray-300'>
            <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt=""
                className='m-4 mr-10 w-1/3 min-w-80 max-w-xl max-h-800 rounded-xl shadow-inherit' />
            <div className='w-1/3 min-w-100 ml-10 '>
                <h1 className='text-5xl text-center p-1 m-2'>About Catering</h1>
                <h3 className='text-2xl text-center p-2 m-2'>Tradition since 1889</h3>

                <p className='p-2 m-2'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>

                <p className='p-2 m-2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}
