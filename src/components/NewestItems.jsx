import React from 'react';
import { echoDot, miniSmart, smartLamp, standSupport, echoDotSupport } from '../assets';

const NewestItems = () => {
    return (
        <>
            <div id='items' className='flex justify-center items-center'>
                <div className="border p-3 rounded m-3 ">
                    <img src={echoDot} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <span>100</span>
                    </div>
                    <p>R$349,00</p>
                </div>

                <div className="border p-3 rounded m-3">
                    <img src={miniSmart} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <span>100</span>
                    </div>
                    <p>R$85,80</p>
                </div>

                <div className="border p-3 rounded m-3">
                    <img src={smartLamp} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <span>100</span>
                    </div>
                    <p>R$49,99</p>
                </div>

                <div className="border p-3 rounded m-3">
                    <img src={standSupport} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <span>100</span>
                    </div>
                    <p>R$39,90</p>
                </div>

                <div className="border p-3 rounded m-3">
                    <img src={echoDotSupport} alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex'>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <span>100</span>
                    </div>
                    <p>R$79,99</p>
                </div>


            </div>
        </>
    );
}

export default NewestItems;