import 'normalize.css';
import './App.css';

import { Bienvenido } from './components/Bienvenido';
import { Pasatiempos } from './components/Pasatiempos';
import { Proyectos } from './components/Proyectos';
import { Tecnologias } from './components/Tecnologias';
import { Contacto } from './components/Contacto';
import ScrollReveal from 'scrollreveal';

import { useRef, useEffect } from 'react';

function App() {
  const bienvenidoRef = useRef<HTMLDivElement>(null);
  const pasatiemposRef = useRef<HTMLDivElement>(null);

  const scrollToBottonBienvenido = () =>{
    pasatiemposRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  useEffect(()=>{
    const sr = ScrollReveal();
    sr.reveal(bienvenidoRef.current! , {
      origin: 'top',
      duration: 1000,
      distance: '50px'
    });
    sr.reveal(pasatiemposRef.current!, {
      origin: 'left',
      duration: 1000,
      distance: '30px',
    })
  },[]);

  
  return (
    <>
      <Bienvenido onClick={scrollToBottonBienvenido} refBienvenidos={bienvenidoRef}/>
      <Pasatiempos refPasatiempos={pasatiemposRef}/>
      <Proyectos />
      <Tecnologias />
      <Contacto />
    </>
  )
}

export default App;
