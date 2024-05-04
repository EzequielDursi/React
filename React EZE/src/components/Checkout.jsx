import React, {useState} from 'react'
import { useContext } from 'react';
import { CartContext} from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../firebase/firebase'


const Checkout = () => {
 const [pedidoId, setPedidoId] = useState("")
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const { register, handleSubmit } = useForm();
 
    const comprar = (datos) => {

        const pedido = {
            cliente: datos,
            productos: carrito,
            total: precioTotal()

        }
        console.log(pedido);

        const pedidosRef = collection (db, "orders")

        addDoc(pedidosRef, pedido)
            .then((doc)=> {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    
    if(pedidoId) {
        return (
        <div className="container">
            <h1>Muchas Gracias por su compra!</h1>
             <p>Referencia de pedido: {pedidoId}</p>
        </div>

        )
    }

       
    return (
    
        <div>
            <h1 className="main-titulo"> Finalizar Compra</h1>
            <form className= "formulario" onSubmit={handleSubmit(comprar)}>
                <input 
                type="text" 
                placeholder="ingresa tu nombre" 
                {...register("nombre")}
                />
                <input 
                type="email" 
                placeholder='ingresa tu email'
             {...register("email")}
                 />
                   <input 
                type="phone" 
                placeholder='ingresa tu teléfono'
                {...register("telefono")}
                 />
                   <input 
                type="phone" 
                placeholder='ingresa detalles de compra'
                {...register("Ingrese detalles de compra")}
                 />
                <button type="submit" className="enviar">Comprar</button>
            </form>
            
            
            
            </div>
    
    )
}

export default Checkout