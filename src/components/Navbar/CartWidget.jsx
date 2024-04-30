import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  
  const { totalQuantity } = useContext(CartContext)
  
  return (
    <Link to="/cart" className="carrito">
      <img src="/img/carrito.png" />
      <span className="numerito">{ totalQuantity() === 0 ? "" : totalQuantity() }</span>
    </Link>
  );
};

export default CartWidget