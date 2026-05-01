import React from "react";
import teamImage from "../assets/wel.png";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">

      <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">

        {/* Heading */}
        <p className="uppercase tracking-[3px] text-[#159EEC] font-semibold text-[11px] md:text-xs mb-2 md:mb-3">
          Welcome to Meddical
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#1F2B6C] leading-tight">
          A Great Place to Receive Care
        </h2>

        <p className="max-w-2xl mx-auto mt-4 md:mt-5 text-gray-600 text-sm md:text-base leading-6 md:leading-7 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in.
        </p>

        {/* Button */}
        <button className="mt-5 md:mt-6 bg-[#BFD2F8] text-[#1F2B6C] font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-[#159EEC] hover:text-white transition duration-300 shadow-md text-sm">
          Learn More
        </button>

        {/* IMAGE */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <img
            src={teamImage}
            alt="Medical Team"
            className="
              w-full 
              max-w-4xl 
              h-[220px] sm:h-[280px] md:h-auto
              object-cover 
              rounded-xl md:rounded-2xl 
              shadow-lg
            "
          />
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;