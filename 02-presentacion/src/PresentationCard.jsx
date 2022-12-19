import imagenAvatar from './assets/Perfil.jpg';
import "./PresentationCard.css"

function PresentationCard() {
    let name = 'Hector Ruiz';
    return(
        <div className="presentation-card">
            <img src={imagenAvatar} alt="Avatar" />
            <h1>Hola soy {name}</h1>
        </div>
    )
}

export default PresentationCard;