import React from "react"
import Header from "./components/Header" 
import Main from "./components/Main"
import Footer from "./components/Footer"
import logo from "./images/BL.jpg"

function App() {
    return (
        <div className="container">       
            <Header />
            <Main 
                img={logo}
                mainTitle="BLcarrelage"
                description="Entreprise tout corp d'état"
                webAddress ="Carte de visite"

                aboutFirst="Devis gratuit et sous 48H."
                aboutScd="+10 ans de métier et diplomé."
                aboutTrd=""

                skillFirst="Entreprise tout corp d'état"
                skillScd="Carrelage Maçonnerie Peinture Rénovation"
                skillTrd=""
    
            />
            {/* <Footer /> */}
        </div>
        
    )
}

export default App