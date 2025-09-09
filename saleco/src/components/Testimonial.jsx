import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'Software Engineer',
    feedback: 'This platform is fantastic! It has completely transformed the way I manage my projects.',
    avatar: '../../public/images/img/testimonials/testimonials-1.jpg',
  },
  {
    name: 'John Smith',
    title: 'Product Manager',
    feedback: 'Excellent user experience and very responsive customer support!',
    avatar: '../../public/images/img/testimonials/testimonials-2.jpg',
  },
  {
    name: 'Emily Johnson',
    title: 'UX Designer',
    feedback: 'I love the intuitive design and seamless integrations offered.',
    avatar: '../../public/images/img/testimonials/testimonials-3.jpg',
  },
  {
    name: 'Michael Brown',
    title: 'Business Analyst',
    feedback: 'This tool has improved my teams productivity significantly.',
    avatar: '../../public/images/img/testimonials/testimonials-4.jpg',
  },
  {
    name: 'Sarah Williams',
    title: 'Marketing Specialist',
    feedback: 'Highly recommended! Great features and ease of use.',
    avatar: '../../public/images/img/testimonials/testimonials-5.jpg',
  },
];

const StarRating = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFD700"  // Gold color for the star
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#FFD700"  // Yellow border for the star
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.998 3.5l1.898 5.827h6.124l-4.954 3.596 1.897 5.827L11.998 15.65 7.13 18.75l1.898-5.827L4.074 9.327h6.124L11.998 3.5z"
        />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ avatar, name, title, feedback }) => (
  <div
    className="bg-white shadow-lg rounded-lg p-6 max-w-sm"
    data-aos="fade-up" // AOS Animation
  >
    <img
      src={avatar}
      alt={name}
      className="w-16 h-16 rounded-full mx-auto"
    />
    <h3 className="text-lg font-semibold text-center mt-4">{name}</h3>
    <p className="text-sm text-gray-600 text-center">{title}</p>
    <div className="flex justify-center my-2">
      <StarRating />
    </div>
    <p className="text-gray-700 mt-3 text-center">{feedback}</p>
  </div>
);

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: dots => (
      <div style={{
        padding: '15px 0',
        position: 'relative',
        marginTop: '20px',
      }}>
        <ul style={{ margin: '0px', color: 'orange', textAlign: 'center' }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: 'orange',
          borderRadius: '50%',
        }}
      />
    )
  };

  return (
    <div className="bg-white py-12" data-aos="fade-in">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl text-gray-600" data-aos="fade-right">Testimonial</h2>
        <div className="ml-4 h-0.5 mt-3 w-[90px] bg-orange-600" data-aos="fade-left"></div>
      </div>
      <h2 className="text-4xl font-semibold mb-4" data-aos="zoom-in">What they are saying about us</h2>
      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
