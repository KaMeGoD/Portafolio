import '../style/Bienvenido.css';
import 'hover.css'
import logo from "../assets/img/logo.png";
import saludo from '../assets/img/hola amigo.png';
import bloques from '../assets/img/bloques.png'


export const Bienvenido  = () => {
  return(
    <>
    <div className='capa1'>
      <div className='capa-top'>
        <img className='logo' src={logo} alt="logo" />
        <h2 className='profesion'>Desarrollador Web</h2>
      </div>
      <div className='capa-main'>
        <div className='izquierda'>
          <h1 className='nombre'>Juan <br />García</h1>
          <button className='btn-start hvr-pulse-shrink'>Empezemos</button>
        </div>
        <div className='derecha'>
          <img className='saludo' src={saludo} alt="saludos" />
          <img className='bloque' src={bloques} alt="bloques" />
        </div>
      </div>
    </div>
    </>
  )
}