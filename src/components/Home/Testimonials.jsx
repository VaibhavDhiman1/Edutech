import React, { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function Testimonials() {
  const testimonials = [
    {
      text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores",
      img: "Home/Ellipse 756.svg",
      name: "Sarah Levi",
      location: "France",
    },
    {
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
      img: "Home/Ellipse 755.svg",
      name: "Sarah Levi",
      location: "India",
    },
    {
      text: "Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      img: "Home/Ellipse 754.svg",
      name: "Levi Fisher",
      location: "Russia",
    },
    {
      text: "Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      img: "Home/Ellipse 754.svg",
      name: "Levi Fisher",
      location: "Russia",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerRow(3);
      else if (width >= 768) setItemsPerRow(2);
      else setItemsPerRow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsPerRow : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - itemsPerRow ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerRow
  );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 md:py-16 relative">
      <h1 className="text-center font-bold text-black text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-12">
        Testimonials
      </h1>

      {/* Arrows + Testimonials Wrapper */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 
          bg-white border border-gray-300 rounded-full p-3 shadow-sm 
          hover:bg-gray-100 transition-colors z-20"
          aria-label="Previous Testimonial"
        >
          <GoArrowLeft className="text-gray-600 text-2xl" />
        </button>

        {/* Testimonials Row */}
        <div className="flex gap-6 md:gap-12 w-full justify-center px-12 md:px-20">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              className="max-w-sm text-center flex flex-col items-center bg-white p-6 "
              style={{
                flex:
                  itemsPerRow === 1
                    ? "0 0 100%"
                    : `0 0 ${100 / itemsPerRow}%`,
              }}
            >
              <img
                src="Home/Frame.svg"
                alt="Quote"
                className="w-10 mx-auto mb-4"
              />
              <p className="text-sm mb-6 font-medium leading-snug">{t.text}</p>
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 
          bg-white border border-gray-300 rounded-full p-3 shadow-sm 
          hover:bg-gray-100 transition-colors z-20"
          aria-label="Next Testimonial"
        >
          <GoArrowRight className="text-gray-600 text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
