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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(45,212,191,0.08),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.08),transparent_30%),linear-gradient(to_bottom,#06080f,#070d1a_45%,#06080f)]" />
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
