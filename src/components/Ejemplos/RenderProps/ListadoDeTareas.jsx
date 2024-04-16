const ListadoDeTareas = ({ tareas, añadirTarea, eliminarTarea}) => {
  
    const clickañadirTarea = () =>{
      const nuevaTarea = {
        id: 55,
        nombre: "Tarea 55 render prop"
      }
      añadirTarea(nuevaTarea);
    }
    
    return (
      <div>
          <button onClick={clickañadirTarea}>Agregar Tarea</button>
          <br />
          <br />
          {tareas.map((tarea) => {
            return (
              <div key={tarea.id}>
                <p>{tarea.nombre}</p>
                <button onClick={ () => eliminarTarea(tarea.id)}>eliminat Tarea</button>
              </div>
            )
          })}
      </div>
    )
  }

export default ListadoDeTareas
