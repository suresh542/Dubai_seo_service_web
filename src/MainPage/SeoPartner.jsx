import { Globe, BarChart, Lightbulb, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SeoImg1 from "../assets/business.png";
import Hexa1 from "../assets/Hexa1.png";
import Hexa2 from "../assets/Hexa2.png";
import Hexa3 from "../assets/Hexa3.png";
import Hexa4 from "../assets/Hexa4.png";
import Hexa5 from "../assets/Hexa5.png";
import Hexa6 from "../assets/Hexa6.png";

export default function SeoPartner() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const seoCards = [
    {
      icon: <Globe />,
      title: "Local Expertise in Dubai’s Market",
      color: "text-red-500",
      content: [
        "Deep understanding of Dubai’s business environment, search trends, and customer behavior.",
        "Specialized strategies for local businesses in real estate, hospitality, and healthcare.",
      ],
    },
    {
      icon: <BarChart />,
      title: "Proven Results with Data-Driven SEO",
      color: "text-indigo-600",
      content: [
        "100+ successful SEO campaigns across industries.",
        "Client success stories with significant traffic growth and conversions.",
      ],
    },
    {
      icon: <Lightbulb />,
      title: "Transparent & Insightful Reporting",
      color: "text-purple-600",
      content: [
        "Monthly reports with insights and actionable recommendations.",
        "24/7 access to dashboards.",
      ],
    },
    {
      icon: <Target />,
      title: "Customized SEO Strategies",
      color: "text-orange-500",
      content: [
        "Tailor-made strategies based on your goals, target audience, and competitors.",
        "No cookie-cutter approaches.",
      ],
    },
    {
      icon: <Users />,
      title: "Dedicated Team of SEO Experts",
      color: "text-yellow-500",
      content: [
        "Certified SEO pros with Dubai expertise.",
        "We keep up with Google algorithm updates.",
      ],
    },
  ];

  const SEOProcess = [
    "Understanding Your Business",
    "Website Architecture Planning",
    "Competitor Audit",
    "Keyword Research",
    "On Page Optimization",
    "Content Optimization",
    "Topical Authority Optimization",
    "UI UX Optimization",
    "Conversion Rate Optimization - CRO",
    "Technical Optimization",
    "Off Page Management",
    "Monitoring & Reporting",
  ];

  const SEOContent = {
    0: {
      title: "Understanding Your Business",
      image: SeoImg1,
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    1: {
      title: "Website Architecture Planning",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    2: {
      title: "Competitor Audit",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    3: {
      title: "Keyword Research",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    4: {
      title: "On Page Optimization",
      image: SeoImg1,
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    5: {
      title: "Content Optimization",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    6: {
      title: "Topical Authority Optimization",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    7: {
      title: "UI UX Optimization",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    8: {
      title: "Conversion Rate Optimization - CRO",
      image: SeoImg1,
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    9: {
      title: "Technical Optimization",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    10: {
      title: "Off Page Management",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
    11: {
      title: "Monitoring & Reporting",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
    },
  };

  const handleClick = (newIndex) => {
    setDirection(newIndex > selectedIndex ? 1 : -1);
    setSelectedIndex(newIndex);
  };

  const { title, image, description } = SEOContent[selectedIndex];

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

  return (
    <div className="px-4 py-12 md:px-12 lg:px-20 bg-white ">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us as Your SEO Partner in Dubai?
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At Brandstory, we don’t just offer SEO services—we deliver real,
          measurable results that help businesses thrive in Dubai’s competitive
          digital landscape. Here’s why top brands trust us:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 mx-2 md:mx-15">
        <div>
          <img src={Hexa1} alt="" />
        </div>
        <div>
          <img src={Hexa2} alt="" />
        </div>
        <div>
          <img src={Hexa3} alt="" />
        </div>
        <div>
          <img src={Hexa4} alt="" />
        </div>
        <div>
          <img src={Hexa5} alt="" />
        </div>

        <div
          className="relative my-10 md:my-0 w-full  flex items-center  md:px-10 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${Hexa6})` }}
        >
          <div className="text-center px-10">
            <h4 className="text-xl text-black font-semibold mb-4">
              Partner with us and dominate search rankings in Dubai!
            </h4>
            <button className="bg-violet-500 text-white px-6 py-2 rounded-md font-medium hover:bg-violet-600 transition">
              Get a Free SEO Audit
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white min-h-screen py-5 mb:py-10 px-2 md:px-16">
          <h2 className="text-3xl md:text-4xl w-full  font-bold text-center my-5 md:my-10  inline-block">
            Our Comprehensive SEO Process
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 place-content-center space-y-4 text-gray-600 text-lg">
              {SEOProcess.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-200 ${
                    selectedIndex === index
                      ? "text-[#845ef7]"
                      : "text-gray-500 hover:text-[#845ef7]"
                  }`}
                >
                  <span
                    className={`text-xs w-3 h-3 rounded-full ${
                      selectedIndex === index ? "bg-[#845ef7]" : "bg-gray-300"
                    }`}
                  >
                    <FaCircle />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>



            <div className="w-full md:w-1/2">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <div className="bg-[#f3ecff] p-5 md:p-10 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">{title}</h3>
                    <img src={image} alt={title} className="rounded-xl mb-4" />
                    <p className="text-gray-700 text-base">{description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
