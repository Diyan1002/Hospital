import React from "react";
import doctorImage from "../assets/tes.png";

const Testimonial = () => {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${doctorImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1f2d6b]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">

        {/* Quote Icon */}
        <h2 className="text-6xl font-serif text-[#BFD2F8] leading-none">
          "
        </h2>

        {/* Testimonial Text */}
        <p className="mt-4 text-base md:text-lg leading-8 text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue, nascetur proin massa.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#BFD2F8] mx-auto my-6" />

        {/* Author */}
        <h3 className="text-lg font-semibold">John Doe</h3>
        <p className="text-sm text-gray-300 mt-1">Happy Patient</p>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="w-3 h-3 rounded-full bg-white"></span>
          <span className="w-3 h-3 rounded-full bg-white/50"></span>
          <span className="w-3 h-3 rounded-full bg-white/30"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;