import React from "react"
import carrelage from "../images/carrelage1.jpg"


function Main() {

    function Email() {
        const email = document.getElementsByClassName("email")
        email && alert("adresse mail :mail@mail.com") 
    }

    function Phone() {
        const phone = document.getElementsByClassName("phone")
        phone && alert("numéros de téléphone :010203") 
    }


    return (    
        <main>
            <img src={carrelage} className="main--img"/>
            <h2 className="main--title">Entreprise</h2>
            <h3>Entreprise tout corp d'état</h3>
            <p>Carte de visite</p>
            <div className="main--buttons">
                <button className="email" type="button" onClick={Email}>Email</button>
                <button className="phone" type="button" onClick={Phone}>Phone</button>
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