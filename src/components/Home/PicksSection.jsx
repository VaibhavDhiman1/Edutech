import React from "react";
function WaitlistSection() {
  const cards = [
    { img: "School/image 3.svg", title: "Conversational group waitlist" },
    { img: "School/image 2.svg", title: "One on one waitlist" },
    { img: "School/image 4.svg", title: "Group classes waitlist" },
  ];

  const handleButtonClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const waitlistUrls = {
    "Conversational group waitlist": "https://docs.google.com/forms/d/e/1FAIpQLSdlVcX3JEIW0ZIMWvIyanqa3bc3H17ee5gyKhjUkU9MdjM9yg/viewform?usp=sharing",
    "One on one waitlist": "https://docs.google.com/forms/d/e/1FAIpQLSfvcjPs3JxRhQLMIoxdZ1kROgQ8vEUXr7CPXEoMXsaWInUsvw/viewform?usp=sharing",
    "Group classes waitlist": "https://docs.google.com/forms/d/e/1FAIpQLSfIGmqGZU7D3mwvOGJxv2QqtBaBw6frYPCZWAg9-CX2pJbFzQ/viewform?usp=sharing",
  };
  return (
    <div className="text-center bg-[#FDF2F2] py-12">
      {/* Top Small Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/Home/Group 2.svg"
          alt="Ele's Picks Banner"
          className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto mx-auto"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold mb-10 px-4">
        Ele's picks of the month
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg flex flex-col w-full sm:w-[45%] md:w-[30%] max-w-xs"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full object-cover rounded-t-lg mb-4"
            />
            <div className="px-4 pb-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold text-left mb-2">
                {card.title}
              </h2>
              <p className="text-black font-light text-base mb-6 text-left">
                Ipsum is simply dummy text of the printing and
              </p>
              <button
                onClick={() => handleButtonClick(waitlistUrls[card.title])}
                className="bg-[rgba(173,21,24,1)] hover:bg-red-700 text-white py-2 px-6 rounded-full w-full  transition text-xl mt-auto">
                Try It!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaitlistSection;
