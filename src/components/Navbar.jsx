import React, { useState } from 'react';
import { navLinks } from '../constants';
import { close, menu } from '../assets';
import { Button, Modal } from './index';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // Fake shop
    const [count, setCount] = useState(0);
    // Fake login
    const [openModal, setOpenModal] = useState(false);
    // Hamburger menu
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {openModal && <Modal closeModal={setOpenModal} />}
            <header className='bg-[#0f131a] text-white p-3'>
                <div className='flex items-center justify-between'>
                    <div className=' mr-1 font-bold cursor-pointer flex items-center text-2xl'>
                        <Link to="/" className='flex items-center gap-1'>

                            <ion-icon name="people-circle-outline"></ion-icon>
                            <h1 className='hidden md:flex'>WeCommerce</h1>

                        </Link>
                    </div>
                    <div className='hidden lg:flex'>
                        <Button>Hi, select <br /> your address</Button>
                    </div>
                    <div className='flex'>
                        <input className=' outline-none md:w-[300px] 2xl:w-[1200px] lg:w-[200px] xl:w-[900px] w-[100px] rounded-l-lg py-2 px-2 text-black font-normal' type="text" placeholder='search...' />
                        <button className='bg-orange-300 py-2 px-3 rounded-r-lg text-black hover:bg-orange-500 transition-all duration-300'>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </div>
                    <div>
                        <button className='hidden md:flex hover:border-white border p-2 rounded border-[#0f131a] font-bold' onClick={() => setOpenModal(true)}>Sign in</button>
                    </div>
                    <button onClick={() => setCount(count + 1)} className=' flex items-center gap-1 md:marker:bg-orange-500 text-white font-[Poppins] py-2 px-6 rounded  md:hover:bg-orange-300 duration-500'>
                        <ion-icon name="cart-outline" size="large"></ion-icon>
                        <span className='text-[20px]'>{count}</span>
                    </button>
                    {/* Mobile menu */}

                    {/* Mobile Menu Section*/}
                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        {/* using prev to the previous version of that state making a callBack function*/}
                        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />

                        {/* Menu */}
                        <div
                            // if toggle is active then flex, if its not menu hidden
                            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                        >
                            <ul className='list-none flex flex-col justify-end items-center flex-1'>
                                {navLinks.map((nav, index) => (
                                    // ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' -> se for o último elemento do array, margin 0
                                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                        < a href={`#${nav.id}`}>
                                            {nav.title}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul >
                        </div>
                    </div>
                </div>
                <nav className='w-full sm:flex  justify-between items-center navbar hidden'>

                    <ul className='list-none sm:flex justify-start items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`p-2 hover:border-white border border-[#0f131a] rounded font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                                <Link to={`/${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))
                        }
                    </ul >



                </nav >

            </header>

        </>
    );
}

export default Navbar;