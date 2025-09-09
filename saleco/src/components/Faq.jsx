import React, { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Fetch FAQs from JSON
  useEffect(() => {
    fetch('../../public/data/Faq.json') // Replace with the path to your JSON file
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error('Error fetching FAQ data:', error));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Section Title */}
      <div
        className="flex items-center mb-4"
        data-aos="fade-down"
      >
        <h2 className="text-2xl text-gray-600">Frequently Asked Question</h2>
        <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
      </div>
      <h2
        className="text-4xl font-semibold mb-4"
        data-aos="fade-down"
      >
        Frequently Asked Question
      </h2>
      
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-sm ${activeIndex === index ? 'bg-orange-100' : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Adds staggered animation delay for each FAQ
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between w-full p-4 ${activeIndex === index ? 'bg-orange-200 text-orange-600' : 'bg-gray-100 text-gray-800'} hover:bg-gray-200 focus:outline-none`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-orange-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            {activeIndex === index && (
              <div
                className="p-4 bg-white"
                data-aos="fade-in" // Animate the answer appearing
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
