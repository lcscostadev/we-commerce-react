import React from 'react';
import { weCommerceApp, qrCode } from '../assets';

const BannerApp = () => {
    return (
        <>
            <div>
                <div className='flex items-center justify-items-start gap-20 cursor-pointer bg-zinc-300'>
                    <div>
                        <img className='max-w-[350px]' src={weCommerceApp} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-2 p-3'>
                        <h1 className='text-5xl uppercase font-bold'>Download</h1>
                        <h2 className='text-4xl uppercase font bold'>Our App</h2>
                        <p className='text-[18px] max-w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam praesentium eligendi eius nesciunt itaque distinctio excepturi labore explicabo natus magni commodi, quisquam perferendis, error culpa minus voluptates numquam ipsa?</p>
                        <div className='flex items-center justify-between mt-10'>
                            <div className='flex gap-2 items-center justify-center flex-col'>
                                <button className='flex justify-center items-center gap-1 bg-[#222] p-2 rounded text-white'>
                                    <ion-icon name="phone-portrait-outline" size="large"></ion-icon>
                                    <div className='flex flex-col'>
                                        <p className='text-sm text-slate-400'>Download on the</p>
                                        <h2 className='text-[18px]'>Lorem Ipsum</h2>
                                    </div>
                                </button>
                                <button className='flex justify-center items-center gap-1 bg-[#222] p-2 rounded text-white'>
                                    <ion-icon name="phone-portrait-outline" size="large"></ion-icon>
                                    <div className='flex flex-col'>
                                        <p className='text-sm text-slate-400'>Download on the</p>
                                        <h2 className='text-[18px]'>Lorem Ipsum</h2>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <img className='max-w-[200px]' src={qrCode} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default BannerApp;