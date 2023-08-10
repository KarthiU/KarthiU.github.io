import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';



const ProjectCard = ({ image, name, description, source_code_link }) => {
  return (
    <div className="xs:w-[360px] p-[20px] bg-secondary w-full content-center flex flex-wrap 
    justify-center gap-6 rounded-2xl shadow hover:shadow-lg">
      <motion.div
        className="w-full text-primary rounded" 
        variants={fadeIn('', '', 0.25, 0.5)} 
      >
        <div  
          options={{
            max: 45,
            scale: 1,
            speed: 300,
          }}
          className="min-h-[240px] flex flex-col rounded"
        >
          <img src={image} alt={name} className="w-[90] object-contain bg-secondary p-[4px] rounded" />
          <a href={source_code_link} className="text-primary text-[24px] font-bold mt-4 p-[10px] hover:text-[#2e9fe0]">
            {name}
          </a>
          <p className="text-primary text-[14px] p-[10px]">{description}</p>
        </div>
      </motion.div>

    </div>
  );  
};



const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => { 
      setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 10000)

    return () => clearInterval(timer)
  }, []);

  return ( 
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} text-primary`}>Thing I've Created</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>PROJECTS.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap gap-64 place-content-center">
        {projects.map((project, index) => (
         
              <div key={project.name} style={{ display: projectIndex === index ? 'block' : 'none' }}>

                  <ProjectCard {...project} />
                
              </div>
        
        ))}
      </div>
   
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
  