import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function SeoService() {
  const services = [
    {
      title: "Keyword Research & Strategy",
      description:
        "We identify high-value keywords that align with your target audience's search intent, ensuring your business appears in relevant searches.",
      points: [
        "Competitor analysis & market research",
        "Long-tail keyword strategy for high conversion rates",
        "Industry-specific keyword optimization (e.g., SEO for luxury brands in Dubai)",
      ],
      bg: "bg-sky-50",
    },
    {
      title: "On-Page Optimization",
      description:
        "Our team fine-tunes your website’s content, structure, and metadata to improve rankings and user experience.",
      points: [
        "Optimized meta titles, descriptions, and headers",
        "SEO-friendly content enhancements",
        "Internal linking & URL structuring",
      ],
      bg: "bg-amber-50",
    },
    {
      title: "Technical SEO",
      description:
        "We ensure your website is fast, mobile-friendly, and technically sound for search engine crawlers.",
      points: [
        "Website speed optimization & Core Web Vitals improvements",
        "Schema markup for better search visibility",
        "Mobile responsiveness & secure HTTPS implementation",
      ],
      bg: "bg-red-50",
    },
    {
      title: "Local SEO (Google My Business & Citations)",
      description:
        "Dominate local search results and attract nearby customers with expert local SEO in Dubai.",
      points: [
        "Google My Business optimization for Dubai-based businesses",
        "Local citations & NAP (Name, Address, Phone) consistency",
        "Customer review management & local backlink strategies",
      ],
      bg: "bg-slate-50",
    },
    {
      title: "Content Marketing & SEO Copywriting",
      description:
        "Engaging, value-driven content that boosts rankings and keeps your audience engaged.",
      points: [
        "Blog writing with Dubai SEO best practices",
        "SEO-optimized landing pages & service pages",
        "Content tailored for real estate SEO in Dubai, healthcare, e-commerce, and more",
      ],
      bg: "bg-indigo-50",
    },
    {
      title: "Ethical Link Building",
      description:
        "We build high-quality, white-hat backlinks to enhance your website’s authority.",
      points: [
        "Guest posting & outreach campaigns",
        "Niche-specific backlinks for Dubai industries",
        "Brand mentions & PR-driven link acquisition",
      ],
      bg: "bg-pink-50",
    },
    {
      title: "Performance Tracking & Reporting",
      description:
        "We provide transparent SEO reports with clear insights into rankings, traffic, and ROI.",
      points: [
        "Google Analytics & Search Console monitoring",
        "Monthly SEO performance reports with actionable insights",
        "Ongoing strategy refinement based on data-driven decisions",
      ],
      bg: "bg-amber-50",
    },
  ];
  return (
    <div className="min-h-screen bg-white py-12 px-5 sm:px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Our Comprehensive SEO Services In Dubai
      </h2>
      <p className="text-center  mx-auto text-gray-600 mb-12">
        At Brandstory, we offer a full suite of Dubai SEO services designed to
        help businesses rank higher, attract quality traffic, and maximize ROI.
        Whether you're a restaurant in Dubai Marina or an e-commerce store in
        Downtown Dubai, our customized strategies deliver real results.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 mx-2 md:mx-15">
        {services.map((service, idx) => (
          <div key={idx} className={`${service.bg} p-4 md:p-10 rounded-lg  md:mx-5`}>
            <h4 className="text-2xl font-semibold text-black mb-2">
              {service.title}
            </h4>
            <p className="text-md  text-black mb-5">{service.description}</p>
            <ul className=" list-inside text-gray-700 text-sm space-y-1 list-none text-center">
              {service.points.map((point, i) => (
                <li key={i} className="flex  text-start mb-2">
                  <FaCheckCircle size={15} className="mx-2 mt-1" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <ul className="bg-gray-900 p-4 py-10 md:p-10 rounded-lg md:mx-5 grid place-content-center">
             <li className=" ">
                <div className="text-center">
                  <h4 className="text-xl text-white font-semibold mb-4">
                    Ready to Elevate Your Online Presence?
                  </h4>
                  <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200">
                    Get a Free SEO Audit
                  </button>
                </div>
              </li>
        </ul>
      </div>
    </div>
  );
}
