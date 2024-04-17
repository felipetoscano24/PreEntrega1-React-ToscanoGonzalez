import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
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
        <Link to="/" className="boton-volver">Volver</Link>
      </div>
    </div>
  );
};

export default ItemDetail;
