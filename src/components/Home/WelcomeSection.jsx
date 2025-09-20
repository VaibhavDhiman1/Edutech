function WelcomeSection() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="flex justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-6">
          Welcome to Ele’s House
        </h1>
      </div>

      {/* Paragraph */}
      <div className="flex justify-center items-center text-black">
        <p className="text-center text-sm md:text-base lg:text-lg max-w-4xl leading-relaxed">
          Ele is as alien to Spanish as you are. But being an adamant alien who
          wants to understand people & culture, Ele is building a home to learn
          Spanish.
          <br />
          Good news! It’s open for all curious Spanish learners. Join Ele in
          CasaDeEle & start your Spanish-learning journey now.
          <br />
          <span className="font-bold">
            Click on any of the 10+ rooms to get started!
          </span>
        </p>
      </div>

      {/* Image */}
      <div className="mt-10 flex justify-center">
        <img
          src="Home\image 59.svg"
          alt="Ele’s House"
          className="w-full max-w-4xl h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default WelcomeSection;
