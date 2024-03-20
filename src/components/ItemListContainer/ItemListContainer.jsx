import "./list-container.css"

const ItemListContainer = ({ saludo, pregunta}) => {
  return (
    <div>
        <h2>{saludo}</h2>
        <p>{pregunta}</p>
    </div>
  )
}

export default ItemListContainer