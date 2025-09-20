import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function FAQSection() {
  const [active, setActive] = useState(null);

  const faqData = [
    { q: "1. What platform do you use for online classes?", a: "We utilize interactive platforms like Google classroom..." },
    { q: "2. Are there any materials I need to buy?", a: "No! All learning materials are included in your course fees..." },
    { q: "3. Do you offer placements or job opportunities?", a: "We teach professionals who are already working..." },
    { q: "4. Do you offer only corporate Spanish courses?", a: "No, we offer other courses on a need basis..." },
    { q: "5. What are the qualifications of your teachers?", a: "All our instructors hold specialized diplomas or master’s degrees..." },
  ];

  return (
    <div className="mb-16 px-4 py-12">
      <h1 className="text-center font-semibold text-4xl md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 max-w-7xl mx-auto">
        {faqData.map((faq, i) => (
          <div
            key={i}
            className="border-b border-gray-300 py-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Question text zyada width lega */}
              <p className="text-lg font-medium flex-1 pr-6">{faq.q}</p>
              <FaAngleDown
                className={`text-xl transform transition-transform duration-300 ${
                  active === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {active === i && (
              <p className="mt-2 text-gray-600 leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
