import React, { useEffect, useState } from "react";

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../../public/data/Blog.json") // Adjust path if needed
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);

  // Function to navigate to Home page
  const goToHome = () => {
    window.location.href = "/"; // Update this path if your home page URL is different
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section with Gray Background */}
      <div className="bg-gray-800 p-6 rounded-lg text-center mb-10">
      <br />
        <h2 className="text-4xl font-bold text-white">Blog</h2><br />
        <p className="text-lg text-white mt-2">
          Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat
          quibusdam quia assumenda numquam molestias.
        </p>
        <div className="text-center mt-8 flex items-center justify-center -space-x-4">
          
        <button
          onClick={goToHome}
          className=" text-orange-700 px-6 py-3 rounded-full font-semibold  transition duration-300"
        >
           Home
        </button>
        <p className="text-white "> / blog</p>
      </div>
      </div>

  
      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Blog Image */}
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            
            {/* Blog Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <div className="flex items-center mt-4">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h4 className="text-gray-700 font-medium">{post.author}</h4>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
          
        ))}
        
      </div>
      

      
  
    </div>
    
  );
}

export default Blog;
