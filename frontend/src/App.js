import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Navbar className="fixed"/>
      <Hero />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
