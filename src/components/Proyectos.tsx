import '../style/proyectos.css';
import { Proyecto } from './Proyecto';
import estudiando from '../assets/img/studying.png'
import { useState } from 'react';

export const Proyectos = () =>{
  const [efecto, setEfecto] = useState(false);

  const handleMouseOver = () =>{
    setEfecto(true);
  }
  const handleMouseOut = () =>{
    setEfecto(false);
  }

  return(
    <>
      <div className="Proyectos">
        <div className="izquierda">
          <h3 className="titulo-proyectos">Mis Proyectos<br/>Web</h3>
          <img src={estudiando} alt="estudiando" className="estudiando" />
        </div>
        <div className="derecha">
          <Proyecto claseEfecto={efecto ? 'proyecto-wrap-true': 'proyecto-wrap-false'} MouseOut={handleMouseOut} MouseOver={handleMouseOver} titulo='Calculadora de Propinas' git='https://github.com/KaMeGoD/Calculadora-de-Propina.git' netlify='https://calculadora-propina-jcdev.netlify.app/' clase='calculadora'/>
          {/* <Proyecto claseEfecto={efecto ? 'proyecto-wrap-true': 'proyecto-wrap-false'} MouseOut={handleMouseOut} MouseOver={handleMouseOver} titulo='Calculadora de Propinas' git='#' netlify='#' clase='ala2'/>
          <Proyecto claseEfecto={efecto ? 'proyecto-wrap-true': 'proyecto-wrap-false'} MouseOut={handleMouseOut} MouseOver={handleMouseOver} titulo='Calculadora de Propinas' git='#' netlify='#' clase='ala'/> */}
        </div>
      </div>

    </>
  )
}