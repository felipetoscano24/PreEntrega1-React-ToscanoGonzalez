import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Banner from "./components/Banner/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              titulo="BIENVENIDO A CANDY KINGDOM"
              saludo="Bienvenidos al Mundo del Dulce!"
              pregunta="¿Qué dulce te tienta más"
            />
          }
        />
        <Route
          path="/categoria/:idCategory"
          element={
            <ItemListContainer
            pregunta="¿Cúal te tienta más? El "
            />
          }
        />
        <Route
          path="/detail/:idProduct"
          element={
            <ItemDetailContainer
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
