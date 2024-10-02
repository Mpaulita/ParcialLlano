import React from 'react'
import './Portafolio.css'
const Portafolio = () => {
  return (
    <div className="container">
    <div className="column left-column">
      <h1 className="title">Maria Paula Llano</h1>
      <h2 className="estadoProfesional">Estudiante universitario</h2>
      <div className="contImagen">
        <img
          id="imagen"
          src="https://media.tenor.com/ITL556MnC1wAAAAM/coquette-hampter.gif"
          alt="foto hamster"
        />
      </div>
      
      <div className="container1">
        <div className="column left-column1">
          <h1>Idiomas</h1>
          <p className="titulos">Español</p>
          <p>Nativo</p>
          <p className="titulos">Ingles</p>
          <p>Nivel certificado: B2</p>
        </div>
        <div className="column right-column1">
          <h1>Intereses</h1>
          <p className="titulos">Vehiculo propio</p>
          <p>Licencia B1</p>
        </div>
      </div>

      <div className="contacto">
      <h1 className="title">Contacto</h1>
      <p className="contacto">maria.llano@uao.edu.co</p>
      </div>
      
     
      
      
    </div>
    <div className="column right-column">
      <h1>Sobre Mí</h1>
      <p className="descripcion">
        Soy una persona creativa y autónoma con disposición para aprender.
        Mi enfoque proactivo se refleja en mi constante autoexigencia, me
        caracterizo por mi facilidad de adaptabilidad ante diferentes
        entornos siempre en busca de superar expectativas y alcanzar los
        mejores resultados en cada tarea que emprendo. Mi capacidad para
        trabajar en equipo se destaca gracias a mi habilidad para escuchar y
        comunicarme de manera efectiva.
      </p>
      <h1>Educación</h1>
      <p className="titulos">
        Bachiller, Colegio Franciscano Fray Damián González
      </p>
      <p>Promoción 2021</p>
      <p className="titulos">Learn English, live in english</p>
      <p>2022</p>
      <p className="titulos">
        Pregrado en Ingeniería Multimedia, Universidad Autónoma de Occidente
      </p>
      <p>En curso</p>

      <h1>Habilidades</h1>
      <p className="titulos">Duras</p>
      <ul>
        <li>Modelado 3D</li>
        <li>Programación</li>
        <li>Experiencia en el manejo de herramientas de Office y Adobe</li>
      </ul>
      <p className="titulos">Blandas</p>
      <ul>
        <li>Creatividad</li>
        <li>Trabajo en equipo y colaboración efectiva</li>
        <li>Gestión eficiente del tiempo y priorización de tareas</li>
        <li>
          Rápida asimilación de información para adquirir nuevas habilidades
        </li>
      </ul>

      

      </div>
  </div>
  )
}

export default Portafolio