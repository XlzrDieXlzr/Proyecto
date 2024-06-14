import Logo from '../assets/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import FiltroCategorias from './FiltroCategorias';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/busquedas', {
        state: inputValue,
      });	
      
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to="/inicio" className="navbar-brand" href="#"><img src={Logo} alt="Logo" width={100} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/movil" className="nav-link active" href="#">Movil</Link>
        </li>
        <li className="nav-item">
          <Link to="/laptop" className="nav-link active" href="#">Laptop</Link>
        </li>
        <li className="nav-item">
          <Link to="/tienda" className="nav-link active" href="#">Tienda</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <FiltroCategorias/>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/contactos" className="nav-link active" href="#">Contactos</Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success ms-2" type="submit">Search</button>
      </form>
        <button className="btn btn-outline-warning ms-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
    </div>
  </div>
</nav>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Inicio de Sesion</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span className='fs-5'>Direccion de correo</span>
        <input type="email" class="form-control my-3" placeholder='Ingresa tu correo'></input>
        <span className="fs-5">Contraseña</span>
        <input type="password" class="form-control mt-3" placeholder='Contraseña'></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger px-3" data-bs-dismiss="modal">Salir</button>
        <button type="button" class="btn btn-warning px-3 text-light">Iniciar Sesion</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Header