import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate and pass a state object
    navigate('/material', { state: { fromHero: true } });
  };

  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 bg-white relative lg:pb-52">

      {/* Laptop/Desktop Layout (unchanged) */}
      <div className="hidden lg:flex flex-row items-start justify-center gap-[24rem] relative">
        {/* Left Card */}
        <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl w-full max-w-md shadow-xl bg-white relative z-10 min-h-[24rem]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Spanish For <br /> Students
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            Learn business Spanish from the best teachers worldwide. Fully
            adaptive curriculum for your needs. 100% online courses.
          </p>
          <button onClick={handleButtonClick} className="bg-[rgba(173,21,24,1)] hover:bg-red-700 text-white px-6 lg:px-32 py-3 rounded-lg flex items-center gap-3 text-sm md:text-base">
            <span className="leading-tight">
              Start now to unlock <br /> high-paying jobs
            </span>
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Cartoon in middle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-72 md:w-80 lg:w-96 xl:w-[28rem] z-20">
          <img
            src="Home/image 58.svg"
            alt="cartoon"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Card */}
        <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl w-full max-w-md shadow-xl bg-white relative z-10 min-h-[24rem]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formación</h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            Actualízate y mejora tus prácticas docentes en la enseñanza de
            español. Recibe capacitación con expertos para crear cursos, material
            auténtico y adaptado para tener estudiantes a largo plazo.
          </p>
          <button onClick={handleButtonClick} className="bg-[rgba(173,21,24,1)] hover:bg-red-700 text-white px-6 lg:px-16 py-3 rounded-lg flex items-center gap-3 text-sm md:text-base">
            <span className="leading-tight">
              Actualízate, ¡Mejores <br /> estudiantes y pagos!
            </span>
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="flex flex-col lg:hidden items-center gap-8">
        {/* Left Card */}
        <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl w-full max-w-md shadow-sm bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Spanish For <br /> Students
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            Learn business Spanish from the best teachers worldwide. Fully
            adaptive curriculum for your needs. 100% online courses.
          </p>
          <button onClick={handleButtonClick} className="bg-[rgba(173,21,24,1)] hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-3 text-sm md:text-base">
            <span className="leading-tight">
              Start now to unlock <br /> high-paying jobs
            </span>
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Cartoon */}
        <div className="w-72 md:w-80 xl:w-[28rem]">
          <img
            src="Home/image 58.svg"
            alt="cartoon"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Card */}
        <div className="p-8 border-2 border-dashed border-gray-300 rounded-2xl w-full max-w-md shadow-sm bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formación</h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            Actualízate y mejora tus prácticas docentes en la enseñanza de
            español. Recibe capacitación con expertos para crear cursos, material
            auténtico y adaptado para tener estudiantes a largo plazo.
          </p>
          <button onClick={handleButtonClick} className="bg-[rgba(173,21,24,1)] hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-3 text-sm md:text-base">
            <span className="leading-tight">
              Actualízate, ¡Mejores <br /> estudiantes y pagos!
            </span>
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
