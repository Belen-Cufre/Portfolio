import React from 'react';
import { styles } from '../styles';
import { logo } from '../assets';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t }= useTranslation();
  
  return (
    <div className={`
    ${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 bg-tertiary`}>
      <div className='w-full flex justify-between items-center max-w-9xl mx-auto'>
        <img src={logo} alt="logo" className='w-15 h-10  border-radius:9'/>
        {/* <p className='text-white text-[18px] font-bold cursor-pointer left-0'>Versión de Belén Cufré</p>   */}
        <p className='text-white text-[14px] font-bold cursor-pointer'>{t('footer')}</p>  
        </div>
    </div>
  )
}

export default Footer