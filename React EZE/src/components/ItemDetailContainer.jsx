import {useParams} from 'react-router-dom' ;
import { useState, useEffect } from 'react';
import { getProduct } from './asynMock';


export default function ItemDetailContainer() {

    const { prodId }=useParams ();

    const[product, setProduct]  = useState({});

    useEffect(()=>{
        setProduct(getProduct(prodId))
    }, [prodId]);
    

    return (
         <>


       <div>
        <h1>Detalle del producto {prodId} </h1>
        <h3>Nombre: {product.title} </h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>Precio $ {product.price}</p>
        
        
        </div>        
        
        
        </>
    );






}