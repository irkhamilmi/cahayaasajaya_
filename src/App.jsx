import { Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
// import Footer from "./components/footer/Footer"

import Home from "./pages/home"
import Produk from "./pages/produk"
import Profil from "./pages/profil"
import Lokasi from "./pages/lokasi"
import Artikel from "./pages/artikel"

function App() {
  return (
  <div>
    <Header />

    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/produk" Component={Produk}/>
      <Route path="/profil" Component={Profil}/>
      <Route path="/lokasi" Component={Lokasi}/>
      <Route path="/artikel" Component={Artikel}/>
    </Routes>
 
  </div>
  )
}

export default App;
