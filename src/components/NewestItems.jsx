import React from 'react';
import { echoDot, miniSmart, smartLamp, standSupport, echoDotSupport } from '../assets';

const NewestItems = () => {
    return (
        <>
            <div id='items' className='flex justify-center items-center  p-2 my-2'>
                <div className="border p-5 rounded m-3 bg-white ">
                    <img src={echoDot} alt="" />
                    <p className="text-[15px] font-bold text-slate-700">Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <span>(100)</span>
                    <p>R$349,00</p>
                    <button>Buy Now</button>
                </div>

                <div className="border p-5 rounded m-3 bg-white">
                    <img src={miniSmart} alt="" />
                    <p className="text-[15px] font-bold text-slate-700">Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <span>(100)</span>
                    <p>R$85,80</p>
                    <button>Buy Now</button>
                </div>

                <div className="border p-5 rounded m-3 bg-white">
                    <img src={smartLamp} alt="" />
                    <p className="text-[15px] font-bold text-slate-700">Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <span>(100)</span>
                    <p>R$49,99</p>
                    <button>Buy Now</button>
                </div>

                <div className="border p-5 rounded m-3 bg-white">
                    <img src={standSupport} alt="" />
                    <p className="text-[15px] font-bold text-slate-700">Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <span>(100)</span>
                    <p>R$39,90</p>
                    <button>Buy Now</button>
                </div>

                <div className="border p-5 rounded m-3 bg-white">
                    <img src={echoDotSupport} alt="" />
                    <p className="text-[15px] font-bold text-slate-700">Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <span>(100)</span>
                    <p>R$79,99</p>
                    <button>Buy Now</button>
                </div>


            </div>
        </>
    );
}

export default NewestItems;