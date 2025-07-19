import { useState } from "react";

export default function FAQ() {
  const tabs = [
    { name: "General FAQ" },
    { name: "Dubai-Specific SEO FAQs" },
    { name: "Pricing & Process FAQs" },
    { name: "Company & Expertise FAQs" },
  ];

  const faqs = {
    "General FAQ": [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy, and results depend on several factors, including industry competition, website history, and the effectiveness of the SEO strategy. Typically, you may start seeing noticeable improvements in rankings, traffic, and conversions within 3 to 6 months. However, more competitive industries may take 6 to 12 months or longer for significant results. Consistency and quality in SEO efforts are key to sustained growth.",
      },
      {
        question: "How do you measure the success of your SEO campaigns?",
        answer: [
          "We track SEO success using key performance indicators (KPIs), such as:",
          [
            "Organic Traffic: The number of visitors from search engines.",
            "Keyword Rankings: Improvements in rankings for targeted keywords.",
            "Click-Through Rate (CTR): The percentage of users who click on search results.",
            "Domain Authority & Backlinks: Growth in high-quality backlinks.",
          ],
          "Conversions & ROI: The impact on leads, sales, or other business goals.",
          "We use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to monitor performance and provide detailed reports.",
        ],
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer:[
            [
            "On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the 'inside' of your store.",
            "Off-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions. It’s like building your store’s reputation through word-of-mouth and partnerships."
            ],
            "Both are essential for a well-rounded SEO strategy."
        ]
          
      },
      {
        question: "Do you provide technical SEO audits?",
        answer:[
            "Yes, we offer comprehensive technical SEO audits to identify and resolve issues that may affect search rankings. Our audits include:",
            [
                "Website speed and performance analysis",
                "Mobile-friendliness and Core Web Vitals assessment",
                "Indexing and crawlability checks",
                "Structured data and schema implementation",
                "Fixing broken links, redirects, and duplicate content"
            ],
            "Our team ensures your website is technically optimized for better search engine visibility.",
        ]
      },
       {
        question: "Do you offer content marketing services as part of your SEO packages?",
        answer:[
            "Yes, content marketing is an essential part of our SEO strategy. We provide:",
            [
                "SEO-optimized blog writing to improve organic traffic",
                "Website content optimization for better engagement and rankings",
                "Infographics, videos, and visual content to enhance user experience",
                "Content strategy development based on keyword research and competitor analysis",
            ],
            "High-quality content plays a crucial role in ranking well on search engines, and we integrate it seamlessly with our SEO efforts.",
        ]
      },
       {
        question: "What kind of reporting do you provide?",
        answer:[
            "We provide detailed, transparent, and data-driven reports, including:",
            [
                "Monthly SEO performance reports with traffic, rankings, and conversions",
                "Google Analytics & Search Console insights",
                "Backlink analysis and competitor comparisons",
                "Recommendations for ongoing optimization",
            ],
            "Our reports ensure you understand how your SEO campaign is progressing and where improvements can be made.",
        ]
      },
       {
        question: "Do you offer SEO for E-commerce websites?",
        answer:[
            "Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:",
            [
                "Product page optimization for better rankings",
                "Category structure and internal linking strategies",
                "Technical SEO for platforms like Shopify, WooCommerce, and Magento",
                "Schema markup for rich snippets (e.g., product reviews, pricing)",
            ],
            "We tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.",
        ]
      },
    ],
    "Dubai-Specific SEO FAQs": [
      {
        question: "Do you offer SEO for E-commerce websites?",
        answer:[
            "Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:",
            [
                "Product page optimization for better rankings",
                "Category structure and internal linking strategies",
                "Technical SEO for platforms like Shopify, WooCommerce, and Magento",
                "Schema markup for rich snippets (e.g., product reviews, pricing)",
            ],
            "We tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.",
        ]
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer:[
            [
            "On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the 'inside' of your store.",
            "Off-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions. It’s like building your store’s reputation through word-of-mouth and partnerships."
            ],
            "Both are essential for a well-rounded SEO strategy."
        ]
          
      },
       {
        question: "How do you measure the success of your SEO campaigns?",
        answer: [
          "We track SEO success using key performance indicators (KPIs), such as:",
          [
            "Organic Traffic: The number of visitors from search engines.",
            "Keyword Rankings: Improvements in rankings for targeted keywords.",
            "Click-Through Rate (CTR): The percentage of users who click on search results.",
            "Domain Authority & Backlinks: Growth in high-quality backlinks.",
          ],
          "Conversions & ROI: The impact on leads, sales, or other business goals.",
          "We use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to monitor performance and provide detailed reports.",
        ],
      },
    ],
    "Pricing & Process FAQs": [
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer:[
            [
            "On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the 'inside' of your store.",
            "Off-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions. It’s like building your store’s reputation through word-of-mouth and partnerships."
            ],
            "Both are essential for a well-rounded SEO strategy."
        ]
          
      },
      {
        question: "Do you offer SEO for E-commerce websites?",
        answer:[
            "Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:",
            [
                "Product page optimization for better rankings",
                "Category structure and internal linking strategies",
                "Technical SEO for platforms like Shopify, WooCommerce, and Magento",
                "Schema markup for rich snippets (e.g., product reviews, pricing)",
            ],
            "We tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.",
        ]
      },
       {
        question: "How do you measure the success of your SEO campaigns?",
        answer: [
          "We track SEO success using key performance indicators (KPIs), such as:",
          [
            "Organic Traffic: The number of visitors from search engines.",
            "Keyword Rankings: Improvements in rankings for targeted keywords.",
            "Click-Through Rate (CTR): The percentage of users who click on search results.",
            "Domain Authority & Backlinks: Growth in high-quality backlinks.",
          ],
          "Conversions & ROI: The impact on leads, sales, or other business goals.",
          "We use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to monitor performance and provide detailed reports.",
        ],
      },
    ],
    "Company & Expertise FAQs": [
      {
        question: "How do you measure the success of your SEO campaigns?",
        answer: [
          "We track SEO success using key performance indicators (KPIs), such as:",
          [
            "Organic Traffic: The number of visitors from search engines.",
            "Keyword Rankings: Improvements in rankings for targeted keywords.",
            "Click-Through Rate (CTR): The percentage of users who click on search results.",
            "Domain Authority & Backlinks: Growth in high-quality backlinks.",
          ],
          "Conversions & ROI: The impact on leads, sales, or other business goals.",
          "We use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to monitor performance and provide detailed reports.",
        ],
      },
     {
        question: "What is the difference between on-page and off-page SEO?",
        answer:[
            [
            "On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the 'inside' of your store.",
            "Off-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions. It’s like building your store’s reputation through word-of-mouth and partnerships."
            ],
            "Both are essential for a well-rounded SEO strategy."
        ]
          
      },
      {
        question: "Do you offer SEO for E-commerce websites?",
        answer:[
            "Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:",
            [
                "Product page optimization for better rankings",
                "Category structure and internal linking strategies",
                "Technical SEO for platforms like Shopify, WooCommerce, and Magento",
                "Schema markup for rich snippets (e.g., product reviews, pricing)",
            ],
            "We tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.",
        ]
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="px-4 py-12 md:px-12 lg:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-start gap-3 mb-8  mx-5 md:mx-20 ">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-1 text-xs md:text-sm font-medium  transition ${
              activeTab === tab.name
                ? "text-black border-b-3 border-violet-500"
                : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="space-y-6 mx-5 md:mx-20">
        {faqs[activeTab].map((faq, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-xs hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-black">
              {faq.question}
            </h3>

            {Array.isArray(faq.answer) ? (
              faq.answer.map((item, i) =>
                Array.isArray(item) ? (
                  <ul
                    key={i}
                    className="list-disc list-inside text-gray-900 space-y-1"
                  >
                    {item.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-gray-900">
                    {item}
                  </p>
                )
              )
            ) : (
              <p className="text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
