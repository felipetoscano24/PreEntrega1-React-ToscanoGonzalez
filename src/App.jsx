import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Banner from "./components/Banner/Banner"

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Main />
      <ItemListContainer
        saludo="Bienvenidos al Mundo del Caramelo!"
        pregunta="¿Qué dulce te tienta más?"
      />
      <Footer />
    </div>
  );
}

export default App
