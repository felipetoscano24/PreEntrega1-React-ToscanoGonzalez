import "./list-container.css";
import ItemList from "./ItemList";
import useCargando from "../../hooks/useCargando";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

const ItemListContainer = ({ saludo, pregunta, titulo}) => {
  const [products, setProducts] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } = useCargando()

  const {idCategory} = useParams()


  const getProducts = async() => {
    const dataDb = await getDocs(collection(db, "products"));

    const data = dataDb.docs.map( (productDb) => {
      return { id: productDb.id, ...productDb.data() }
    })

    setProducts(data)
  }

  const getProductsByCategory = async() => {
    const q = query(collection(db, "products"), where("categoria", "==", idCategory));

    const dataDb = await getDocs(q);

    const data = dataDb.docs.map( (productDb) => {
      return { id: productDb.id, ...productDb.data() }
    })

    setProducts(data)
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
      {
        cargando ? pantallaDeCarga: <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;

