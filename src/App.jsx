import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Proffile from "./pages/proffile";
import Location from "./pages/location";
import Products from "./pages/products";
import Article from "./pages/article";

import "/src/assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Proffile />} />
          <Route path="*" element={<Location />} />
          <Route path="*" element={<Products />} />
          <Route path="*" element={<Article />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
