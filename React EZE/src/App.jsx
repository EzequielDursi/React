import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryComponent from './components/CategoryComponent'

function App() {
  
return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
     
      <Route exact path="/products" element={<ItemListContainer/>}/>
      <Route exact path="/product/:prodId" element={<ItemDetailContainer/>}/>
      <Route exact path="/category/:catName" element={<CategoryComponent/>}/>
   
     
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
