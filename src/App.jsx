import React from 'react';
import { CategoriesPage, ComputersPage, EletronicsPage, GamesPage, Home } from './components/index';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/eletronics' element={<EletronicsPage />} />
        <Route path='/computers' element={<ComputersPage />} />
        <Route path='/games' element={<GamesPage />} />
      </Routes>
    </>
  )
}

export default App


// ZIP/Sign in/Shop needs useEffect for localStorage
// Criar pagina categories e criar um breadcrumb