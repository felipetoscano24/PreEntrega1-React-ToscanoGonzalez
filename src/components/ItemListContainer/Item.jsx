import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div key={product.id} className="tarjeta">
      <div className="imagen-tarjeta">
        <img className="imagen-producto" src={product.imagen} alt={product.nombre} />
      </div>
      <div>
        <h2>{product.nombre}</h2>
        <p>Disponibles: {product.stock}</p>
        <Link to={"/detail/"+product.id}>Ver más</Link>
      </div>
    </div>
  );
};

export default Item