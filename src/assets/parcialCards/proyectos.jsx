import React from 'react';
import './Proyectos.css';

const Proyectos = () => {
  return (
    <div className="proyectos">
      <h1>Proyectos</h1>
    
      <div className="container">
        <div className="column">
          <div className="item">
            <img src="https://miro.medium.com/v2/resize:fit:489/1*ufHGTUsqjCPIVOSRrwCxlA.png" alt="Imagen 1" className="image" />
            <a href="https://docs.google.com/document/d/1hCrtUOtPey_4ar1AGmx7N8QveDi8kztGejFdRaTfj4U/edit?usp=sharing">Tarea 1 - GitIgnore</a>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src="https://datademia.es/wp-content/uploads/2019/06/hello_world.png" alt="Imagen 2" className="image" />
            <a href="https://github.com/Mpaulita/primerRepositorio.git">Tarea 2 - Primera pagina web</a>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src="https://static.wixstatic.com/media/1ac4ce_85b32235959b4cfabdc86998a199df11~mv2.jpg/v1/fill/w_924,h_577,al_c,q_85,enc_auto/1ac4ce_85b32235959b4cfabdc86998a199df11~mv2.jpg" alt="Imagen 3" className="image" />
            <a href="https://github.com/edwinmgallego/clase-practica-css/tree/Mpaulita">Tarea 3 - Formulario</a>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="column2">
          <div className="item">
            <img src="https://aprendiendomatematicas.com/wp-content/uploads/2023/06/signos-mas-menos-igual.jpg" alt="Imagen 4" className="image" />
            <a href="https://github.com/Mpaulita/java2.git">Tarea 4 - Numeros iguales y mayores</a>
          </div>
        </div>
        <div className="column2">
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoqmEC3hmAuYOLEFCitbByZz66sQxr4Gaiw&s" alt="Imagen 5" className="image" />
            <a href="https://github.com/Mpaulita/componentes-react.git">Tarea 5 - Cards (Aprendiendo React)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
