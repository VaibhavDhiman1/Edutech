import React, { useState } from 'react'
import AuthForm from "../../pages/LogIn";

const ContactContent = () => {

  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="font-sans text-gray-800 pb-24">
      {/* Contact Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-10 sm:mb-12">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg border border-gray-300 rounded-2xl p-6 sm:p-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              Sed ornare suspendisse ut ac neque lobortis sed tincidunt. Mi
              tempus quis massa tellus imperdiet aenean nulla id.
              <br />
              <br />
              Etiam condimentum duis molestie malesuada volutpat pellentesque
              sed. Ornare suspendisse ut ac neque lobortis.
            </p>
            <img
              src="Contact/image 53.svg"
              alt="Alien Teacher"
              className="w-48 sm:w-56 md:w-72 h-auto mx-auto lg:mx-8"
            />
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 w-full">
            {/* Tabs */}
            <label className="block text-gray-700 font-medium mb-3 text-center lg:text-left">
              You are a:
            </label>
            <div className="flex justify-center md:justify-center my-6">
              <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4 border border-red-200 rounded-full px-3 w-full md:w-auto">
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base font-medium text-gray-600 hover:bg-[rgba(173,21,24,1)] hover:text-white rounded-full transition-all">
                  Teacher
                </button>
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base font-medium text-gray-600 hover:bg-[rgba(173,21,24,1)] hover:text-white rounded-full transition-all">
                  Student
                </button>
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base font-medium text-gray-600 hover:bg-[rgba(173,21,24,1)] hover:text-white rounded-full transition-all">
                  Collaborator
                </button>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Reason to contact"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>

              <button

              onClick={(e) => {
            e.preventDefault(); // prevent form submission
            setShowAuth(true); // open modal
          }}
                type="submit"
                className="bg-[rgba(173,21,24,1)] text-white px-5 sm:px-6 py-3 rounded-full w-full hover:bg-red-700 transition text-sm sm:text-base font-medium"
              >
                Send
              </button>

        
            </form>
                  {/* Modal */}
      {showAuth && <AuthForm onClose={() => setShowAuth(false)} />}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactContent
