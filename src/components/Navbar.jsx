import React from 'react';
import { navLinks } from '../constants';
import { Button } from './index';

const Navbar = () => {

    return (
        <>
            <header className='bg-[#0f131a] text-white p-3'>
                <div className='flex items-center justify-between'>
                    <div className='text-3xl mr-1 font-bold cursor-pointer pt-2 flex items-center'>
                        <ion-icon name="people-circle-outline"></ion-icon> <h1>We-Commerce</h1>
                    </div>
                    <div>
                        <Button>Hi, select <br /> your address</Button>
                    </div>
                    <div className='flex'>
                        <input className='w-[1200px] rounded-l-lg py-2 px-2 text-black font-normal' type="text" placeholder='search...' />
                        <button className='bg-orange-300 py-2 px-3 rounded-r-lg text-black hover:bg-orange-500 transition-all duration-300'>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </div>
                    <div>
                        <Button>Login</Button>
                    </div>
                    <button className='flex items-center gap-1 bg-orange-500 text-white font-[Poppins] py-2 px-6 rounded  hover:bg-orange-300 duration-500'>
                        Shop
                        <ion-icon name="cart-outline"></ion-icon>
                    </button>
                </div>

                <nav >
                    <ul className='flex gap-2 '>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

        </>
    );
}

export default Navbar;