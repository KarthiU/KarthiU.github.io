import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, ProjList, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'; 



const App = () => { 
  return (
   <BrowserRouter>  
   <div className = "relative z-0 b g-secondary">
      <div className="bg-hero-pattern bg-cover
      bg-no-repeat bg-center">
        <Navbar />
        <Hero /> 
      </div>
      <div className=" bg-white">
        <About/> 
      </div>
      
      <div className="bg-gradient-to-b from-white to-secondary">
        <Experience />
      </div>
        <div className=" bg-secondary">
          <Tech />
        </div>
      <div className="bg-secondary" >
        <Projects />
      </div> 
      <div className="relative z-0 bg-gradient-to-b from-secondary to-tertiary"> 
      <ProjList /> 
      </div>
      <div className="bg-tertiary">
        <Contact/>
        <StarsCanvas/>
      </div>
   </div>
   </BrowserRouter>
  )
}

export default App 
