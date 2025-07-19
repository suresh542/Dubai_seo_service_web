import {
  FaEye,
  FaChartBar,
  FaBullhorn,
  FaTrophy,
  FaMoneyBillAlt,
  FaUsers,
  FaDollarSign,
  FaGavel,
  FaChartLine,
} from "react-icons/fa";

export default function CompetitiveMarket() {
  const importanceSEO = [
    {
      title: "Increased Visibility",
      icon: <FaEye size={30} />,
      description:
        "SEO helps businesses in Dubai to rank higher in search engine results, making them more visible to potential customers.",
      bg: "bg-red-400",
    },
    {
      title: "Targeted Traffic",
      icon: <FaChartBar size={30} />,
      description:
        "SEO helps businesses to attract targeted traffic to their websites, increasing the chances of conversions.",
      bg: "bg-indigo-900",
    },
    {
      title: "Brand Awareness",
      icon: <FaBullhorn size={30} />,
      description:
        "SEO helps businesses to build brand awareness and establish themselves as leaders in their industry.",
      bg: "bg-violet-500",
    },
    {
      title: "Competitive Advantage",
      icon: <FaTrophy size={30} />,
      description:
        "SEO helps businesses to gain a competitive advantage over their rivals.",
      bg: "bg-blue-400",
    },
    {
      title: "Cost-Effective",
      icon: <FaMoneyBillAlt size={30} />,
      description:
        "SEO is a cost-effective marketing strategy that can generate a high ROI.",
      bg: "bg-orange-400",
    },
  ]

  const benefitSeo = [
    {
      title: "Increased Website Traffic",
      icon: <FaChartBar  size={30} />,
      description:
        "SEO can help to increase website traffic from organic search results.",
      bg: "bg-red-400",
    },
    {
      title: "Improved Conversion Rates",
      icon: <FaUsers size={30} />,
      description:
        "SEO can help to improve conversion rates by attracting targeted traffic to your website.",
      bg: "bg-indigo-900",
    },
    {
      title: "Higher ROI",
      icon: <FaDollarSign size={30} />,
      description:
        "SEO is a cost-effective marketing strategy that can generate a high ROI.",
      bg: "bg-violet-500",
    },
    {
      title: "Brand Authority",
      icon: <FaGavel size={30} />,
      description:
        "SEO can help to build brand authority and establish your business as a leader in your industry.",
      bg: "bg-blue-400",
    },
    {
      title: "Long-Term Results",
      icon: <FaChartLine size={30} />,
      description:
        "SEO is a long-term strategy that can provide sustainable results for your business..",
      bg: "bg-orange-400",
    },
    
  ]



  return (
    <section className="bg-white py-5 md:py-16 px-6 md:px-15 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl pb-3 font-semibold mb-4">
          Dominate Dubai’s Competitive Market With Expert SEO Solutions
        </h2>
        <p className="text-gray-600 mb-6 text-start">
          In Dubai’s fast-paced digital landscape, standing out among
          competitors is a challenge. Businesses struggle with high competition,
          shifting search algorithms, and the need for a strong online presence
          to attract local and international customers.
        </p>
        <p className="text-gray-600 mb-12 text-start">
          As a leading SEO company in Dubai, we specialize in tailored Dubai SEO
          services that drive measurable growth. With years of experience
          optimizing businesses in diverse industries, we understand the unique
          challenges of the Dubai market. Our data-driven strategies ensure your
          brand ranks higher, attracts the right audience, and achieves
          long-term success.
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-8">
            Importance Of SEO In Dubai
          </h3>

          <div className="flex justify-center">
            <div className="flex justify-center flex-wrap  gap-6  ">
              {importanceSEO.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 p-6 rounded-xl max-w-sm `}
                >
                  <div
                    className={`w-16 h-16 text-white flex items-center justify-center  rounded-md mb-4 ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-start font-bold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-800 text-start text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        <div>
              <h3 className="text-2xl pt-5 font-semibold mt-8 mb-8">Benefits of SEO</h3>

       <div className='center'> 
         <div className="flex justify-center flex-wrap gap-6">
          {benefitSeo.map((item, index) => (
            <div key={index} className={`bg-gray-100 p-6 rounded-xl max-w-sm `}>
              <div className={`w-16 h-16 text-white flex items-center justify-center  rounded-md mb-4 ${item.bg}`}>{item.icon}</div>
              <h4 className="text-lg text-start font-bold text-black mb-2">{item.title}</h4>
              <p className="text-gray-800 text-start text-sm leading-relaxed">{item.description}</p> 
            </div>
            
          ))}
        </div>
       </div>
          </div>
      </div>
    </section>
  );
}
