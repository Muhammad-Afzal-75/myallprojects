// src/components/Freebook.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import Card from "./Card";

const Freebook = ({ requireAuth = false }) => {
  const { authUser } = useAuth();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect to login only if authentication is required
  if (requireAuth && !authUser) {
    return <Navigate to="/signup" replace />;
  }

  useEffect(() => {
    const getBooks = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;
        const res = await axios.get(
          `${API_URL}/book?category=free`
        );
        const data = res.data.filter((item) => item.category === "free");
        setBook(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 my-10 space-y-8">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl font-bold">Free Books</h1>
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 my-10 space-y-8">
      {/* Section Heading */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-bold">Free Books</h1>
        <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
          Discover our selection of free books. Read anytime, anywhere — totally free.
        </p>
      </div>

      {/* Slider */}
      {book.length > 0 ? (
        <Slider {...settings}>
          {book.map((item, index) => (
            <div key={index} className="p-3">
              <div className="w-72 mx-auto">
                <Card item={item} />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No free books available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Freebook;