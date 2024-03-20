const products=[

{
    id: 1,
    title: 'Zapatos',
    price: '2500',
    category: 'vestimenta',
    description: 'talles: 36, 37, 38, 39, 40, 41, 42, 43, 44',
    image: 'imagenes proyecto/image productos/zapatos.png' ,
},
{
  id: 2,
  title: 'Mochilas',
  price: '3700',
  category: 'estudiante',
  description: ' colores: rojo, verde, negro,',
  image: 'imagenes proyecto/image productos/mochi-marron-negro-2.jpg', 

},
{
   id: 3,
   title: 'Medias',
   price: '100',
   categaroy: 'vestimenta',
   description: 'colores: negro, blanco',
   image:'imagenes proyecto/image productos/imedias negras.jpg',

},
{
    id:4,
    title: 'Carteras',
    price: '3000',
    category: 'mujer',
    description: 'colores: rojo, negro, gris',
    image:'imagenes proyecto/image productos/images.jpg',
},
]

export const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products);
    }, 2000);

})

export const getProduct = (id) => {

    return new Promise ((resolve)=> {
 setTimeout(()=> {
    resolve(products.find(prod => prod.id == id));
 },2000)
    }) 

}

export const getProductByCategory = (category) => {
    return new Promise ((resolve)=> {

        setTimeout(() => {
            resolve(products.find(prod=> prod.category == category))
        },2000
        
        );
    })
}