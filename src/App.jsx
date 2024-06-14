import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contactos from "./pages/Contactos"
import Tienda from "./pages/Tienda"
import Movil from "./pages/Movil"
import Laptop from "./pages/Laptop"
import Categorias from "./pages/Categorias"
import Busquedas from "./pages/Busquedas"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/inicio" element={<Inicio/>}/>
      <Route path="/tienda" element={<Tienda/>}/>
      <Route path="/movil" element={<Movil/>}/>
      <Route path="/laptop" element={<Laptop/>}/>
      <Route path="/categorias/:id" element={<Categorias/>}/>
      <Route path="/contactos" element={<Contactos/>}/>
      <Route path="/busquedas" element={<Busquedas/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App