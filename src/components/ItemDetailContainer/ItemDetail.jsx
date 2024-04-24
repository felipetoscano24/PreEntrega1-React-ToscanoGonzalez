import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

  const { cart, addToCart }= useContext(CartContext)

  console.log(cart)

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
        <Link to="/" className="boton-volver">Volver</Link>
        <ItemCount handleAddToCart={handleAddToCart} stock={product.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
