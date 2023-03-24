import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Committee from "./Pages/Committee";
import Donors from "./Pages/Donors";

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
        </Routes>
      <Footer />

      </Router>
    </>
  );
}

export default App;
