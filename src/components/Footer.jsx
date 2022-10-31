import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-[#0f131a] text-white'>
                <footer className=' max-w-[1280px] mx-auto flex flex-col'>
                    <div className='flex justify-between items-start'>
                        <div className='flex items-center text-[25px]'>
                            <ion-icon name="people-circle-outline"></ion-icon>
                            <h1>WeCommerce</h1>
                        </div>
                        <div>
                            <div>
                                <h2 className='font-bold'>Mídias Sociais:</h2>
                                <div className='flex gap-2'>
                                    <ion-icon name="logo-facebook" size="large"></ion-icon>
                                    <ion-icon name="logo-twitter" size="large"></ion-icon>
                                    <ion-icon name="logo-instagram" size="large"></ion-icon>
                                    <ion-icon name="logo-youtube" size="large"></ion-icon>
                                    <ion-icon name="logo-linkedin" size="large"></ion-icon>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h2>Baixe nosso App:</h2>
                                <button>Google Play</button>
                                <button>Apple Store</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>Atendimento</h2>
                                <p>um monte de </p>
                                <p>um monte de </p>
                                <p>um monte de </p>
                                <p>um monte de </p>
                                <p>um monte de </p>
                            </div>
                            <div>
                                <h2>E-mail:</h2>
                                <p>blabla@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p>&copy; All rights reserved - We-Commerce - 2022.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;