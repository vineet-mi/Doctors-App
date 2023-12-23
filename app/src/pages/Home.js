import React from 'react'
import Hero from '../components/Home/Hero'
import Stats from '../components/Home/Stats'
import Info from '../components/Home/Info'
import Detial from '../components/Home/Detial'
import Safety from '../components/Home/Safety'
import Working from '../components/Home/Working'
import Contact from '../components/Home/Contact'


const Home = () => {
  return (
    <div>

      <Hero />
      <Stats />
      <Info />
      <Detial />
      <Safety />
      <Working />
      <Contact />
    </div>
  );
}

export default Home