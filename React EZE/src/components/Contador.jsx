import React, { useState, useContext } from "react";
import  './Contador.css';
import { CartContext } from "../context/CartContext";
import { getProduct } from './asynMock'; 


const Contador = ({product}) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1 )
    }



const handleSumar = () => {
     setCantidad(cantidad +1)
}

    return(
    <div>
        <div className="item-count">

            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
                        
        </div>
        <button className="agregarcarrito" onClick={() => { agregarAlCarrito(product, cantidad) }}> Añadir al carrito</button>

        </div>



    )
}



export default Contador