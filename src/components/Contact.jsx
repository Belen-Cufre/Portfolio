import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef =  useRef();
  const [form, setForm] = useState ({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange= (e)=> {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  };
  const handleSubmit= (e)=> {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_dqqrjuw',
      'template_5maxaks',
      {
        from_name: form.name,
        to_name: "Belén",
        from_email: form.email,
        to_email: "belen_cufre@hotmail.com",
        message: form.message,
      },
      '7fu0O3R3yUMUwvUpR'
      )
      .then(()=> {
        setLoading(false);
        alert('Muchas gracias por tu mensaje. Me pondré en contacto contigo a la brevedad.')
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Algo ha salido mal.')
      })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          ¿Querés comunicarte conmigo?
        </p>
        <h3 className={styles.sectionHeadText}>
          Contacto
        </h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu nombre</span>
          </label>
          <input 
          type="text"
          name= 'name'
          value={form.name}
          onChange={handleChange}
          placeholder='¿Cómo te llamas?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu email</span>
          </label>
          <input 
          type="email"
          name= 'email'
          value={form.email}
          onChange={handleChange}
          placeholder='¿Cuál es tu e-mail?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu mensaje</span>
          </label>
          <textarea 
          rows="7"
          name= 'message'
          value={form.message}
          onChange={handleChange}
          placeholder='Dime en qué puedo ayudarte.'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />

          <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h[550px] h-[350px]'
      >
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')