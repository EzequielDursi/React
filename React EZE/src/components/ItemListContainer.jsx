import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {getProducts} from '../firebase/firebase.js';
import { useEffect } from 'react';
import './ItemListContainer.css';
import { collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/firebase.js";

export default function ItemListContainer({saludo}) {
   const navigate = useNavigate();

   const [products, setProducts] = useState([])
   
  async function obtenerProductos(){

    const productos= await getProducts();
    setProducts(productos)
  }

  useEffect (() => {
    obtenerProductos()
  }, []) ;

   const handleClick = (id) => { 
      navigate(`/product/${id}`);
   };

 return(
     <>
        <section>
           <h2>{saludo}</h2>          
 
        </section>

        <section className="productstyle" >
{
    products.map(product =>(
        <article key={product.id} className="cart">

         <h4>{product.title}</h4>                                   
         <img src={product.image} alt={product.title} />
         <p>Precio $ {product.price}</p>
          <button onClick={()=>handleClick(product.id)}>Ver Detalle</button>
        </article>
    ))
}

</section>

        </>
       )

}
