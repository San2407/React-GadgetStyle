import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { products } from "./productsMock";
export const AgregarDocs = () => {
  const Datos = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };
  return <button onClick={Datos}>agregarDocs</button>;
};

export default AgregarDocs;
