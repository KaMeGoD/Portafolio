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
  const bienvenidoRef = useRef<HTMLDivElement>();
  const pasatiemposRef = useRef<HTMLDivElement>(null);
  const proyectosRef = useRef<HTMLDivElement>(null);
  const tecnologiasRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);

  const scrollToBottomBienvenido = () =>{
    pasatiemposRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  useEffect(()=>{
    const sr = ScrollReveal();
    sr.reveal(bienvenidoRef.current!, {
      origin: 'top',
      duration: 1000,
      distance: '50px'
    });
    sr.reveal(pasatiemposRef.current!, {
      origin: 'left',
      duration: 1000,
      distance: '30px',
    });
    sr.reveal(proyectosRef.current!, {
      origin: 'top',
      duration: 1000,
      distance: '30px',
    });
    sr.reveal(tecnologiasRef.current!, {
      origin: 'left',
      duration: 1000,
      distance: '30px',
    });
    sr.reveal(contactoRef.current!, {
      origin: 'bottom',
      duration: 1000,
      distance: '30px',
    });
  },[]);

  
  return (
    <>
      <Bienvenido onClick={scrollToBottomBienvenido} refBienvenidos={bienvenidoRef}/>
      <Pasatiempos refPasatiempos={pasatiemposRef}/>
      <Proyectos refProyectos={proyectosRef}/>
      <Tecnologias refTecnologias={tecnologiasRef}/>
      <Contacto refContacto={contactoRef}/>
    </>
  )
}

export default App;
