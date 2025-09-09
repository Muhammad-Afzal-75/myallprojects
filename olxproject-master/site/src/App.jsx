import { useState } from 'react'
import Navbar from './components/submenu/Navbar'
import Login from './components/login/Login'
import Nav from './components/navigation/Nav'
import Hero from './components/hero/Hero'
import Catagories from './components/catagories/Catagories'
import FeatureCard from './components/featurecard/FeatureCard'
import CarsCard from './components/cardcars/CarsCard'
import BikeCard from './components/cardbike/BikeCard'
import House from './components/house/House'
import VideoAudio from './components/video/VideoAudio'
import Tablets from './components/Tablets/Tablets'
import PlotLand from './components/plotland/PlotLand'
import Job from './components/job/Job'
import Adds from './components/adds/Adds'
import OlxApp from './components/olxapp/OlxApp'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>

     


        <section>
        <div className=' mx-auto max-w-[1340px]'>
          <Navbar />
        </div> 
      </section>

       <section >
         <div className=' mx-auto max-w-[1340px] shadow-sm p-3 bg-body-white rounded'>
           <Nav />
         </div>
       </section>
       <section className=' mx-auto max-w-[1340px] mt-4' >
         <Hero />
       </section>
       <section>
         <Catagories />

       </section> 
       <section className='my-4'>
         <FeatureCard />

       </section> 
       <section className='my-4'>
         <CarsCard />

       </section> 
       <section className='my-4'>
         <BikeCard />

       </section> 
       <section className='my-4'>
         <House />

       </section> 
       <section className='my-4'>
         <VideoAudio />

       </section> 
       <section className='my-4'>
         <Tablets />

       </section> 
       <section className='my-4'>
         <PlotLand />

       </section> 
       <section className='my-4'>
         <Job />
       </section>
       <section className='my-4'>
         <Adds />
       </section>
       <section className='my-4'>
         <OlxApp />
       </section>

       <section>
         <Footer />
       </section>
    </>
  )
}

export default App
