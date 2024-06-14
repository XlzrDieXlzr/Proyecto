import { useState } from "react";
const Card = ({producto}) => {
  return (
    <>
    <div className="col-md-4 col-lg-3 col-xl-2 mb-4" >
            <div className="card h-100">
            <div className="card-header p-0">
                <img src={producto.thumbnail} alt={producto.title}  className="img-fluid" />
            </div>
            <div className="card-body text-center">
                <h5>{producto.title}</h5>
                <p className="text-success">{producto.brand}</p>
                <h5 className="text-danger">{producto.price.toFixed(0).toLocaleString()}$</h5>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target={`#${producto.id}`}>Detalle</button>
            </div>
        </div>
    </div>

    <div class="modal fade" id={producto.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{producto.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="row">
          <div className="col-4">
              <img src={producto.thumbnail} alt={producto.title} className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <h4>{producto.title}</h4>
            <p>{producto.description}</p>
            <p className="h5"><span className="text-danger">Categoria: </span>{producto.category}</p>
            <p className="h5"><span className="text-warning">Valoracion: </span>{producto.rating}</p>
            <p className="h5"><span className="text-success">Precio: </span>{producto.price}$</p>
            <p className="h5"><span className="text-info">Existencias: </span>{producto.stock}</p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a type="button" className="btn btn-danger btn-md px-5" data-bs-dismiss="modal">Cerrar</a>
        <a type="button" className="btn btn-success btn-md px-5">Comprar</a>
      </div>
    </div>
  </div>
</div>
</>  
  )
}

export default Card