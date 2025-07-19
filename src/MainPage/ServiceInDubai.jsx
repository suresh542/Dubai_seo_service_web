import React, { useEffect, useState } from "react";
import dubaiImage1 from "../assets/marina.png";
import dubaiImage2 from "../assets/downtown.png";
import dubaiImage3 from "../assets/bay.png";
import dubaiImage4 from "../assets/quoz.png";
import dubaiImage5 from "../assets/jbr.png";
import bgCircle from "../assets/bgCircle.png";
import { FaCheckCircle } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

const places = [
  {
    name: "Dubai Marina",
    description: "SEO for hotels, real estate, and tourism businesses.",
    image: dubaiImage1,
  },
  {
    name: "Downtown Dubai",
    description: "E-commerce SEO for high-end brands and shopping centers.",
    image: dubaiImage2,
  },
  {
    name: "Business Bay",
    description: "SEO for tech startups and financial firms.",
    image: dubaiImage3,
  },
  {
    name: "Al Quoz & Dubai Silicon Oasis",
    description: "SEO for industrial and tech businesses.",
    image: dubaiImage4,
  },
  {
    name: "Jumeirah & JBR",
    description: "SEO for lifestyle, hospitality, and wellness brands.",
    image: dubaiImage5,
  },
];

export default function ServiceInDubai() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % places.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 md:py-10">
      <div className=" bg-white flex flex-col items-center justify-center  px-6 md:px-15 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Serving Businesses Across Dubai
        </h1>
        <p className="text-gray-600 mb-6 text-start">
          As a leading SEO company in Dubai, we understand the unique digital
          landscape of the city’s diverse business hubs. Whether you’re a luxury
          retailer in Downtown Dubai, a tech startup in Business Bay, or a
          restaurant in Dubai Marina, our Dubai-focused SEO strategies ensure
          you stand out in local search results.
        </p>

        <div className="w-full  md:h-[600px] rounded overflow-hidden ">
          <p className="text-2xl text-center font-bold mb-2">
            Our Key Service Areas in Dubai
          </p>
          <div>
            <iframe
              title="Dubai Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351250.1323503145!2d55.058467120759225!3d25.04603365131748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1752908850273!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" w-full h-[300px] md:h-[600px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden relative mb-10 hidden md:block ">
        <div className="transition-transform duration-1000 ease-in-out flex">
          {places.map((place, i) => (
            <div
              key={i}
              className="flex w-full h-20  mx-2 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${offset * 100}%)` }}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-20 h-full object-cover"
              />
              <div className="p-3 flex flex-col justify-center">
                <h3 className="text-sm font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-xs">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 text-center px-10 mb-20">
        <p className="text-black mb-3 text-lg">
          We tailor our SEO strategies to the needs of Dubai’s dynamic market,
          helping businesses achieve top search rankings and drive local
          traffic.
        </p>
        <p className="text-black mb-3 text-md">
          Want to see similar results for your business?
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-2 rounded-md font-semibold shadow-md">
          Get a Free SEO Audit
        </button>
      </div>

      <div
        className="relative bg-[#EA7D30] text-white  p-5 md:p-10 rounded-xl shadow-xl w-full md:max-w-6xl mx-auto overflow-hidden bg-no-repeat bg-right bg-contain min-h-[400px]"
        style={{ backgroundImage: window.innerWidth > 1024 ?`url(${bgCircle})`:"none" }}
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-300 opacity-30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-700 opacity-20 rounded-full blur-3xl -z-10"></div>

        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Grow Your Business with SEO in Dubai?
          </h2>
          <p className="text-white w-full md:w-[600px]">
            Don’t let your competitors outrank you. Take the first step toward
            higher rankings, more traffic, and increased revenue with our expert
            SEO services.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Get a Free SEO Audit Today!
            </h3>
            <ul className=" list-inside space-y-1 text-white/90 list-none">
              <li className="flex">
                <FaCheckCircle size={15} className="mx-2 mt-1" />
                Personalized strategy for your business
              </li>
              <li className="flex">
                <FaCheckCircle size={15} className="mx-2 mt-1" />
                Competitor analysis & keyword opportunities
              </li>
              <li className="flex">
                <FaCheckCircle size={15} className="mx-2 mt-1" />
                No-obligation consultation with an SEO expert
              </li>
            </ul>
          </div>

          <div className="md:flex space-x-10  space-y-5  text-sm text-white my-10">
            <div className="space-y-2 w-full md:w-fit rounded-lg p-3 border border-white">
              <p className="flex items-center">
                <PiPhoneCallFill size={15} className="me-2"/>
                +971 52 283 1655
              </p>
              <p className="flex items-center"><IoIosMail size={15} className="me-2"/> info@brandstory.in</p>
            </div>
            <div className="space-y-2 rounded-lg w-full md:w-[300px] p-3 border border-white">
              <p className="flex items-start">
                <HiMapPin  size={30} className="me-2" />
                G5, Al Meheri Plaza, opp DBC Building,
                Al Khabaisi Area, Deira Dubai - 81577,
                United Arab Emirates
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center items-center">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md transition">
              Request a Free SEO Audit
            </button>
            <p className="mt-2 text-md text-center text-white/80">
              Limited-Time Offer: Get a FREE SEO strategy session when you sign
              up this month!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
