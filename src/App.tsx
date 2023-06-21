import 'normalize.css';
import './App.css';

import { Bienvenido } from './components/Bienvenido';
import { Pasatiempos } from './components/Pasatiempos';
import { Proyectos } from './components/Proyectos';
import { Tecnologias } from './components/Tecnologias';
import { Contacto } from './components/Contacto';

import { useRef } from 'react';

function App() {
  const bienvenidoRef = useRef<HTMLDivElement>(null);
  const pasatiemposRef = useRef<HTMLDivElement>(null);
  const scrollToBotton = () =>{
    pasatiemposRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <>
      <Bienvenido onClick={scrollToBotton} refBienvenidos={bienvenidoRef}/>
      <Pasatiempos refPasatiempos={pasatiemposRef}/>
      <Proyectos />
      <Tecnologias />
      <Contacto />
    </>
  )
}

export default App;
