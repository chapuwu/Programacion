import './TarjetaPersona.css'

interface TarjetaPersonaProps {
    nombre: string
    descripcion: string
    imagen: string
}

export default function TarjetaPersona({ nombre, descripcion, imagen }: TarjetaPersonaProps) {
    return (
        <div className='tarjeta-persona'>
            <img src={imagen} alt='imagen' />
            <div className='detalles'>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}
