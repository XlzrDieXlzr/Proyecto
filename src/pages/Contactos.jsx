import Swal from 'sweetalert2'

const Contactos = () => {

  function alertBorrar() {
    Swal.fire({
      
      title: "Borrado!",
      
      icon: "warning",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <>
      <form className="pt-5">
        <div className="mb-3 container">
          <label htmlFor="nombre" className="form-label">Nombres</label>
          <input type="text" className="form-control" id="nombre" placeholder="Ingresa tus nombres" />
        </div>
        <div className="mb-3 container">
          <label htmlFor="nombre" className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="apellido" placeholder="Ingresa tus apellidos" />
        </div>
        <div className="mb-3 container">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
        </div>
        <div className="mb-3 container">
          <label htmlFor="nombre" className="form-label">Edad</label>
          <input type="number" className="form-control" id="edad" placeholder="Ingresa tu edad" />
        </div>
        <div className="mb-3 container">
          <label htmlFor="nombre" className="form-label">Fecha</label>
          <input type="date" className="form-control" id="fecha" placeholder="Ingresa la fecha" />
        </div>
        <div className="mb-3 container">
          <label htmlFor="mensaje" className="form-label">Comentario</label>
          <textarea className="form-control" id="mensaje" rows={5} placeholder="Ingresa tu comentario" defaultValue={""} />
        </div>
        <div className="text-end container">
          <button type="reset" className="btn btn-outline-light px-3 me-3" onClick={alertBorrar}>Borrar</button>
          <button className="btn btn-outline-light px-3">Enviar</button>
        </div>
      </form>

    </>
  )
}

export default Contactos