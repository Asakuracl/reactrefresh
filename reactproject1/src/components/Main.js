import React from "react"
import carrelage from "../images/carrelage1.jpg"

function Main() {
    return (    
        <main>
            <img src={carrelage} className="main--img"/>
            <h2 className="main--title">Entreprise</h2>
            <h3>Entreprise tout corp d'état</h3>
            <p>Carte de visite</p>
            <div className="main--buttons">
                <button>Email</button>
                <button>Phone</button>
            </div>
            <h4>A propos</h4>

            <h4>Compétences</h4>  
        </main>
    )
}

export default Main