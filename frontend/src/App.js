import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registrarse from "./pages/Registrarse";
import IniciarSesion from "./pages/IniciarSesion";
import Cursos from "./pages/Cursos";
import Curso from "./pages/Curso";
import "./index.css";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import usuarioAction from "./redux/actions/usuarioAction";
import Favoritos from "./pages/Favoritos";
import Configuracion from "./pages/Configuracion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App({ roles, obtenerRoles }) {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar className="fixed top-0 z-50" />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/:id" element={<Curso />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
        <Footer className="fixed top-0 z-50" />
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    roles: state.reducer.roles,
  };
};

const mapDispatchToProps = {
  obtenerRoles: usuarioAction.obtenerRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
