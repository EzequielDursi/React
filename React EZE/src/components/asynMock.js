const products=[

{
    id: 1,
    title: 'Zapatos',
    price: 2500,
    category: 'vestimenta',
    description: 'talles: 36, 37, 38, 39, 40, 41, 42, 43, 44',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdN6-GGd4WITUg6ZZkBqod4TsdGUpMmesXs6Inq4Msw&s' ,
},
{
  id: 2,
  title: 'Mochilas',
  price: 3700,
  category: 'estudiante',
  description: ' colores: rojo, verde, negro,',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRQrn_JdNDBPooWt2NJH4S3N8ZNnE2yYwb1UvSJy8Cw&s', 

},
{
   id: 3,
   title: 'Medias',
   price: 100,
   categaroy: 'vestimenta',
   description: 'colores: negro, blanco',
   image:'https://socksmarket.es/wp-content/uploads/2023/03/calcetines-siempre-seremos-friends-pixel-2-150x150.jpg',

},
{
    id:4,
    title: 'Carteras',
    price: 3000,
    category: 'mujer',
    description: 'colores: rojo, negro, gris',
    image:'https://iluminaras.com/wp-content/uploads/2024/03/D_642157-MLU74736963188_032024-F-150x150.jpg',
},

{
    id:5,
    title: 'Pantalones',
    price: 900,
    category: 'vestimenta',
    description: 'colores: verde, negro, gris',
    image:'https://taziamx.com/cdn/shop/products/Pantalones-Lizzie-Verde-3_150x.jpg?v=1681323440',
},

{
    id:6,
    title: 'Remeras',
    price: 1200,
    category: 'vestimenta',
    description: 'colores: amarillo, blanco, negro',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLYVHLKpplMTJeObPk53eich458_7S0OmgQ28UifEiA&s',
},


]

export const getProducts = new Promise((resolve) => {
    resolve(products);
});

export const getProduct = (id) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id == id));
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(products.filter(prod => prod.category == category));
    });
};