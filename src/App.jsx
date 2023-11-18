import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home";
import Produk from "./pages/produk";
import Profil from "./pages/profil";
import Lokasi from "./pages/lokasi";
import Artikel from "./pages/artikel";
import ArtikelKantorBaru from "./components/cards/CardKantorBaru";
import CardKantorBaru from "./components/cards/CardKantorBaru";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/produk" Component={Produk} />
        <Route path="/produk/:slug" Component={Produk} />
        <Route path="/profil" Component={Profil} />
        <Route path="/lokasi" Component={Lokasi} />
        <Route path="/artikel" Component={Artikel} />
        <Route path="/kantor-baru" Component={CardKantorBaru} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
