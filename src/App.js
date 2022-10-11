import "./App.css";
import Hero from "./Components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Hero />} />
          <Route path={"/Products"} element={<Products />} />
          <Route path={"/About"} element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
