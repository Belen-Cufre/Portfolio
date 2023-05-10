import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard= ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full orange-blue-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[18px] font-bold text-center'>{title}</h3>     
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Introducción
          </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Resumen
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[16px] max-w-7xl leading-[30px]'
          >   
          Si tuviera que describir mis fortalezas, diría sin duda alguna que la más importante es mi avidez por el aprendizaje. Durante toda mi carrera laboral siempre me han remarcado la versatilidad que tengo para cumplir con todos los desafíos que me han y me he propuesto. Busco siempre mi crecimiento personal y profesional ya que, si puedo aprender algo nuevo, independientemente de lo insignificante que parezca, para mí ya es valor agregado. Soy muy perseverante y más aun cuando me siento motivada.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>

  )
}

export default SectionWrapper(About, "about")