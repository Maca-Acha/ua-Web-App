
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registrarse from "./pages/Registrarse";
import IniciarSesion from "./pages/IniciarSesion";
import EditarUsuario from "./pages/EditarUsuario";
import Cursos from "./pages/Cursos";
import Curso from "./pages/Curso";
import "./index.css";
import {connect} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import usuarioAction from "./redux/actions/usuarioAction";
// import { useEffect } from "react";


function App({roles,obtenerRoles}) {
  // console.log(roles)




  // useEffect(() => {
  //   obtenerRoles();
  // }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // ,[])
 
  return (
    <>
      <BrowserRouter>
        <Navbar className="fixed top-0 z-50" />
                   
        <Routes>

                     {/* rutas protegidas probando los roles de alumno y tutor */}    
            <Route path="/" element={<Inicio />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/editarusuario" element={<EditarUsuario />} />
            <Route path="/iniciarsesion" element={<IniciarSesion />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/curso" element={<Curso />} />
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
}

const mapDispatchToProps = {
  obtenerRoles: usuarioAction.obtenerRoles,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
