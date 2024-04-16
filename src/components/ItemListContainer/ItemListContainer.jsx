import "./list-container.css";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import useCargando from "../../hooks/useCargando";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo, pregunta, titulo}) => {
  const [products, setProducts] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } = useCargando()

  const {idCategory} = useParams()

  useEffect(() => {
  mostrarCargando()

    getProducts
      .then((respuesta) => {
        if(idCategory){
          const newProducts =respuesta.filter((producto) => producto.categoria === idCategory)
          setProducts(newProducts)
        }else{
          setProducts(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => ocultarCargando());
  }, [idCategory]);

  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{saludo}</h3>
      <h4>{pregunta}{idCategory}?</h4>
      {
        cargando ? pantallaDeCarga: <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;

