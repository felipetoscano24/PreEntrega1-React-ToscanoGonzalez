import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FormularioCheckout from "./FormularioCheckout";
import validateForm from "../../helpers/validationYup";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";

import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      user: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
    };
    const response = await validateForm(dataForm);
    if(response.status === "success"){
      uploadOrder(order);
    }else{
      toast(response.error);
  }

  };

  const uploadOrder = async (order) => {
    const ordersRef = collection(db, "orders");
    const response = await addDoc(ordersRef, order);

    setIdOrder(response.id);
    updateStock();
    clearCart();
  };

  return (
    <div>
      {idOrder ? (
        <div className="final-orden">
          <h2>¡Muchas gracias por su compra!</h2>
          <p>Tenga a mano el ID de su compra para el recibo del paquete. ID: {idOrder}</p>
          <Link className="boton-inicio" to="/" >Volver al Inicio</Link>
        </div>
      ) : (
        <FormularioCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
export default Checkout;