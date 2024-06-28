import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Detalle = ({show, handleClose, producto}) => {
  return (
    <>
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <img src={producto.thumbnail} alt={producto.title} className="img-fluid img-thumbnail" />
            </div>
            <div className='col-md-6'>
              <h3 className='text-decoration-underline'>{producto.title}</h3>
             
              <p className="lead">
                <b><span className='text-danger'>Marca</span>: </b>{producto.brand}
                <br/><b><span className='text-primary'>Categoria</span>: </b>{producto.category}
                <br/><b><span className='text-success'>Stock</span>: </b>{producto.stock}
                <br/><b><span className='text-warning'>Clasificacion</span>: </b>{producto.rating}
                </p>
              <p className='lead small'><b><span className='text-info'>Descripcion</span>: </b>{producto.description}</p> 

              <h3><b><span className='text-success'>Precio:</span> </b>{producto.price.toFixed(0).toLocaleString()}$</h3>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Detalle