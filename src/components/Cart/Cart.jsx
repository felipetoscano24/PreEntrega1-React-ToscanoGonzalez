import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="carrito-vacio">
      <h2>El carrito está vacío</h2>
      <Link className="boton-carrito" to="/">IR A COMPRAR</Link>
    </div>
  }

  return (
    <div>
      {cart.map((product) => (
        <div className="tarjeta-carrito" key={product.id}>
          <img
            className="imagen-en-carrito"
            src={product.imagen}
            alt={product.nombre}
          />
          <h1>{product.nombre}</h1>
          <div className="info-carrito">
            <h2>CANTIDAD</h2>
            <p>{product.quantity}</p>
          </div>
          <div className="info-carrito">
            <h2>PRECIO</h2>
            <p>{product.precio}</p>
          </div>
          <img
            className="basura"
            src="/img/basura.png"
            alt=""
            onClick={() => deleteProductById(product.id)}
          ></img>
        </div>
      ))}
      <div className="finalizar-compra">
        <button className="boton-carrito-out" onClick={clearCart}>VACIAR CARRITO</button>
        <div>
          <p className="precio-total">Precio Total: {totalPrice()}</p>
          <Link to="/checkout" className="boton-carrito" onClick={clearCart}>COMPRAR</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
