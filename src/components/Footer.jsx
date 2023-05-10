import React from 'react';
import { styles } from '../styles';
import { logo } from '../assets';

const Footer = () => {
  return (
    <div className={`
    ${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 bg-tertiary`}>
      <div className='w-full flex justify-between items-center max-w-9xl mx-auto'>
        <img src={logo} alt="logo" className='w-15 h-10  border-radius:9'/>
        {/* <p className='text-white text-[18px] font-bold cursor-pointer left-0'>Versión de Belén Cufré</p>   */}
        <p className='text-secondary text-[14px] font-bold cursor-pointer'>Este portfolio ha sido creado siguiendo los pasos de JavaScript Mastery y reversionado por Belén Cufré.</p>  
        </div>
    </div>
  )
}

export default Footer