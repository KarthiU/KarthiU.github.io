import { motion } from 'framer-motion'; 

import { styles } from '../styles';
import { EarthCanvas } from './canvas'; 

const Hero = () => {
  return (
    <section className= "relative w-full h-screen mx-auto">
      <div className ={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7xl mx-auto flex flex-row items-start gap-5 `}> 
        <div className ="flex flex-col justify-center items-center 
        mt-5">
          <div className ="w-8 h-8 rounded-full bg-[#fffec8]" />
          <div className ="w-1 sm:h-80 h-100 sky-gradient"/> 
        </div>
        
        
        <div className="flex items-center page-container slide-in">  
          <div> 
            <p className={`${styles.heroSubText} mt-2 text-white-100 hover:text-white transition`}>
              HI, I'M
            </p> 
            <h1 className={`${styles.heroHeadText} hover:text-white transition`}>
              KARTHIGAN UTHAYAN
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              WELCOME TO MY PORTFOLIO 
            </p>
          </div>
          <div className="w-96 h-96 mr-32 ">   
            <EarthCanvas />
            <div className ="flex justify-center">
              <div className ="w-1 sm:h-10 h-10 bg-tertiary opacity-75"/> 
            </div>
            <p className={`${styles.heroSubText} mt-2 text-tertiary text-center`}>
              spin me! </p> 
          </div>
        </div>
        
      </div>
  
    </section>
  )
}

export default Hero