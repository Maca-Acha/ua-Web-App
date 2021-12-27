import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Registrarse from "./pages/Registrarse";
import IniciarSesion from "./pages/IniciarSesion";
import Cursos from "./pages/Cursos";
import Curso from "./pages/Curso";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======


>>>>>>> 3d4d1f0dc935e9d7d72621d8ba9eff64300eb71b

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar className="fixed top-0 z-50" />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso" element={<Curso />} />
        </Routes>

        <Footer className="fixed top-0 z-50" />
      </BrowserRouter>
    </>
  );
}

export default App;
