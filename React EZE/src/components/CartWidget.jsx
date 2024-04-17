import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const  CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

    return( 
        <>
         <Link className="menu-link" to="/carrito" >🛒 
         
         <span className="numero-carrito">{cantidadEnCarrito()}</span> 
         
         </Link>

        </>
    )
}



export default CartWidget