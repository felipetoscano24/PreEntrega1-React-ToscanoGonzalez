import { useState } from "react";

import "./ItemCount.css"

const ItemCount = ({ handleAddToCart, stock }) => {

    const [ count, setCount ] = useState(1);

    const handleAdd = () => {
        if(count < stock)
        setCount(count + 1)
    };

    const handleSubtract = () => {
        if(count > 1)
        setCount(count - 1);
    };
  return (
    <div className="carrito-añadir">
        <div className="cantidad-productos">
            <button className="boton-contar" onClick={handleSubtract}>-</button>
            <p>{count}</p>
            <button className="boton-contar" onClick={handleAdd}>+</button>
        </div>
        <div>
            <button className="boton-agregar" onClick={ ()=> handleAddToCart(count)} >Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount