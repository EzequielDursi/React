import {useParams} from 'react-router-dom' ;
import { useState, useEffect, useContext } from 'react';
import { getProduct } from './asynMock';
import Contador from './Contador';
import {CartContext} from "../context/CartContext"


export default function ItemDetailContainer() {

    const {carrito, agregarAlcarrito} = useContext(CartContext)
   

    const { prodId }=useParams ();

    const[product, setProduct]  = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProduct(prodId);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
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

