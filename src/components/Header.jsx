import Logo from '../assets/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import FiltroCategorias from './FiltroCategorias';
import { useState } from 'react';
import { CartFill } from 'react-bootstrap-icons';
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cart, vaciar, comprar } = useContext(carritoContext)
    const total = cart.reduce((acc, item) => acc + item.cantidad, 0);

    const totalCantidad = cart.reduce((total, item) => total + item.cantidad, 0);
    const totalPrecio = cart.reduce((total, item) => total + item.cantidad * item.price, 0);

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
          <Link to="/contactos" className="nav-link active" href="#">Contacto</Link>
        </li>
      </ul>
      <button className='btn btn-primary me-3'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">  <CartFill  size={25} /> <span className="bagbe bg-secondary">{cart.length} / {total}</span></button>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-info ms-2" type="submit">Buscar</button>
      </form>
        <button className="btn btn-warning ms-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
    </div>
  </div>
</nav>

<div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Ver Carrito</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
              
                        {cart.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-header p-0">
                                    <img src={item.thumbnail} alt={item.title}  className="img-fluid"  />
                                   
                                </div>
                                <div className="card-body text-center">
                                    <h5>{item.title}</h5>
                                    <p className="text-success">{item.brand}</p>
                                    <h5 className="text-danger">Precio: {item.price.toFixed(0).toLocaleString()}$</h5>
                                    <h5 className="text-danger">Cantidad: {item.cantidad}</h5>
                                    <h5 className="text-danger">Cantidad: {(item.cantidad*item.price).toFixed(0).toLocaleString()}$</h5>
                                </div>
                            </div>
                        ))}
                        {cart.length > 0 ? (
                            <>
                                <div className="card p-3">
                                <h5>Total Productos: {totalCantidad}</h5>
                                <h5>Total A Pagar: {totalPrecio}$</h5>
                                </div>
                                <div className="card p-3 my-3">
                                <button className="btn btn-danger btn-sm mx-1 mb-2" onClick={() => vaciar()}>
                                    Vaciar Carrito
                                </button>
                                <button className="btn btn-success btn-sm mx-1" onClick={() => comprar()}>
                                    Comprar
                                </button>
                                </div>
                            </>
                            ) : (
                            <div className="card p-3 my-3">
                                <h5>Carrito Vacío</h5>
                            </div>
                            )}
                        </div>
                    </div>

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
        <button type="button" class="btn btn-success px-3">Iniciar Sesion</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Header