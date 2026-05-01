import React from "react";
import doctorsImage from "../assets/docy1.jpg";
import aboutBg from "../assets/aba.png";
import Testimonial from "../Components/Testimonial";
import Doctors from "../Components/Doctors";
import Contact from "../Components/Contact";

const features = [
  "5-Star Care",
  "Experienced Doctors",
  "24/7 Support",
  "Patient First",
];

const AboutSection = () => {
  return (
    <div className="bg-white">

      {/* Banner */}
      <section
        className="relative w-full h-[160px] md:h-[190px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-[#1f2d6b] text-sm font-medium">
            Home / About
          </p>

          <h1 className="mt-1 text-3xl md:text-4xl font-bold text-[#1f2d6b] font-serif">
            About Us
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1596d4]" />
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <img
              src={doctorsImage}
              alt="Doctors"
              className="w-full max-w-[430px] rounded-2xl shadow-lg"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 bg-white shadow-md px-4 py-2 rounded-xl">
              <h3 className="text-lg font-bold text-[#1f2d6b]">17+</h3>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left">

            <p className="text-[#1596d4] uppercase tracking-[3px] text-xs font-semibold">
              Caring For Life
            </p>

            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#1f2d6b] leading-snug">
              Best Care for Your Good Health
            </h2>

            <p className="mt-3 text-gray-600">
              A Passion for Healing
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1596d4] text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-600 leading-6">
              We provide quality healthcare services with experienced doctors,
              advanced treatment, and patient-centered care in a trusted environment.
            </p>

            <button className="mt-6 bg-[#1f2d6b] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#16204f] transition">
              Learn More
            </button>

          </div>

        </div>
      </section>

      <Testimonial />
      <Doctors />
      <Contact />

    </div>
  );
};

export default AboutSection;