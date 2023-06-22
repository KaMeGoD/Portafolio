import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Logo from '../assets/img/logo.png'
import GitAzul from '../assets/img/github-azul.svg'
import Linkedin from '../assets/img/linkedin.svg'
import Curriculum from '../assets/img/file-arrow-down-solid.svg'
import '../style/Contacto.css'

export const Contacto: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_hyc9wjg', 'template_zlfuj3i', form.current!, 'HVap8tI0ql5ro7Ppn')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    form.current?.reset();
  };

  return (
    <>
      <div className='contacto'>
        <div className='header-contacto'>
          <img src={Logo} alt="-header-logo" />
          <h3 className='header-titulo'>Contacto</h3>
        </div>
        <form className='contacto-formulario' ref={form} onSubmit={sendEmail}>
          <label htmlFor='nombre'>Nombre</label>
          <input className='form-input' type="text" id='nombre' name="user_nombre" placeholder='Tu Nombre'/>
          <label>Correo</label>
          <input className='form-input' type="email" name="user_correo" placeholder='Tu Correo'/>
          <label>Mensaje</label>
          <textarea className='form-input text-area' name="user_text" placeholder='Saludame!'/>
          <input className='form-submit' type="submit" value="Enviar" />
        </form>
        <div className='icons-contacto'>
          <a href="https://github.com/KaMeGoD?tab=repositories" target='_blank'><img src={GitAzul} alt="github" /></a> 
          <a href="https://www.linkedin.com/in/juangarciadevfe/" target='_blank'><img src={Linkedin} alt="Linkedin" /></a>
          <a href="hhttps://drive.google.com/file/d/1LoUQzqus22QqzR7aFsLTWNZ-IcefHFwd/view?usp=drive_link" target='_blank'><img className='cv' src={Curriculum} alt="Curriculum" /></a>
        </div>
      </div>
    </>
  );
};

export default Contacto;
