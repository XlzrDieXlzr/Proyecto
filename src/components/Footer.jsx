import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="container-fluid">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3" data-bs-theme="light">
      <li className="nav-item"><Link to="/inicio" href="#" className="nav-link px-2 text-dark">Inicio</Link></li>
      <li className="nav-item"><Link to="/movil" href="#" className="nav-link px-2 text-dark">Movil</Link></li>
      <li className="nav-item"><Link to="/laptop" href="#" className="nav-link px-2 text-dark">Laptop</Link></li>
      <li className="nav-item"><Link to="tienda" href="#" className="nav-link px-2 text-dark">Tienda</Link></li>
      <li className="nav-item"><Link to="contactos" href="#" className="nav-link px-2 text-dark">Contacto</Link></li>
    </ul>
    <p className="text-center text-dark">© 2024 AR SISTEMA</p>
  </footer>
</div>
    </>
  )
}

export default Footer