import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Mywork from './Components/My work/Mywork'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    
      <Mywork/>
      <Contact/>
    {/* <Footer/> */}
    </div>
  )
}

export default App
