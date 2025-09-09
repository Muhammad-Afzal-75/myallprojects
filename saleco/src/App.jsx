
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FAQ from './components/Faq'
import Footer from './components/Footer'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Testimonial from './components/Testimonial'


function App() {


  return (
    <>
    <Navbar/>
    <div id='home'>
      <Home/>
    </div>
    <div id='about'>
    <About/>
    </div>
    <div id='services'>
    <Services/>
    </div>
    <div id='portfolio'>
    <Portfolio/>
    </div>
    <Testimonial/>
    <Pricing/>
    <FAQ/>
    <div id='team'>
    <Team/>
    </div>
    <div id='blog'>
    <Blog/>
    </div>
    <div id='contact'>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default App
