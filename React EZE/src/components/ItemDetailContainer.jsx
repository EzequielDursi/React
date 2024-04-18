import {useParams} from 'react-router-dom' ;
import { useState, useEffect, useContext } from 'react';
import { getProduct } from './asynMock';
import Contador from './Contador';
import {CartContext} from "../context/CartContext"
import {getDoc, doc} from "firebase/firestore"
import{db} from "../firebase/firebase"

export default function ItemDetailContainer() {

    const {carrito, agregarAlcarrito} = useContext(CartContext)
   

    const { prodId }=useParams ();

    const[product, setProduct]  = useState({});

    useEffect(() => {
        

        const docRef= doc(db, "productos", prodId)

        getDoc(docRef)
        .then(response => {
            const data = response.data ()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch( error => {
            console.log(error)
        })
        .finally(() => {
            
        })
      }, [prodId]);


  
    return (
         <>


       <div>
        <h1>Detalle </h1> 
        <h3>{product.title} </h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>Precio $ {product.price}</p>
        <Contador product={product} />
        
        
        </div>        
        
        
        </>
    );






}

