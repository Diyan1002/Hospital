import React from "react";
import heartIcon from "../assets/hea.png";

const Specialties = () => {
  const specialties = [
    "Neurology",
    "Bones",
    "Oncology",
    "Otorhinolaryngology",
    "Ophthalmology",
    "Cardiovascular",
    "Pulmonology",
    "Renal Medicine",
    "Gastroenterology",
    "Urology",
    "Dermatology",
    "Gynaecology",
  ];

  return (
    <section className="relative bg-[#F9FCFF] py-16 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(219,230,240,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(219,230,240,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#159EEC] text-xs font-semibold tracking-[4px] uppercase mb-2">
            Always Caring
          </p>

          <h2 className="text-[#1F2B6C] text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Specialties
          </h2>
        </div>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-3 sm:gap-4
        ">
          {specialties.map((item) => {
            const isActive = item === "Bones";

            return (
              <div
                key={item}
                className={`h-[120px] sm:h-[140px] rounded-xl border border-[#E6EDF5] 
                flex flex-col items-center justify-center text-center px-2 sm:px-3 
                cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-[#1F2B6C] text-white shadow-xl scale-105"
                    : "bg-white hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 
                  ${isActive ? "bg-white/10" : "bg-[#F3F8FF]"}`}
                >
                  <img
                    src={heartIcon}
                    alt={item}
                    className={`w-5 h-5 sm:w-6 sm:h-6 object-contain ${
                      isActive ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>

                <p className="text-[11px] sm:text-xs md:text-sm font-semibold leading-5">
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