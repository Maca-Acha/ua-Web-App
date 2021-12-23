import Inicio from "./pages/Inicio"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registrarse from "./pages/Registrarse.js"
import {BrowserRouter, Routes, Route } from "react-router-dom" 

function App() {
  return (
    <BrowserRouter>
      <Navbar className="fixed"/>
      <Routes>
        <Route path= "/" element= {<Inicio/>} />
        <Route path= "/registrarse" element= {<Registrarse/>} />
        <Route path= "/" element= {<Inicio/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
