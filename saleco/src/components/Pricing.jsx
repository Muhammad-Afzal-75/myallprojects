import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const plans = [
    { 
      name: "Free", 
      price: "$19/month", 
      description: "For small businesses", 
      buttonText: "Buy Now", 
      extraDescriptions: [
        "Aida dere", 
        "Nec feugiat nisl", 
        "Pharetra massa"
      ]
    },
    { 
      name: "Business", 
      price: "$49/month", 
      description: "For growing businesses", 
      buttonText: "Buy Now", 
      extraDescriptions: [
        "Nec feugiat nisl", 
        "Nulla at volutpat dola", 
        "Pharetra massa"
      ]
    },
    { 
      name: "Developer", 
      price: "$99/month", 
      description: "For large businesses", 
      buttonText: "Buy Now", 
      extraDescriptions: [
        "Nec feugiat nisl", 
        "Pharetra massa", 
        "Massa ultricies mi"
      ]
    },
    { 
      name: "Ultimate", 
      price: "$199/month", 
      description: "For enterprises", 
      buttonText: "Buy Now", 
      extraDescriptions: [
        "Nulla at volutpat dola", 
        "Pharetra massa", 
        "Massa ultricies mi"
      ]
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div 
        className="container mx-auto text-center flex items-center mb-4" 
        data-aos="fade-right"
      >
        <h2 className="text-2xl text-gray-600">Prices</h2>
        <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
      </div>
      <h2 
        className="text-4xl font-semibold mb-4" 
        data-aos="zoom-in"
      >
        What We Do Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-6 min-h-[400px] flex flex-col justify-between text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Adds staggered animation delay
          >
            <div className="flex-grow flex flex-col justify-center">
              <h3
                className={`text-2xl font-semibold text-gray-400 mb-4 ${
                  plan.name === "Business" ? "bg-orange-500 text-white" : "bg-gray-100"
                } p-4 rounded-lg w-full text-center`}
              >
                {plan.name}
              </h3>

              <p className="text-xl mb-4">
                <span className="text-black font-semibold">{plan.price.split("/")[0]}</span>
                <span className="text-gray-500">/{plan.price.split("/")[1]}</span>
              </p>

              <p className="text-gray-600 mb-4">{plan.description}</p>

              <div className="mb-6">
                {plan.extraDescriptions.map((desc, idx) => (
                  <p key={idx} className="text-gray-600">{desc}</p>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
