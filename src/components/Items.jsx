import React from 'react';
import { echoDot, miniSmart, smartLamp, standSupport, echoDotSupport } from '../assets';
import Item from './Item';
import Carousel from 'react-elastic-carousel';

const Items = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]


    return (
        <>
            <div className='bg-white my-2'>
                <div className='flex items-center justify-between p-2'>
                    <h1 className=' text-2xl text-black font-bold uppercase'>Most Searched items</h1>
                    <a href="#" className='uppercase '>See All</a>
                </div>
                <Carousel breakPoints={breakPoints} className="p-6">
                    <Item>one</Item>
                    <Item>two</Item>
                    <Item>three</Item>
                    <Item>four</Item>
                    <Item>five</Item>
                    <Item>six</Item>
                    <Item>seven</Item>
                    <Item>eight</Item>
                </Carousel>
            </div>
        </>
        // <>
        //     <div id='items' className='flex justify-center items-center'>
        //         <div className="border p-3 rounded m-3 ">
        //             <img src={echoDot} alt="" />
        //             <p>Lorem ipsum dolor sit amet.</p>
        //             <div className='flex'>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star-half"></ion-icon>
        //                 <ion-icon name="star-outline"></ion-icon>
        //                 <span>100</span>
        //             </div>
        //             <p>R$349,00</p>
        //         </div>

        //         <div className="border p-3 rounded m-3">
        //             <img src={miniSmart} alt="" />
        //             <p>Lorem ipsum dolor sit amet.</p>
        //             <div className='flex'>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star-half"></ion-icon>
        //                 <ion-icon name="star-outline"></ion-icon>
        //                 <span>100</span>
        //             </div>
        //             <p>R$85,80</p>
        //         </div>

        //         <div className="border p-3 rounded m-3">
        //             <img src={smartLamp} alt="" />
        //             <p>Lorem ipsum dolor sit amet.</p>
        //             <div className='flex'>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star-half"></ion-icon>
        //                 <ion-icon name="star-outline"></ion-icon>
        //                 <span>100</span>
        //             </div>
        //             <p>R$49,99</p>
        //         </div>

        //         <div className="border p-3 rounded m-3">
        //             <img src={standSupport} alt="" />
        //             <p>Lorem ipsum dolor sit amet.</p>
        //             <div className='flex'>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star-half"></ion-icon>
        //                 <ion-icon name="star-outline"></ion-icon>
        //                 <span>100</span>
        //             </div>
        //             <p>R$39,90</p>
        //         </div>

        //         <div className="border p-3 rounded m-3">
        //             <img src={echoDotSupport} alt="" />
        //             <p>Lorem ipsum dolor sit amet.</p>
        //             <div className='flex'>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star"></ion-icon>
        //                 <ion-icon name="star-half"></ion-icon>
        //                 <ion-icon name="star-outline"></ion-icon>
        //                 <span>100</span>
        //             </div>
        //             <p>R$79,99</p>
        //         </div>


        //     </div>
        // </>


    );
}

export default Items;