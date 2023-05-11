import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard= ({index, name, description, tags, image, source_code_link})=> {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        spedd: 450
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounder-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
            onClick={()=> window.open(source_code_link, 'blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Mis proyectos en el mundo IT
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Poyectos
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-7xl leading-[30px]'
        >
        Los proyectos a continuación son una muestra de trabajos que he realizado durante este tiempo. Estos proyectos han sido grupales e individuales. Cada uno de ellos tiene una breve descripción y un link al repositorio del código. El orden que uso para desplegarlos es cronológico, siendo el primero que muestro el primero que hice.
        <br />
        Mediante estas muestras puede verse mi crecimiento, mis ganas de seguir aprendiendo, la capacidad para trabajar en equipo y el orgullo que siento por mis pequeños logros y contribuciones que hoy me hacen ‘junior’ y que pronto me llevarán a ser ‘senior’. 
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=> (
          <ProjectCard 
          key={`project-${index}`} 
          index={index} 
          {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work');