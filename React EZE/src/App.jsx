import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ContenedorDeObjetos from './components/ContenedorDeObjetos'

function App() {
  
return (
    <>
      <NavBar/> 
      <ContenedorDeObjetos saludo="Productos disponibles"/>
    </>
  )
}

export default App
