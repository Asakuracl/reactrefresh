import React from "react"
import carrelage from "../images/carrelage1.jpg"

function Test() {

    console.log("test ok")
}


function Main() {
    return (    
        <main>
            <img src={carrelage} className="main--img"/>
            <h2 className="main--title">Entreprise</h2>
            <h3>Entreprise tout corp d'état</h3>
            <p>Carte de visite</p>
            <div className="main--buttons">
                <button type="button">Email</button>
                <button type="button" onClick={Test}>Phone</button>
            </div>
            <h4>A propos</h4>
            <ul>
                <li>Devis gratuit et sous 48H.</li>
                <li>+10 ans de métier et diplomé.</li>
            </ul>
            <h4>Compétences</h4>
            <ul>
                <li>Pose carrelage neuf ou réhabilitation</li>
                <li>Entreprise tout corp d'état</li>
            </ul>  
        </main>
    )
}

export default Main