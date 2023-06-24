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
import Glide from '@glidejs/glide';
import { useEffect } from "react";


export const Tecnologias = () => {
  
  useEffect(()=>{
    const glide = new Glide(".glide", {
      perView: 3,
      startAt: 3,
      type: "carousel",
      autoplay: 4000,
      focusAt: 2
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
        <div className='glide'>
          <div className='glide__track' data-glide-el="track">
            <ul className='glide__slides'>
              <li className='glide_slide'><img src={HTML5} alt="HTML5"/></li>
              <li className='glide_slide'><img src={CSS3} alt="CSS" /></li>
              <li className='glide_slide'><img src={JavaScript} alt="JavaScript" /></li>
              <li className='glide_slide'><img src={TypeScript} alt="TypeScript" /></li>
              <li className='glide_slide'><img src={React} alt="React" /></li>
              <li className='glide_slide'><img src={GitHub} alt="GitHub" /></li>
              <li className='glide_slide'><img src={Yarn} alt="Yarn" /></li>
              <li className='glide_slide'><img src={NPM} alt="NPM" /></li>
              <li className='glide_slide'><img src={Node} alt="NPM" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}