import React, { useEffect, useState } from "react";
import AOS from "aos";  // Import AOS library
import "aos/dist/aos.css";  // Import AOS styles
import "./Portfolio.css";  // Import custom styles

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("../../public/data/Portfolio.json")
      .then((response) => response.json())
      .then((data) => {
        setPortfolioItems(data.portfolioItems);
        setFilteredItems(data.portfolioItems);
      });
    AOS.init({ duration: 1000 });  // Initialize AOS with a default duration
  }, []);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === category));
    }
  };

  const categories = ["All", "App", "Card", "Web"];

  return (
    <div className="container mx-auto p-8">
        <div className="flex items-center mb-4">
        <h2 className="text-2xl text-gray-600">Portfolio</h2>
        <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
      </div>
      <h2 className="text-4xl font-semibold mb-4">What We've Done</h2>
      
      <div className="flex justify-center space-x-4 mb-8" data-aos="fade-up" data-aos-delay="400">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              activeCategory === category ? "bg-orange-600 rounded-full text-white" : "bg-gray-200 text-gray-800 hover:bg-orange-600 rounded-full"
            } transition duration-300`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-item relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in-up"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="portfolio-overlay absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 text-black transform translate-y-full transition-transform duration-300">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
