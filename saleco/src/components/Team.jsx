import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file (or API endpoint)
    fetch('../../public/data/Team.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => setTeamData(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Header */}
      <div
        className="flex items-center mb-4"
        data-aos="fade-down"
      >
        <h2 className="text-2xl text-gray-600">Team</h2>
        <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
      </div>
      <h2
        className="text-4xl font-semibold mb-4"
        data-aos="fade-down"
      >
        Our Hardworking Team
      </h2>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData.map((player, index) => (
          <div
            key={player.id}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Add a staggered delay for each card
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-64">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay Icons */}
              <div className="absolute inset-0 flex items-center justify-center mt-52 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <a href="#" className="text-lime-400 hover:text-orange-600 text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-lime-400 hover:text-orange-600 text-2xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-lime-400 hover:text-orange-600 text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-lime-400 hover:text-orange-600 text-2xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Title and Position */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{player.name}</h2>
              <p className="text-gray-500 text-center">{player.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
