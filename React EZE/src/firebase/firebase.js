
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0NA16jDBVqpBvN5H0zmX3YqfTmwt4JxY",
  authDomain: "ezestore-4f222.firebaseapp.com",
  projectId: "ezestore-4f222",
  storageBucket: "ezestore-4f222.appspot.com",
  messagingSenderId: "566114519313",
  appId: "1:566114519313:web:f1b91ce84b57da0c2464b0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getProducts() {

  const response = await getDocs(collection(db, "productos")) ;
  console.log(response);

  const listaProds= []
  response.forEach(doc => listaProds.push({id: doc.id,...doc.data()}) )
  console.log(listaProds)
return listaProds;
}

export async function getProduct(prodId) {


}