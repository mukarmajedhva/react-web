import React from 'react'
import Hero from '../Componants/Hero'
import About from '../Componants/About'
import PopularProduct from '../Componants/PopularProduct'
import Offer from '../Componants/Offer'
import NewArrivals from '../Componants/NewArrivals'


const Home = () => {
  return (
    <>
    <div>
      <Hero/>
      <About/>
      <PopularProduct/>
      <Offer/>
      <NewArrivals/>
    </div>
    </>
  )
}

export default Home
