import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import "./Home.css";

const Home = () => {
  const [heroData, setHeroData] = useState({ title: '', description: '', image: '', buttonText: '' });
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: true,
    });

    // Fetch hero data
    fetch('../../public/data/Home.json')
      .then(response => response.json())
      .then(data => setHeroData(data))
      .catch(error => console.error('Error fetching hero data:', error));

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="relative bg-gray-700 bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center"
      style={{ backgroundImage: `url(${heroData.image})` }}
    >
      <div className="container mx-auto text-center text-white p-4 md:px-16">
        <h1 
          className="text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg"
          data-aos="fade-up"
        >
          {heroData.title} {" "}
          <span className='relative inline-block'>Selecao
            <span className='absolute bottom-0 left-0 w-full h-1 bg-white font-bold'></span>
          </span>
        </h1>
        <p 
          className="text-lg md:text-2xl mb-6 drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi 
          nihil ut aliquam.<br /> Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus <br />  repellendus deleniti vel. Minus et tempore modi architecto.
        </p>
        <button 
          className="bg-gray-700 border-2 border-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {heroData.buttonText}
        </button>
      </div>
      {/* Back to Top Button */}
      {showScroll && (
        <button 
          className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full h-10 w-10 shadow-lg border-2 border-orange-700  hover:bg-orange-700 transition duration-300 z-50 flex items-center justify-center"
          onClick={scrollToTop}
        >
          &#8679;
        </button>
      )}


      {/* SVG Hero Waves */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave-group" fill="rgba(255, 255, 255, 0.2)">
          <use xlinkHref="#gentle-wave" x="48" y="0" className="wave1" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255, 255, 255, 0.5)" className="wave2" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 255, 255, 0.3)" className="wave3" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255, 255, 255, 0.1)" className="wave4" />
        </g>
      </svg>
    </section>
  );
};
 
export default Home;