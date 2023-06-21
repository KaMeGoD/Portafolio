import '../style/Bienvenido.css';
import 'hover.css'
import logo from "../assets/img/logo.png";
import saludo from '../assets/img/hola amigo.png';
import bloques from '../assets/img/bloques.png'

// 

interface PropsBienvenido{
  refBienvenidos : React.LegacyRef<HTMLDivElement>;
  onClick : (e:React.MouseEvent<HTMLButtonElement>) => void
}

export const Bienvenido: React.FC<PropsBienvenido>  = ({refBienvenidos, onClick}) => {

  return(
    <>
    <div className='bienvenido' ref={refBienvenidos}>
      <div className='bienvenido-top'>
        <img className='logo' src={logo} alt="logo" />
        <h2 className='profesion'>Desarrollador Web</h2>
      </div>
      <div className='capa-main'>
        <div className='izquierda'>
          <h1 className='nombre'>Juan <br />García</h1>
          <button onClick={onClick} className='btn-start hvr-pulse-shrink'>Empecemos</button>
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