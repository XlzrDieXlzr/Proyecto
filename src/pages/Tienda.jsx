import { useEffect, useState } from "react";
import Card from "../components/Card";
import Boton from "../components/Boton";
const API='https://dummyjson.com/products?limit=15&skip=';
const Tienda = () => {
    const [datos, setDatos] = useState([])
    const [skip, setSkip] = useState(0);
    const [total , setTotal] = useState(0);
  const getDatos = async () =>{
    const URI=API+skip
      try {
        const response = await fetch(URI);
        const data = await response.json();
        setDatos(data.products);
        setTotal(data.total)
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[skip]);
  return (
    <>
    <div className="container">
        <Boton/>
        <h1 className="text-center py-3">Todos los productos ({datos.length})</h1>
        <div className="row">
        {datos && datos.map((productos) => (
            <Card key={productos.id} producto={productos}/>
        ))}
        </div>
        <div className="d-flex justify-content-evenly align-content-center  bg-warning mb-3 p-2 alert alert-dark" data-bs-theme="dark">
        <p className="lead m-0 text-light">Pagina {Math.floor(skip/10) + 1} de {Math.ceil(total/10)}</p>
        <nav className="">
  <ul className="pagination m-0">
    <li className="page-item">
      <a className="page-link" href="#"
        onClick={() => {
          if (skip >= 15) {
            setSkip(skip - 15);
          }
        }}
      >
        &lt;&lt;
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        {Math.floor(skip / 15) + 1}
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#"
        onClick={() => {
          if (skip + 15 < total) {
            setSkip(skip + 15);
          }
        }}
      >
        &gt;&gt;
      </a>
    </li>
  </ul>
</nav>
        </div>
    </div>
    </>
  )
}

export default Tienda