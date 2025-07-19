import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { ImQuotesLeft } from "react-icons/im";
import ClinetImg from "../assets/Clinet-1.png";

export default function ClientFeedback() {
  const testimonials = [
    {
      title: "E-Commerce SEO in Downtown Dubai",
      client: "Leading Fashion Retailer in Dubai",
      results: [
        "150% increase in organic traffic within 6 months",
        "85% boost in online sales through targeted SEO campaigns",
        '#1 ranking for high-competition keywords like "luxury fashion in Dubai"',
      ],
      quote:
        "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
      author: "Mighty Warner",
      image: ClinetImg,
    },
    {
      title: "E-Commerce SEO in  Dubai",
      client: "Leading Fashion Retailer in Dubai",
      results: [
        "150% increase in organic traffic within 6 months",
        "85% boost in online sales through targeted SEO campaigns",
        '#1 ranking for high-competition keywords like "luxury fashion in Dubai"',
      ],
      quote:
        "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
      author: "Mighty Warner",
      image: ClinetImg,
    },
    {
      title: "E-Commerce SEO in Downtown Dubai",
      client: "Leading Fashion Retailer in Dubai",
      results: [
        "150% increase in organic traffic within 6 months",
        "85% boost in online sales through targeted SEO campaigns",
        '#1 ranking for high-competition keywords like "luxury fashion in Dubai"',
      ],
      quote:
        "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
      author: "Mighty Warner",
      image: ClinetImg,
    },
    {
      title: "E-Commerce SEO in Downtown Dubai",
      client: "Leading Fashion Retailer in Dubai",
      results: [
        "150% increase in organic traffic within 6 months",
        "85% boost in online sales through targeted SEO campaigns",
        '#1 ranking for high-competition keywords like "luxury fashion in Dubai"',
      ],
      quote:
        "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
      author: "Mighty Warner",
      image: ClinetImg,
    },
    {
      title: "E-Commerce SEO in Downtown Dubai",
      client: "Leading Fashion Retailer in Dubai",
      results: [
        "150% increase in organic traffic within 6 months",
        "85% boost in online sales through targeted SEO campaigns",
        '#1 ranking for high-competition keywords like "luxury fashion in Dubai"',
      ],
      quote:
        "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
      author: "Mighty Warner",
      image: ClinetImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div>
      <div className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10">
          Real businesses. Real results. See how our Dubai SEO strategies have
          helped brands grow.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="text-black bg-white rounded-full p-2 me-10 hover:text-gray-600 text-2xl md:block hidden"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6 md:items-center md:gap-6"
              >
                <div className="w-full md:mx-3 overflow-hidden md:flex bg-white">
                  <img
                    src={testimonials[current].image}
                    alt="testimonial"
                    className="w-full md:w-75 rounded-md object-cover me-5"
                  />
                  <div className="text-left mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold">
                      {testimonials[current].title}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Client:</strong> {testimonials[current].client}
                    </p>
                    <div className="mb-4">
                      <strong>Results:</strong>
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                        {testimonials[current].results.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <hr className="text-gray-300 mb-3 me-5 " />
                    <p>
                      <ImQuotesLeft />
                    </p>
                    <p className=" text-gray-800">
                      {testimonials[current].quote}”
                    </p>
                    <p className="mt-2 font-medium text-gray-900">
                      {" "}
                      {testimonials[current].author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextSlide}
              className="text-black bg-white rounded-full p-2 ms-10 hover:text-gray-600 text-2xl md:block hidden"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`rounded-full bg-gray-300 transition-all duration-500 ease-in-out ${
                  index === current ? "w-10 h-3 " : "w-3 h-3  "
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-700 mb-3">
            Want to see similar results for your business?
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-2 rounded-md font-semibold shadow-md">
            Get a Free SEO Audit
          </button>
        </div>
      </div>







      <div className="bg-indigo-950 text-white py-15 flex flex-col items-center justify-center text-center mb-15">
        <h1 className="text-3xl md:text-3xl font-bold mb-6">
          Our Experience Extends Across All Social Media Channels,
          <br />
          Ensuring Your Complete Presence.
        </h1>

        <div className="flex justify-center items-center space-x-[-10px] my-5">
          <div className="relative z-4 bg-white rounded-full p-4 border-2 border-black">
            <FaXTwitter className="text-black text-3xl" />
          </div>
          <div className="relative z-3 bg-white rounded-full p-4 border-2 border-black">
            <FaLinkedin className="text-blue-600 text-3xl" />
          </div>
          <div className="relative z-2 bg-white rounded-full p-4 border-2 border-black">
            <FaInstagram className="text-pink-500 text-3xl" />
          </div>
          <div className="relative z-1 bg-white rounded-full p-4 border-2 border-black">
            <FaFacebook className="text-blue-700 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
