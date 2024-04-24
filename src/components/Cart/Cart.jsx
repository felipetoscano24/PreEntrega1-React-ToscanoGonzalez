import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, totalPrice } =
    useContext(CartContext);

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
        <div>
          <p className="precio-total">Precio Total: {totalPrice()}</p>
          <button className="boton-carrito" onSubmit={clearCart}>Comprar</button>
        </div>
        <button className="boton-carrito" onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
