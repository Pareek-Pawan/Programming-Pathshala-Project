import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline";
import ReactGA from "react-ga";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Contact2 from "./views/Contact";
import About from "./views/About";

ReactGA.initialize("G-0F5RBD5QG0");
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <Router>
      <div className="App mx-2 md:mx-18 lg:mx-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact2 />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
