import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Error from "../Error/Error";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";

import "./list-container.css";

const ItemListContainer = ({ saludo, pregunta, titulo}) => {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true);

  const {idCategory} = useParams()


  const getProducts = async() => {
    try {
      const dataDb = await getDocs(collection(db, "products"));

      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data() }
      });

    setProducts(data);
    setCargando(false)

    } catch(error) {
      return <Error/>
    }

  }

  const getProductsByCategory = async() => {
    const q = query(collection(db, "products"), where("categoria", "==", idCategory));

    const dataDb = await getDocs(q);

    const data = dataDb.docs.map( (productDb) => {
      return { id: productDb.id, ...productDb.data() }
    })

    setProducts(data);
    setCargando(false)
  }


  useEffect(() => {

    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory]);

  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{saludo}</h3>
      <p>{pregunta}{idCategory}?</p>
      {cargando ? (
        <div className="cargando">Cargando...</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;

