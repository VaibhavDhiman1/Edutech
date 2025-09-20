function HowWeHelp() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
          How we help our users
        </h1>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          {/* Left Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              100% online course
            </h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
              Learn corporate business Spanish online with expert teachers
              worldwide. Our materials are designed around real workplace
              scenarios, helping you communicate effectively—not just memorize
              grammar.
            </p>
            <button className="bg-[rgba(173,21,24,1)] text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
              Click to explore our courses
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="Home\a-comic-style-panel-showing-a-diverse-group-of-ind.svg"
              alt="Online Course Visual"
              className="w-72 sm:w-96 md:w-[410px] h-auto rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="Home\an-energetic-comic-style-scene-with-floating-audio.svg"
              alt="Audio-Visual Learning Material"
              className="w-72 sm:w-96 md:w-[410px] h-auto rounded-2xl shadow-md"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Audio-visual Learning Material
            </h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
              No textbooks & random courses. We adapt our courses/learning
              materials depending on your personal needs & goals. If you’re with
              us, you get the most time to speak/practice Spanish.
            </p>
            <button className="bg-[rgba(173,21,24,1)] text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
              Take me to a Spanish lesson now
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          {/* Left Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Shop</h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
              Not ready to join our online courses? Start with 20+ free and paid
              materials from trained professionals and teachers to begin
              learning right away.
            </p>
            <button className="bg-[rgba(173,21,24,1)] text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-700 transition">
              Okay, let’s start from there!
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="Home\a-cozy-comic-style-pop-up-shop-inside-ele-s-house-.svg"
              alt="Shop Visual"
              className="w-72 sm:w-96 md:w-[410px] h-auto rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowWeHelp;
