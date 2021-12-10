import React from "react"
import Header from "./components/Header" 
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="container">       
            <Header />
            <Main 
                img={img}
                mainTitle={mainTitle}
                description={mainDescription}
                webAddress ={webAddress}
                buttonEmail={buttonEmail}
                buttonPhone={buttonPhone}

                aboutFirst={aboutFirst}
                aboutScd={aboutScd}
                aboutTrd={aboutTrd}

                skillFirst={skillFirst}
                skillScd={skillScd}
                skillTrd={skillTrd}
    
            />
            <Footer />
        </div>
        
    )
}

export default App