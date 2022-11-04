import React from 'react';
import { Games, computer } from '../assets';
import { Navbar, Footer } from './index';

const CategoriesPage = () => {
    return (
        <>
            <Navbar />
            <section className='m-5'>
                <div className="grid gap-6 grid-rows-6 grid-cols-3 h-[100vh]">
                    <div className="relative bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg row-span-4 col-span-1">
                        <img src={Games} alt="" className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
                        <h1 className='absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:text-orange-300 cursor-pointer font-bold'>Games</h1>
                    </div>
                    <div className="relative bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg row-span-2 col-span-1">
                        <img src={computer} alt="" className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
                        <h1 className='absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 hover:text-orange-300 cursor-pointer font-bold'>Computers</h1>
                    </div>
                    <div className="bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg row-span-4 col-span-1">03</div>
                    <div className="bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg  row-span-2 col-span-1">04</div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default CategoriesPage;