import { useState, useEffect } from "react";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailStyle.css";

const ItemDetailContainer = () => {

  const { idProduct } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        const newProduct = respuesta.find(
          (product) => product.id === idProduct
        );
        setProduct(newProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;

