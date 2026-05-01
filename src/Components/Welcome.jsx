import React from "react";
import teamImage from "../assets/wel.png";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">

      <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">

        {/* Tagline */}
        <p className="uppercase tracking-[4px] text-[#159EEC] font-semibold text-[10px] md:text-xs mb-3">
          Skin • Hair • Aesthetic Care
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1F2B6C] leading-snug">
          Your Trusted Skin & Care Clinic for Healthy, Glowing Skin
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 md:mt-5 text-gray-600 text-sm md:text-base leading-6 md:leading-7 px-2">
          We provide advanced dermatology and skin care treatments including acne
          treatment, skin rejuvenation, anti-aging solutions, and cosmetic dermatology.
          Our goal is to enhance your natural beauty with safe and modern medical care.
        </p>

        {/* Button */}
        <button className="mt-6 bg-[#BFD2F8] text-[#1F2B6C] font-semibold px-6 md:px-7 py-3 rounded-full hover:bg-[#159EEC] hover:text-white transition duration-300 shadow-md text-sm md:text-base">
          Explore Skin Treatments
        </button>

        {/* IMAGE */}
        <div className="mt-10 flex justify-center">
          <img
            src={teamImage}
            alt="Skin Care Specialists"
            className="
              w-full 
              max-w-4xl 
              h-[220px] sm:h-[300px] md:h-auto
              object-cover 
              rounded-2xl 
              shadow-lg
            "
          />
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;