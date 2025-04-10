import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Outlet } from 'react-router'


function App() {

  return (
    
    <div className='App'>
      <header>
        <h1>Portfolio</h1>
        <nav>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/about/1">Om mig</NavLink>
          <NavLink to="/projects">Projekt</NavLink>
          <NavLink to="/degree/">Utbildning</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </nav>
      </header>
     <main><Outlet /></main>
    </div>
  )
}

export default App
