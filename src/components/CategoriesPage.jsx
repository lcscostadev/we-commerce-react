import React from 'react';
import { games } from '../assets';
import { Navbar, Footer } from './index';

const CategoriesPage = () => {
    return (
        <>
            <Navbar />
            <section className='m-5'>
                <div class="grid gap-6 grid-rows-6 grid-cols-3 h-[100vh]">
                    <div className="bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg row-span-4 col-span-1">
                        <img src={games} alt="" />
                    </div>
                    <div className="bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg row-span-2 col-span-1">02</div>
                    <div className="bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg row-span-4 col-span-1">03</div>
                    <div className="bg-[#0f131ad9] border-b-[10px] border-orange-300 text-white text-center text-5xl py-4 rounded-lg  row-span-2 col-span-1">04</div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default CategoriesPage;