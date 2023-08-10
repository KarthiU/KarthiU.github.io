import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt'

import { motion } from 'framer-motion'; 
import { styles } from '../styles'; 
import { github } from '../assets'; 
import { projects } from '../constants' 
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion'; 

const ProjectCard = ({ image, name, description, source_code_link, index }) => {
  return (
    <Tilt>
    <div
        className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full shadow-md">
        <div className='relative w-full h-[230px] bg-primary'>
          <img  
            src={image} 
            alt={name}  
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open 
              (source_code_link, "_blank")} 
              className="bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2e9fe0] ">
                <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain "> 

                </img> 
            </div>
          </div>
        </div>
        <div className="mt-5">
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>      
        </div>

       
      </div>
          
    </Tilt>
  );  
};


const ProjList = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleButton = () => {  
    setIsOpen(!isOpen)
  } 
  return (
    <>
      <motion.div
        className="flex justify-center" 
        variants={fadeIn('', '', 0.25, 0.5)} 
      >
          <button
          className='bg-primary text-secondary w-64 px-[5] py-[15px] rounded-md hover:bg-[#2e9fe0]'
          onClick={toggleButton}
        >
          {isOpen ? 'Close' : 'See All Projects'}  
        </button> 
      </motion.div>  
  
      {isOpen && ( 
        <div className="flex flex-wrap mt-10 bg-primary w-full p-[20px] rounded-2xl justify-center">
          <h3 className='font-bold text-[28px]'>All Projects</h3>
          <div className='flex flex-wrap gap-7 justify-center bg-primary w-full p-[20px] rounded-2xl'>
          {projects.map((project, index) => ( 
            <ProjectCard
              key={`project-${index}`}
              index={index}  
              {...project}  
            /> 
          ))}
          </div>
        </div>
      )} 
    </>
  )
}

export default SectionWrapper(ProjList, "");
