import Hero1 from '../assets/hero1.jpg'
import Hero2 from '../assets/hero2.jpg'
import Hero3 from '../assets/hero3.jpg'
const Hero = () => {
  return (
    <>
    <h1 className='text-center py-5'>Proyecto Final de React</h1>
    <div className="container col-xxl-8 px-4">
  <div className="row flex-lg-row-reverse align-items-center g-5 pb-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={Hero1} className="d-block mx-lg-auto img-fluid img-thumbnail" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <p className=""><span className="h4">Astro es un popular generador de sitios estáticos,</span> que permite crear sitios web ricos en contenido que se ejecutan de manera rápida y fluida. Es conocido por su naturaleza ligera, su estructura intuitiva y su curva de aprendizaje suave, lo que lo hace atractivo para desarrolladores de todos los niveles de experiencia. Aunque tiene un tamaño pequeño, Astro cuenta con herramientas poderosas que aumentan drásticamente la flexibilidad de tus sitios, ahorrándote horas en la gestión de contenido y temas.<br/>
<br/>Astro es un framework potente que admite tanto la generación de sitios estáticos (SSG) como el renderizado del lado del servidor (SSR).</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <a type="button" className="btn btn-light btn-md" href='https://astro.build/' target='_blank'>Ir a la web oficial de astro</a>
      </div>
    </div>
  </div>
</div>
<hr></hr>
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row- align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={Hero2} className="d-block mx-lg-auto img-fluid img-thumbnail" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <p className=""><span className="h4">DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON</span> para el desarrollo, pruebas y prototipos. Con DummyJSON, puedes obtener rápidamente datos realistas para tus proyectos de front-end sin tener que configurar un servidor complicado. Es perfecto para el desarrollo de front-end, la enseñanza, las pruebas y la creación de prototipos. Puedes explorar la documentación detallada en DummyJSON/Docs para obtener ejemplos rápidos.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <a type="button" className="btn btn-light btn-md" href='https://dummyjson.com/' target='_blank'>Ir a la web oficial de DummyJSON</a>
      </div>
    </div>
  </div>
</div>
<hr></hr>
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={Hero3} className="d-block mx-lg-auto img-fluid img-thumbnail" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <p className=""><span className="h4">Astro es un popular generador de sitios estáticos,</span> que permite crear sitios web ricos en contenido que se ejecutan de manera rápida y fluida. Es conocido por su naturaleza ligera, su estructura intuitiva y su curva de aprendizaje suave, lo que lo hace atractivo para desarrolladores de todos los niveles de experiencia. Aunque tiene un tamaño pequeño, Astro cuenta con herramientas poderosas que aumentan drásticamente la flexibilidad de tus sitios, ahorrándote horas en la gestión de contenido y temas.<br/>
<br/>Astro es un framework potente que admite tanto la generación de sitios estáticos (SSG) como el renderizado del lado del servidor (SSR).</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <a type="button" className="btn btn-light btn-md" href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' target='_blank'>Ir a la web oficial de Bootstrap</a>
      </div>
    </div>
  </div>
</div>
<hr></hr>
    </>
  )
}

export default Hero