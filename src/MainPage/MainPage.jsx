import dubaiImage from "../assets/dubaiImage.png";
import ClientFeedback from "./ClientFeedback";
import CompetitiveMarket from "./CompetitiveMarket";
import FAQ from "./FAQ";
import SeoPartner from "./SeoPartner";
import SeoService from "./SeoService";
import ServiceInDubai from "./ServiceInDubai";

export default function MainPage() {
  return (
    <div>
      <div className="min-h-screen py-5 flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Top-Rated SEO Company in <br className="hidden md:block" />
              Dubai | Drive Organic Growth
            </h1>
            <p className="text-lg text-gray-300 font-semibold">
                Boost Your Online Presence with Data-Driven SEO Strategies
            </p>
            <p className="text-white text-md">
              We help businesses in Dubai dominate search rankings with
              cutting-edge, ROI-focused SEO solutions. Increase visibility,
              attract qualified leads, and grow your revenue with our expert
              team.
            </p>
            <ul className="text-md text-gray-300 space-y-2">
              <li>
                📍 Dubai-based experts | Proven results | Tailored strategies
              </li>
              <li>✅ 97% client retention rate | 🚀 50K+ keywords ranked</li>
            </ul>
            <button className="mt-4 bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition">
              Get a Free SEO Audit
            </button>
          </div>

          
          <div className="md:w-1/2 flex justify-center ">
            <img
              src={dubaiImage}
              alt="Dubai Skyline"
              className="max-w-98  h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        <CompetitiveMarket/>
      </div>
      <div>
        <SeoService/>
      </div>
      <div>
        <SeoPartner/>
      </div>
      <div>
        <ClientFeedback/>
      </div>
      <div>
        <ServiceInDubai/>
      </div>
      <div>
        <FAQ/>
      </div>
    </div>
  );
}
