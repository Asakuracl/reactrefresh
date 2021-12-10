import React from "react"
import Header from "./components/Header" 
import Main from "./components/Main"
import Footer from "./components/Footer"
carrelage from "../images/carrelage1.jpg"

function App() {
    return (
        <div className="container">       
            <Header />
            <Main 
                img={carrelage}
                mainTitle="Entreprise"
                description="Entreprise tout corp d'état"
                webAddress ="Carte de visite"

                aboutFirst="Devis gratuit et sous 48H."
                aboutScd="+10 ans de métier et diplomé."
                aboutTrd=""

                skillFirst="Pose carrelage neuf ou réhabilitation"
                skillScd="Entreprise tout corp d'état"
                skillTrd=""
                // img={img}
                // mainTitle={mainTitle}
                // description={mainDescription}
                // webAddress ={webAddress}
                // buttonEmail={buttonEmail}
                // buttonPhone={buttonPhone}

                // aboutFirst={aboutFirst}
                // aboutScd={aboutScd}
                // aboutTrd={aboutTrd}

                // skillFirst={skillFirst}
                // skillScd={skillScd}
                // skillTrd={skillTrd}
    
            />
            <Footer />
        </div>
        
    )
}

export default App