import '../style/card.css';
import laptop from '../assets/img/laptop wave.png';
import fotografia from '../assets/img/taking a photo.png';
import videojuego from '../assets/img/gaming.png';



export const Card = () => {
  return (
    <>
      <div className="cards">
        <div className='card'>
          <img src={laptop} alt="laptop" className='img-card notebook' />
          <div className='card-texto'>
          <h3 className='titulo'>Desarrollo Web</h3>
          <p className='texto'>Manejo de distintas Tecnologias <br /> Web tanto React, Typescript, Javascript</p>
        </div>
          </div>
        <div className='card'>
          <img src={fotografia} alt="fotografia" className='img-card fotografia' />
          <div className='card-texto'>
            <h3 className='titulo'>Fotografia</h3>
            <p className='texto'>Descubrir distintos paisajes <br /> y capturar esos momentos unicos que se viven</p>
          </div>
        </div>
        <div className='card'>
          <img src={videojuego} alt="video juego" className='img-card videojuego' />
          <div className='card-texto'>
          <h3 className='titulo'>VideoJuegos</h3>
          <p className='texto'>La vida es mas entretenida jugando, desde pequeño vivir aventuras y explorar distintos mundos a llenado mi vida.</p>
        </div>
          </div>
      </div>
    </>
  )
}