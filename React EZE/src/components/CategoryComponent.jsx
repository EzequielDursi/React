import { useParams } from "react-router-dom";
import { getProducts } from "./asynMock";
import {useEffect} from 'react';
import {getProductsByCategory} from './asynMock'





export default function CategoryComponent () {

const { catName } = useParams();
const [products, setProducts] = useState([])

useEffect(()=>{

    const categoryProduct = catName ? getProductsByCategory: getProducts

   categoryProduct(catName)
 .then(response=> {

    setProducts(response)

 })}, [catName]) }





