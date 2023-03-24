import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Committee from "./Pages/Committee";
import Donors from "./Pages/Donors";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import Directory from "./Pages/Directory";
import Matrimonial from "./Pages/Matrimonial";
import Gallery from "./Pages/Gallery";
import Download from "./Pages/Download";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/committee" element={<Committee />} />
          <Route exact path="/donors" element={<Donors />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/directory" element={<Directory />} />
          <Route exact path="/matrimonial" element={<Matrimonial />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/download" element={<Download />} />
        </Routes>
      <Footer />

      </Router>
    </>
  );
}

export default App;
