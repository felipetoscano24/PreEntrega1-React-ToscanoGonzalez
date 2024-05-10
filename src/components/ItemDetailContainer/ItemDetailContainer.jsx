import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Error from "../Error/Error";
import db from "../../db/db";
import { doc, getDoc } from "firebase/firestore";

import "./ItemDetailStyle.css";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try{
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);
  
      const data = { id: dataDb.id, ...dataDb.data() };
  
      setProduct(data);
    }catch (error){
      return <Error/>
    }

  }

  useEffect(() => {
    getProduct();
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
