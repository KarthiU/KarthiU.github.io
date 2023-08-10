import React from 'react' 
import Tilt from 'react-parallax-tilt' 
import { motion } from 'framer-motion'; 

import { styles } from '../styles'; 
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard  = ({index, title, school, icon}) => { 
  return (
    <Tilt className="xs:w-[250px] w-full content-center "> 
    <motion.div
      variants={fadeIn("right", "spring", 0.5, index, 0.75)}
      className="w-full bg-white p-[8px] shadow-md card rounded hover:bg-primary"
    >
      <div
      options ={{ 
        max: 45,  
        scale:1, 
        speed: 300 
      }}
      className="bg-primary  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      > 
        <img src={icon} alt={title}
        className="w-16 h-16 object-contain" /> 
        <p className= "text-white text-[12px} font-bold text-center">{school}</p> 
        <h3 className ="text-secondary text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>

  </Tilt>
  )
}
 
 
const About = () => {
  return (
    <div className = " py-0 px-0">     
      <motion.div variants={textVariant()}>  
      <p className={`${styles.sectionSubText} text-primary` }>Introduction</p>
      <h2 className ={`${styles.sectionHeadText} text-primary` }>
        WHO I AM.</h2> 
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1, 1)}
        className = "text-primary text-[16px]"
      >  
      Hey, I'm Karthigan, a passionate and ambitious second year student at the University of
       Waterloo, studying Mechatronics Engineering! With an unwavering fascination 
      for all aspects of engineering, my primary focus lies in the realm of Software Engineering and Developing, 
      particularly in field of Artificial Intelligence and Machine Learning.
       <div>
       <p className ="text-primary mt-5 text-[16px]"> 
        Here are some relevant courses I have taken in that regard. 
        </p> 
      </div> 
      </motion.p>
      <div className='mt-5 flex flex-wrap gap-10 text-primary place-content-center'> 
          {services.map((service, index) => (
          <ServiceCard key ={service.title} index={index} {...service} />  
        ))}
      </div> 
    </div>

  )   
} 

export default SectionWrapper(About, "about")
  