import 'normalize.css';
import './App.css';

import { Bienvenido } from './components/Bienvenido';
import { Pasatiempos } from './components/Pasatiempos';
import { Proyectos } from './components/Proyectos';
import { Tecnologias } from './components/Tecnologias';
import { Contacto } from './components/Contacto';

function App() {

  return (
    <>
      <Bienvenido />
      <Pasatiempos />
      <Proyectos />
      <Tecnologias />
      <Contacto />
    </>
  )
}

export default App;
