import React from "react";
import heartIcon from "../assets/hea.png";

const Specialties = () => {
  const specialties = [
    "Skin Treatments",
    "Laser Procedures",
    "Acne & Scar Care",
    "Pigmentation Therapy",
    "Hair Restoration (PRP)",
    "Anti-Aging (Botox)",
    "Thread Lift",
    "Microneedling",
    "Mesotherapy",
    "Skin Tightening (RF)",
    "Mole & Wart Removal",
    "Plastic Surgery",
    "Nail Treatments",
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FCFEFF] to-[#F4F9FF] py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(219,230,240,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(219,230,240,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#159EEC] text-xs font-semibold tracking-[4px] uppercase mb-2">
            Skin & Aesthetic Care
          </p>

          <h2 className="text-[#1F2B6C] text-3xl sm:text-4xl font-bold">
            Our Specialties
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {specialties.map((item) => {
            const isActive = item === "Laser Procedures"; // ONLY THIS ACTIVE

            return (
              <div
                key={item}
                className={`group relative h-[115px] sm:h-[130px] rounded-2xl border overflow-hidden
                flex flex-col items-center justify-center text-center px-3 cursor-pointer
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${
                  isActive
                    ? "bg-gradient-to-br from-[#1F2B6C] to-[#283A8F] text-white shadow-xl border-transparent scale-105"
                    : "bg-white/80 backdrop-blur-lg border-[#E8EEF7] hover:bg-[#159EEC] hover:text-white"
                }`}
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 transition duration-500"></div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 transition
                  ${
                    isActive
                      ? "bg-white/15"
                      : "bg-[#F3F8FF] group-hover:bg-white/20"
                  }`}
                >
                  <img
                    src={heartIcon}
                    alt={item}
                    className={`w-5 h-5 sm:w-6 sm:h-6 object-contain transition ${
                      isActive
                        ? "brightness-0 invert"
                        : "brightness-0 group-hover:invert"
                    }`}
                  />
                </div>

                {/* Text */}
                <p className="relative z-10 text-[11px] sm:text-xs md:text-sm font-semibold leading-5">
                  {item}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;