import GitHub from '../assets/img/git.svg';
import Netlify from '../assets/img/netlify.svg';

interface PropsProyecto {
  titulo: string;
  git: string;
  netlify: string;
  clase: string;
  MouseOver: (e: React.MouseEvent<HTMLDivElement>) => void;
  MouseOut: (e: React.MouseEvent<HTMLDivElement>) => void;
  claseEfecto: string;
}

export const Proyecto: React.FC<PropsProyecto> = ({ titulo, git, netlify, clase, MouseOver, MouseOut, claseEfecto }) => {

  return (
    <>
      <div className={`proyecto ${clase}`} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <div className={claseEfecto}>
          <h5 className='titulo-proyecto'>{titulo}</h5>
          <div className='links-proyectos'>
            <a href={netlify} target="_blank"><img className='ico' src={Netlify} alt="netlify" /></a>
            <a href={git} target="_blank"><img className='ico' src={GitHub} alt="github" /></a>
          </div>
        </div>

      </div>
    </>
  )
}