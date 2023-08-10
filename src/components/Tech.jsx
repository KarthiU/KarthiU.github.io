import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'


const TechnologyCard = ({icon, name, index}) => { 
  return(
    <motion.div
    variants={fadeIn("left", "spring", 0.5, index, 0.75)} 
    className="w-full"
  > 
      <div
      options ={{ 
        max: 45,   
        scale:1, 
        speed: 300
      }}  
      className="bg-transparent flex justify-evenly items-center  
      drop-shadow-md flex-col transform hover:scale-[1.13]"
      > 
        <div className=""> 
          <img src={icon} alt={name}
          className="w-16 h-16 object-contain" /> 
          <p className= "mt-2 text-primary text-[14px] font-bold text-center">{name}</p> 
        </div>
      </div> 
    </motion.div> 
 
  )
} 

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10"> 
    {technologies.map((technology, index) => ( 
      <div className="w-28 h-28" key={technology.name}>
          <TechnologyCard index={index} {...technology} />
      </div> 
    ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")     