import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className='bg-[#0f131a]'>
                <div className='flex'>
                    <div>
                        <div>
                            <h2>Mídias Sociais</h2>
                            <div>
                                <ion-icon name="logo-facebook" size="large"></ion-icon>
                                <ion-icon name="logo-twitter" size="large"></ion-icon>
                                <ion-icon name="logo-instagram" size="large"></ion-icon>
                                <ion-icon name="logo-youtube" size="large"></ion-icon>
                                <ion-icon name="logo-linkedin" size="large"></ion-icon>
                            </div>
                        </div>
                        <div>
                            <h2>Baixe nosso App</h2>
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
            </footer>
        </>
    );
}

export default Footer;