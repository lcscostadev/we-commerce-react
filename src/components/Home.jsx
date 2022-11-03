import React from 'react';
import { Navbar, Slider, Items, BannerApp, Footer, NewestItems } from './index';


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

                    <section>
                        <NewestItems />
                        <NewestItems />
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
