import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-canvas" />
      <div className="scanlines pointer-events-none fixed inset-0 -z-10 opacity-40" />
      <Navbar />
      <main>
        <Home />
        <Experiance />
        <About />
        <PortFolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
