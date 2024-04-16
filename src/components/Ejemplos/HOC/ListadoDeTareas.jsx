import uniqid from 'uniqid';
import hocManejoDeLista from "./hocManejoDeLista.jsx";

const ListadoDeTareas = ({ tareas, añadirTarea, eliminarTarea}) => {
  
  const clickañadirTarea = () =>{
    const nuevaTarea = {
      id: uniqid(),
      nombre: "Tarea " + uniqid(),
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

const ListdoTareasConHoc = hocManejoDeLista(ListadoDeTareas)

export default ListdoTareasConHoc;