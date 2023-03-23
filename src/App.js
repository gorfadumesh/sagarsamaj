import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./Pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/path2" element={<Banner />} />
          <Route exact path="/path3" element={<Banner />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
