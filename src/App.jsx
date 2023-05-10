import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';
const App= () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primar'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
