import React from 'react';
import { Navbar, Slider, Items, BannerApp } from './components';
import './App.css'

function App() {

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
      </div>
    </>
  )
}

export default App
