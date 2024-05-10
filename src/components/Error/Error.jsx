import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>Ocurrió un error</h2>
        <Link className="boton-carrito" to="/">VOLVER AL INICIO</Link>
    </div>
  )
}

export default Error