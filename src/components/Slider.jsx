import React, { useState, useEffect, useRef } from 'react';

const featuredProducts = [
    'src/assets/pic1.jpg',
    'src/assets/pic2.jpg',
    'src/assets/pic3.jpg',
    'src/assets/pic4.jpg',
]

let count = 0;
let slideInterval;

export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 5000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <div className="max-w-[1200px] m-auto">
            <div ref={slideRef} className="w-full relative select-none ">
                <img src={featuredProducts[currentIndex]} alt="" />
                <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                    <button onClick={handleOnPrevClick} className="text-white">
                        <ion-icon name="arrow-back-circle-outline" size="large"></ion-icon>
                    </button>
                    <button onClick={handleOnNextClick} className="text-white">
                        <ion-icon name="arrow-forward-circle-outline" size="large"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    )
}