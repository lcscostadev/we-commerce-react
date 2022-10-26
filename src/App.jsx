import React from 'react';
import { CategoriesPage, Home } from './components/index';
import { Route, Routes } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/eletronics' element={<CategoriesPage />} />
        <Route path='/computers' element={<CategoriesPage />} />
        <Route path='/games' element={<CategoriesPage />} />

      </Routes>
    </>
  )
}

export default App


// ZIP/Sign in/Shop needs useEffect for localStorage