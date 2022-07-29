import React from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import Welcome from '../components/welcome'
import Services from '../components/services'
import Problem from '../components/problem'
import Whychoose from '../components/whychoose'
import Client from '../components/client'
import Contact from '../components/contact'
import Footer from '../components/footer'
const home = () => {
  return (
    <>
    <div className='hero_area'>
      <Header/>,
      <Slider/>,
     
    </div>
    <Welcome/>
    <Services/>
    <Problem/>
    <Whychoose/>
    <Client/>
    <Contact/>
    <Footer/>
    
    </>
    
   
  )
}

export default home