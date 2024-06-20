import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
      <ParallaxProvider>
        <span className='font-link'>
          <main className="main">
            <Navbar />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/contact" element={ <Contact /> } />
            </Routes>
          </main>
        </span>
      </ParallaxProvider>
  );
};

export default App;

