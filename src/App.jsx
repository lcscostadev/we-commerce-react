import React from 'react';
import { Navbar, Slider, Items } from './components';
import './App.css'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>

        <section >
          <Slider />
        </section>

        <section>
          <Items />
        </section>

      </main>
    </>
  )
}

export default App
