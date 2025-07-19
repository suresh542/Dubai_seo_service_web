import React, { useEffect, useState } from "react";
import dubaiImage1 from "../assets/marina.png"
import dubaiImage2 from "../assets/downtown.png"
import dubaiImage3 from "../assets/bay.png"
import dubaiImage4 from "../assets/quoz.png"
import dubaiImage5 from "../assets/jbr.png"

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
    <div>
      <div className=" bg-white flex flex-col items-center justify-center py-5 md:py-10 px-6 md:px-15 text-gray-800">
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
      <div
        className="transition-transform duration-1000 ease-in-out flex"
       
      >
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
    </div>
  );
}
