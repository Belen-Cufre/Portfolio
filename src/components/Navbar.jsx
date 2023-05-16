import React, { useState } from "react";
import { Link } from "react-router-dom";
import i18n from '../utils/i18n/i18n';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const Navbar = () => {

  const { t } = useTranslation();
  const [ active, setActive ] = useState("")
  const [ toggle, setToggle ] = useState(false)

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang).then();
  }

  const getFlag = (lang) => {
        switch (lang) {
            case 'es':
                return (
                    <img
                        src="https://flagcdn.com/w320/ar.png"
                        width="45"
                        height="30"
                        alt={lang}
                    />
                );
            case 'en':
                return (
                    <img
                        src="https://flagcdn.com/w320/us.png"
                        width="45"
                        height="30"
                        alt={lang}
                    />
                );
            default:
                return (
                    <img
                        src="https://www.otherworldproject.com/wiki/images/9/96/Unknown_flag.png"
                        width="40"
                        height="25"
                        alt={'default'}
                    />
                );
        }
    };

  const [anchorElLang, setAnchorElLang] = useState(null);
    const handleOpenLang = (event) => {
        setAnchorElLang(event.currentTarget);
    };
    const handleCloseLang = () => {
        setAnchorElLang(null);
    };

  return (
    <nav className={`
    ${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        to= '/'
        className='flex items-center gap-2'
        onClick={()=> {
          setActive("");
          window.scrollTo(0, 0);
        }}
        >
          <img src={logo} alt="logo" className='w-12 h-12 border-radius:9'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Belén &nbsp;<span className='sm:block hidden'>| Cufré</span></p>
        </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
              key={link.id}
              className={`${active === link.title
                ? 'text-white'
                : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div>
                    <div>
                        <Button onClick={handleOpenLang}>{getFlag(i18n.language)}</Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElLang}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElLang)}
                            onClose={handleCloseLang}
                        >
                            <MenuItem
                                selected={i18n.language === 'es'}
                                onClick={() => {
                                    handleCloseLang();
                                    handleLangChange('es');
                                }}
                            >
                                {getFlag('es')} {t('navi.sp')}
                            </MenuItem>
                            <MenuItem
                                selected={i18n.language === 'en'}
                                onClick={() => {
                                    handleCloseLang();
                                    handleLangChange('en');
                                }}
                            >
                                {getFlag('en')} {t('navi.en')}
                            </MenuItem>
                        </Menu>
                    </div>
            </div>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)} 
              />

                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                  <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {navLinks.map((link) => (
                      <li
                      key={link.id}
                      className={`${active === link.title
                      ? 'text-white'
                      : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar