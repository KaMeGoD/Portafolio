import '../style/Pasatiempos.css'
import { Card } from './Card'

interface PropsPasatiempos{
  refPasatiempos : React.LegacyRef<HTMLDivElement>;
}

export const Pasatiempos : React.FC<PropsPasatiempos> = ({refPasatiempos}) => {
  return (
    <>
      <div className="pasatiempos" ref={refPasatiempos}>
        <h3 className='pasatiempo-titulo'>Mis Pasatiempos</h3>
        <Card />
      </div>
    </>
  )
}