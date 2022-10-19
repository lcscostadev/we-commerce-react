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



            {/* <header className='bg-[#0f131a] top-0 left-0'>
                <div className='flex justify-between items-center flex-wrap bg-[#131921] py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-3 font-[Poppins] text-white'>
                        <span className='text-3xl mr-1 pt-2 flex items-center'>
                            <ion-icon name="people-circle-outline"></ion-icon> We-commerce
                        </span>
                        <button className='py-3 px-3 text-sm hover:border-white border border-[#131921] rounded'>Selecione <br />seu Endereço</button>
                        <div className='flex'>
                            <input className='w-[810px] rounded-l-lg py-2 px-2 text-black font-normal' type="text" placeholder='search...' />
                            <button className='bg-orange-300 py-2 px-3 rounded-r-lg text-black hover:bg-orange-500 transition-all duration-300'>
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </div>
                        <Button>Login</Button>
                        <button className='flex items-center gap-1 bg-orange-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-orange-300 duration-500'>
                            Shop
                            <ion-icon name="cart-outline"></ion-icon>
                        </button>
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={`#${nav.id}`} className="text-white hover:text-gray-400 duration-500" onClick={() => setOpen(false)}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </header> */}
        </>
    );
}

export default Navbar;