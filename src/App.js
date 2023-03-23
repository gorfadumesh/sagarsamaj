import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      <Footer />

      </Router>
    </>
  );
}

export default App;
