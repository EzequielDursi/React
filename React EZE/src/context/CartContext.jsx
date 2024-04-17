import { createContext,useEffect,useState } from "react";



export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([]);

    const agregarAlCarrito = (product, cantidad)  => { 
     product["cantidad"] = cantidad;
   
     
  
      const estaEnElCarrito = carrito.find((productInCart) =>{productInCart.id === product.id})
    let nuevoCarrito; 
      if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
  
      } else {
          nuevoCarrito = carrito.push(product);
      }
      setCarrito(nuevoCarrito);
      console.log(carrito)
  
  }
  
  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, product) => acc + product.cantidad, 0)
  }
  
  const precioTotal = () =>  {
    
    return carrito.reduce((acc, product) => acc + product.price + product.cantidad, 0)
   
}
  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {

    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])


   return(<CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
      {children}
   </CartContext.Provider>


   ) ;

    
}
