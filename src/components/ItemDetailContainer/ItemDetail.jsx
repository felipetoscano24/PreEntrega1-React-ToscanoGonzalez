import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

  const { addToCart }= useContext(CartContext)

  const handleAddToCart = (count) => {
    const productCart = { ...product, quantity: count }
    addToCart(productCart)
  }

  return (
    <div className="detalle-tarjeta">
      <img
        className="detalle-imagen-producto"
        src={product.imagen}
        alt={product.nombre}
      />
      <div className="detalle-info">
        <h1 className="detalle-titulo">{product.nombre}</h1>
        <p className="detalle-stock">Cantidas disponibles: {product.stock}</p>
        <p className="detalle-categoria">Categoría: {product.categoria}</p>
        <h4>DESCRIPCIÓN</h4>
        <p className="detalle-descripcion">{product.descripcion}</p>
        <div className="separar">
          <ItemCount handleAddToCart={handleAddToCart} stock={product.stock} />
          <Link to="/" className="boton-volver">Volver</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
