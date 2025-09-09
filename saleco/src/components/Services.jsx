import React, { useEffect, useState } from 'react';
import { ImFileText, ImCreditCard } from 'react-icons/im';
import { TfiCommentAlt, TfiFolder } from 'react-icons/tfi';
import { LuEarth } from 'react-icons/lu';
import { IoMdTime } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('../../public/data/Services.json')
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error('Error fetching services data:', error));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const icons = {
    ImFileText: <ImFileText className="text-blue-600 text-6xl transition-transform transform hover:scale-110" />,
    ImCreditCard: <ImCreditCard className="text-red-600 text-6xl transition-transform transform hover:scale-110" />,
    TfiCommentAlt: <TfiCommentAlt className="text-yellow-600 text-6xl transition-transform transform hover:scale-110" />,
    TfiFolder: <TfiFolder className="text-green-600 text-6xl transition-transform transform hover:scale-110" />,
    LuEarth: <LuEarth className="text-sky-600 text-6xl transition-transform transform hover:scale-110" />,
    IoMdTime: <IoMdTime className="text-pink-600 text-6xl transition-transform transform hover:scale-110" />,
  };

  return (
    <section className="p-8 bg-gray-100">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl text-gray-600">Services</h2>
        <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
      </div>
      <h2 className="text-4xl font-semibold mb-4">What We Do Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:border-orange-400 flex items-center space-x-4"
            data-aos="fade-up" // AOS Animation Attribute
          >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
              <div className="text-left">
                {icons[service.icon] || <div className="text-4xl text-gray-400">?</div>}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 transition-colors hover:text-orange-600">
                {service.title}
              </h3>
              <p className="text-lg text-black">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
