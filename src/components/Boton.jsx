import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/category-list';
const Boton = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          setDatos(data);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
  return (

    <>
    <div className="d-flex flex-wrap justify-content-center">
    {datos && datos.map((item, index)=>(
        <div>
        <Link to={`/categorias/${item}`} key={index} className="btn btn-light text-center m-2" href="">{item}</Link>
        </div>
    ))}
    </div>
    </>
  )
}

export default Boton