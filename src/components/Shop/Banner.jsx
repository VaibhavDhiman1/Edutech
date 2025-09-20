import React from "react";

const StatItem = ({ value, label }) => (
  <div className="text-center lg:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{value}</h2>
    <p className="text-gray-500 text-sm mt-1">{label}</p>
  </div>
);

function Banner() {
  return (
    <section className="bg-white lg:pb-8">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto lg:mx-12">
          <div className="relative z-10 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 flex lg:w-3/5">
            {/* Left Content */}
            <div className="max-w-7xl px-6 sm:px-9 lg:px-7 w-full relative z-10">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Tienda Casa de ELE
                </h1>

                <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                  Discover creative and inclusive Spanish resources for learners
                  and teachers. All digital downloads and subscriptions designed
                  with real classroom experience.
                </p>

                <button className="my-12 bg-[#AD1518] text-white py-3 px-10 lg:px-20 rounded-xl text-lg font-semibold hover:bg-red-800 transition-colors duration-300 shadow-md ">
                  Shop Now
                </button>
              </div>

              {/* Stats Section */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 lg:gap-x-14  gap-y-4">
                <StatItem value="200+" label="International Brands" />
                <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
                <StatItem value="2,000+" label="High-Quality Products" />
                <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
                <StatItem value="30,000+" label="Happy Customers" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Mascot (Desktop only) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-[50%]">
        <img
          src="/Shop/shop.svg"
          alt="An illustration of the cute alien mascot Ele waving"
          className="w-[530px] object-contain"
        />
      </div>
    </section>
  );
}

export default Banner;