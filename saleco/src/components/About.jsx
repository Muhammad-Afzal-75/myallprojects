import React, { useState, useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegLightbulb, FaRegHandshake, FaRegSmile, FaRegStar } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  const [content, setContent] = useState({ left: [], right: '', highlights: [] });
  const [selectedBox, setSelectedBox] = useState({ title: '', text: '', image: '' });

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Only animate once while scrolling
    });

    // Fetch content
    fetch('/data/About.json')
      .then(response => response.json())
      .then(data => setContent(data.about))
      .catch(error => console.error('Error fetching About Us content:', error));
  }, []);

  const boxes = [
    { id: 1, title: 'Modi sit est dela pireda nest', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '../../public/images/img/working-1.jpg', icon: <FaRegLightbulb className="text-orange-700 text-4xl" /> },
    { id: 2, title: 'Unde praesenti mara setra le', text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '../../public/images/img/working-2.jpg', icon: <FaRegHandshake className="text-orange-700 text-4xl" /> },
    { id: 3, title: 'Pariatur explica nitro dela', text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '../../public/images/img/working-3.jpg', icon: <FaRegSmile className="text-orange-700 text-4xl" /> },
    { id: 4, title: 'Nostrum qui dile node', text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '../../public/images/img/working-4.jpg', icon: <FaRegStar className="text-orange-700 text-4xl " /> },
  ];

  const handleBoxClick = (box) => {
    setSelectedBox({ title: box.title, text: box.text, image: box.image });
  };
  const goToHome = () => {
    window.location.href = "/"; // Update this path if your home page URL is different
  };

  return (
    <section className="p-8 bg-gray-100">
      <div className="flex items-center mb-4" data-aos="fade-right">
        <h2 className="text-2xl text-gray-600">About</h2>
        <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
      </div>
      <h2 className="text-4xl font-semibold mb-4" data-aos="fade-left">Who we are</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-up">
          <div className="space-y-6">
            {content.left.map((paragraph, index) => (
              <div key={index}>
                <p className="text-gray-700 text-lg">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {content.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center space-x-2 text-lg text-gray-700">
                <IoMdCheckmarkCircleOutline className="text-orange-600" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-700 text-lg mb-4">{content.right}</p>
          <button
            onClick={goToHome}
           className="group inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg transition-all hover:bg-orange-500 hover:text-white">
            Read more
            <svg
              className="w-6 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* New Section with Boxes */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {boxes.map(box => (
          <div
            key={box.id}
            className="cursor-pointer p-10 border rounded-lg shadow hover:bg-orange-500 hover:text-white transition-colors"
            data-aos="zoom-in"
            onClick={() => handleBoxClick(box)}
          >
            <div className="flex items-center space-x-2">
              {box.icon}
              <h3 className="font-semibold text-2xl text-black hover:text-white">
                {box.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Display Selected Box Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-2">{"Neque exercitationem debitis soluta quos debitis quo mollitia officia est"}</h3>
          <p className="text-gray-700 text-lg mb-4">{selectedBox.text}</p>
          <div className="space-y-4">
            <p className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline className="text-orange-600" />
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>
            <p className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline className="text-orange-600" />
              <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </p>
            <p className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline className="text-orange-600" />
              <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </p>
            <p className="flex items-center space-x-2">
              <IoMdCheckmarkCircleOutline className="text-orange-600" />
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
            </p><br />
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>
        <div data-aos="fade-left">
          {selectedBox.image && (
            <img src={selectedBox.image} alt="Selected content" className="w-full rounded-lg" />
          )}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 bg-gray-800 text-white p-6 rounded-lg flex justify-between items-center" data-aos="fade-up">
        <div>
          <h3 className="text-3xl font-bold mb-2">Call To Action</h3>
          <p className="text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-full transition hover:bg-orange-500 hover:text-white">
          Call To Action
        </button>
      </div>
    </section>
  );
};

export default About;
