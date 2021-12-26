import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Registrarse from "./pages/Registrarse";
import IniciarSesion from "./pages/IniciarSesion";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar className="fixed top-0 z-50" />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
        </Routes>

        <Footer className="fixed top-0 z-50" />
      </BrowserRouter>
    </>
  );
}

export default App;
