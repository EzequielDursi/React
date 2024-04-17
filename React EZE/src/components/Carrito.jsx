import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Carrito.css'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
    

    const handleVaciar = () =>{

        vaciarCarrito();
    }
    return (
        <div className="container">
        <h1>Carrito</h1>

    { carrito.map((product) => (

                <div key={product.id}>
               <h2>{product.title}</h2>
               <p>precio unidad:${product.price}</p>
               <p>precio total: ${product.price * product.cantidad}</p>
               <p>Cantidad: {product.cantidad}</p>
               </div>
           ))
           
          
           }
            {carrito.length > 0 && <h2>Precio Total:$ {precioTotal()} </h2>}
            <button onClick={handleVaciar}>Vaciar</button>

        </div>
    )
}


export default Carrito