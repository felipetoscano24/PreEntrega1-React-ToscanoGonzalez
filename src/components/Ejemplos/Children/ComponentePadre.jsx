import ComponenteHijo from "./ComponenteHijo";

const ComponentePadre = () => {
  return (
    <div>
      <ComponenteHijo titulo = "mi caja 1">
        <h2>ComponentePadre</h2>
        <p>parrafo desde padre</p>
      </ComponenteHijo>
      <ComponenteHijo titulo = "mi caja 2">
        <button>clickeame</button>
      </ComponenteHijo>
    </div>
    
  );
};

export default ComponentePadre;
