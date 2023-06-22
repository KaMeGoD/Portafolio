import HTML5 from '../assets/img/carousel/HTML5.png'
import CSS3 from '../assets/img/carousel/CSS3.png'
import JavaScript from '../assets/img/carousel/JavaScript.png'
import TypeScript from '../assets/img/carousel/TypeScript.png'
import React from '../assets/img/carousel/React.png'
import GitHub from '../assets/img/carousel/GitHub.png'
import Yarn from '../assets/img/carousel/Yarn.png'
import NPM from '../assets/img/carousel/NPM.png'
import Node from '../assets/img/carousel/NodeJS.png'
import '../style/Tecnologias.css';
import Glide from '@glidejs/glide'
import { useEffect } from "react";


export const Tecnologias = () => {
  
  useEffect(()=>{
    const glide = new Glide(".glide", {
      perView: 3,
      startAt: 3,
      type: "carousel",
      focusAt: 'center',
      autoplay: 7000,
      hoverpause: true,
      animationDuration: 3000
    });
    glide.mount();
    return ()=>{
      glide.destroy();
    }
  }, []);
  
  return (
    <>
      <div className="tecnologias">
        <h3 className='tecnologias-titulo'>Tecnologías</h3>
        <div className='glide '>
          <div className='glide__track' data-glide-el="track">
            <ul className='glide__slides'>
              <li className='glide_slide'> <div className="cuadro"><img src={HTML5} alt="HTML5"/></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={CSS3} alt="CSS" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={JavaScript} alt="JavaScript" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={TypeScript} alt="TypeScript" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={React} alt="React" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={GitHub} alt="GitHub" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={Yarn} alt="Yarn" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={NPM} alt="NPM" /></div></li>
              <li className='glide_slide'><div className='cuadro'><img src={Node} alt="NPM" /></div></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}