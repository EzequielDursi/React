import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryComponent from './components/CategoryComponent'
import Contacto from './components/Contacto'
import {CartContext, CartProvider} from "./context/CartContext"
import Carrito from './components/Carrito'
import HomeComponent from './components/HomeComponent.jsx'
import Checkout from './components/Checkout.jsx'
function App() {

 
return (

    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route exact path="/" element= {<HomeComponent/>}/>
      <Route exact path="/products" element={<ItemListContainer/>}/>
      <Route exact path="/product/:prodId" element={<ItemDetailContainer/>}/>
      <Route exact path="/category/:catName" element={<CategoryComponent/>}/>
      <Route exact path="/contact" element={<Contacto/>}/>
      <Route exact path="/carrito" element={<Carrito/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>

      </Routes>
      
      </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
