import React from "react";
import doctorImage from "../assets/here.jpeg";
import calendarIcon from "../assets/Calendar.png";
import personIcon from "../assets/Team.png";
import cardIcon from "../assets/Cash.png";

const HeroSection = () => {
  return (
    <section className="relative">

      {/* HERO IMAGE */}
      <div
        className="
          relative 
          h-[420px] md:h-[550px] 
          w-full md:w-[1350px] 
          mx-auto 
          bg-cover 
          bg-center md:bg-center
          bg-[position:70%_center] md:bg-center
        "
        style={{ backgroundImage: `url(${doctorImage})` }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b6c]/70 to-transparent"></div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-full flex items-center relative z-10">
          <div className="max-w-xl text-white">

            <p className="uppercase tracking-[4px] text-[#BFD2F8] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Caring for Life
            </p>

            <h1 className="text-2xl md:text-6xl font-bold leading-tight">
              Leading the Way <br /> in Medical Excellence
            </h1>

            <button className="mt-5 md:mt-8 bg-[#BFD2F8] text-[#1F2B6C] font-semibold px-5 md:px-8 py-3 md:py-4 rounded-full hover:bg-white transition">
              Our Services
            </button>

          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 -mt-8 md:-mt-20">

        <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-2xl overflow-hidden">

          <div className="bg-[#1F2B6C] text-white p-5 md:p-8 flex items-center justify-between">
            <div>
              <h3 className="text-base md:text-lg font-semibold">Book Appointment</h3>
              <p className="text-xs md:text-sm text-white/70 mt-1">
                Schedule your visit easily
              </p>
            </div>
            <img src={calendarIcon} className="w-8 md:w-10 h-8 md:h-10" />
          </div>

          <div className="bg-[#BFD2F8] text-[#1F2B6C] p-5 md:p-8 flex items-center justify-between">
            <div>
              <h3 className="text-base md:text-lg font-semibold">Find Doctors</h3>
              <p className="text-xs md:text-sm mt-1 opacity-70">
                Meet expert specialists
              </p>
            </div>
            <img src={personIcon} className="w-8 md:w-10 h-8 md:h-10" />
          </div>

          <div className="bg-[#159EEC] text-white p-5 md:p-8 flex items-center justify-between">
            <div>
              <h3 className="text-base md:text-lg font-semibold">Billing & Insurance</h3>
              <p className="text-xs md:text-sm text-white/80 mt-1">
                Easy payment process
              </p>
            </div>
            <img src={cardIcon} className="w-8 md:w-10 h-8 md:h-10" />
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;