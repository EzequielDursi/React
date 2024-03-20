import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {getProducts} from './asynMock.js';
import { useEffect } from 'react';
import './ItemListContainer.css'

export default function ItemListContainer({saludo}) {
   const navigate = useNavigate();

   const [products, setProducts] = useState([])
   
   useEffect(()=>{
       getProducts.then(data => setProducts(data));
   },[]);

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
