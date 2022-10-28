import React from 'react';
import { Navbar, Slider, Items, BannerApp, Footer, CategoriesPage } from './index';


function Home() {
    return (
        <>
            <div className='bg-[#EAEDED] '>

                <header>
                    <Navbar />
                </header>

                <main className='max-w-[1280px] mx-auto'>
                    <section >
                        <Slider />
                    </section>

                    <section>
                        <Items />
                        <BannerApp />
                    </section>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Home;