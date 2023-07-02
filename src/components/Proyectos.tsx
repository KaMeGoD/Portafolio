import '../style/proyectos.css';
import { Proyecto } from './Proyecto';
import estudiando from '../assets/img/studying.png'
import { useState } from 'react';

export const Proyectos = () =>{
  const [efecto1, setEfecto1] = useState(false);
  const [efecto2, setEfecto2] = useState(false);
  const [efecto3, setEfecto3] = useState(false);

  const handleMouseOver1 = () =>{
    setEfecto1(true);
  }
  const handleMouseOut1 = () =>{
    setEfecto1(false);
  }
  const handleMouseOver2 = () =>{
    setEfecto2(true);
  }
  const handleMouseOut2 = () =>{
    setEfecto2(false);
  }
  const handleMouseOver3 = () =>{
    setEfecto2(true);
  }
  const handleMouseOut3 = () =>{
    setEfecto2(false);
  }

  return(
    <>
      <div className="Proyectos">
        <div className="izquierda">
          <h3 className="titulo-proyectos">Mis Proyectos<br/>Web</h3>
          <img src={estudiando} alt="estudiando" className="estudiando" />
        </div>
        <div className="derecha">
          <Proyecto claseEfecto={efecto1 ? 'proyecto-wrap-true': 'proyecto-wrap-false'} MouseOut={handleMouseOut1} MouseOver={handleMouseOver1} titulo='Calculadora de Propinas' git='https://github.com/KaMeGoD/Calculadora-de-Propina.git' netlify='https://calculadora-propina-jcdev.netlify.app/' clase='calculadora'/>
          <Proyecto claseEfecto={efecto2 ? 'proyecto-wrap-true': 'proyecto-wrap-false'} MouseOut={handleMouseOut2} MouseOver={handleMouseOver2} titulo='Piedra Papel y Tijeras' git='https://github.com/KaMeGoD/Piedra_Papel_o_Tijeras.git' netlify='https://piedrapapeltijeras-jcdev.netlify.app' clase='juegoPPT'/>
          <Proyecto claseEfecto={efecto3 ? 'proyecto-wrap-true': 'proyecto-wrap-false'} MouseOut={handleMouseOut3} MouseOver={handleMouseOver3} titulo='Calculadora de Propinas' git='https://github.com/KaMeGoD/Api-Paises.git' netlify='https://apipaices-jcdev.netlify.app/' clase='ala'/>
        </div>
      </div>

    </>
  )
}