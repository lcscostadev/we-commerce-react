import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-[#0f131a] text-white'>
                <footer className=' max-w-[1280px] mx-auto flex flex-col py-2'>
                    <div className='flex justify-between items-start'>
                        <div className='flex items-center text-[25px]'>
                            <ion-icon name="people-circle-outline"></ion-icon>
                            <h1>WeCommerce</h1>
                        </div>
                        <div>
                            <div className='mb-5'>
                                <h2 className='font-bold'>Mídias Sociais:</h2>
                                <div className='flex gap-2'>
                                    <a href="">
                                        <ion-icon name="logo-facebook" size="large"></ion-icon>
                                    </a>
                                    <a href="">
                                        <ion-icon name="logo-twitter" size="large"></ion-icon>
                                    </a>  <a href="">
                                        <ion-icon name="logo-instagram" size="large"></ion-icon>
                                    </a>  <a href="">
                                        <ion-icon name="logo-linkedin" size="large"></ion-icon>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className="font-bold">Baixe nosso App:</h2>
                                <button>Google Play</button>
                                <button>Apple Store</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='font-bold'>Atendimento:</h2>
                                <p>Horário de atendimento: </p>
                                <p>08:00 as 20:00</p>
                                <p>Segunda a sábado, </p>
                                <p>Horário de Brasílias </p>
                                <br />
                                <p>Endereço:</p>
                                <p>Rua Whatever, 1234 - </p>
                                <p>8 floor - center</p>
                                <p>SP - ZIP: 12345-678</p>
                            </div>
                            <br />
                            <div>
                                <h2>E-mail:</h2>
                                <p>something@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p>&copy; All rights reserved. We-Commerce - 2022.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;