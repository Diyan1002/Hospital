import React from "react";
import aboutBg from "../assets/aba.png";
import Doctors from "../Components/Doctors";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";

const DoctorsPage = () => {
  return (
    <div className="bg-white">

      {/* Banner */}
      <section
        className="relative w-full h-[160px] md:h-[190px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center text-left md:text-left">
          <p className="text-[#1f2d6b] text-xs sm:text-sm font-medium">
            Home / Doctors
          </p>

          <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2d6b] font-serif">
            Our Doctors
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1596d4]" />
      </section>

      {/* Doctors Section */}
      <div className="px-4 sm:px-6">
        <Doctors fullPage={true} />
      </div>

      <Testimonial />
      <Contact />

    </div>
  );
};

export default DoctorsPage;