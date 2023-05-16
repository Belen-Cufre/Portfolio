import React from 'react'
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from '../utils/i18n/i18n';


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
  const [arrayProjects, setArrayProjects] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const translateProjects = () => {
      const translated = projects.map((project) => ({
        name: t(project.name),
        description: t(project.description),
        tags: project.tags.map((tag) => ({
          name: t(tag.name),
          color: tag.color,
        })),
        image: project.image,
        source_code_link: project.source_code_link,
      }));

      setArrayProjects(translated);
    };

    translateProjects(); // Traducir los proyectos iniciales

    const handleLanguageChange = () => {
      translateProjects(); // Volver a traducir los proyectos al cambiar el idioma
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n.language]);


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t('works.title')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t('works.proy')}
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[16px] max-w-7xl leading-[30px]'
        >
          {t('works.summary1')}
          <br />
          {t('works.summary2')}
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {arrayProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

//   useEffect(()=> {
//     if (language==='es') {
//       setArrayProjects(projects)
//     } else {
//       setArrayProjects(projects)
//     }
//   }, [language])

//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//         {t('works.title')}
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//         {t('works.proy')}
//         </h2>
//       </motion.div>
//       <div className='w-full flex'>
//         <motion.p
//         variants={fadeIn('', '', 0.1, 1)}
//         className='mt-4 text-secondary text-[16px] max-w-7xl leading-[30px]'
//         >
//         {t('works.summary1')}
//         <br />
//         {t('works.summary2')}
//         </motion.p>
//       </div>
//       <div className='mt-20 flex flex-wrap gap-7'>
//         {arrayProjects.map((arrayProjects, index)=> (
//           <ProjectCard 
//           key={`project-${index}`} 
//           index={index} 
//           {...arrayProjects}
//           />
//         ))}

//       </div>
//     </>
//   )
// }

export default SectionWrapper(Works, 'work');