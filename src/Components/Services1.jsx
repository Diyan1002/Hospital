import React from "react";
import cardiogramIcon from "../assets/cardiogram.png";
import dnaTestingIcon from "../assets/dna.png";
import bloodBankIcon from "../assets/blood.png";

const ServiceSection = () => {
  const features = [
    "Advanced Skin Treatments",
    "Laser & Aesthetic Solutions",
    "Expert Dermatologists",
    "Safe & Modern Technology",
    "Personalized Care",
    "Proven Results",
    "Nail Treatments",
  ];

  return (
    <section className="w-full bg-[#F8FBFF] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="uppercase tracking-[3px] text-[#159EEC] font-semibold text-[11px] md:text-xs">
            Skin & Aesthetic Care
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2B6C] mt-2">
            Our Services
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-2 shadow-md rounded-xl overflow-hidden bg-white flex lg:block">

            {[
              { icon: cardiogramIcon, title: "Skin Treatments" },
              { icon: cardiogramIcon, title: "Laser Procedures", active: true },
              { icon: dnaTestingIcon, title: "PRP & Hair Therapy" },
              { icon: bloodBankIcon, title: "Cosmetic Procedures" },
              { title: "Nail Treatments" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex-1 lg:p-4 p-3 text-center border-r lg:border-b
                ${item.active
                  ? "bg-[#1F2B6C] text-white"
                  : "hover:bg-gray-50 text-[#1F2B6C]"} transition cursor-pointer`}
              >
                {item.icon && (
                  <img src={item.icon} className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-1 md:mb-2" />
                )}
                <p className="text-[10px] md:text-xs font-medium">{item.title}</p>
              </div>
            ))}

            <button className="hidden lg:block w-full bg-[#159EEC] text-white py-3 text-sm font-medium hover:bg-[#1187d1] transition">
              View All
            </button>

          </div>

          {/* Center */}
          <div className="lg:col-span-6">

            <h3 className="text-xl md:text-2xl font-semibold text-[#1F2B6C] mb-5 md:mb-6">
              Advanced Dermatology & Aesthetic Care
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-5 md:mb-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#159EEC]"></span>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 leading-6 md:leading-7 mb-4">
              We provide complete solutions for skin, hair, and aesthetic care using modern technology and expert dermatologists.
            </p>

            <p className="text-sm text-gray-600 leading-6 md:leading-7">
              From laser treatments to anti-aging procedures, our clinic ensures safe, effective, and personalized care.
            </p>

          </div>

          {/* Right Side - Premium Feature Cards */}
<div className="lg:col-span-4 space-y-4">

  {/* Card 1 */}
  <div className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-lg border border-[#E8EEF7] shadow-md hover:shadow-xl hover:-translate-y-1 transition">

    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition"></div>

    <h4 className="relative z-10 text-[#1F2B6C] font-semibold text-sm mb-2">
      Modern Equipment
    </h4>

    <p className="relative z-10 text-xs text-gray-600 leading-5">
      We use advanced laser & dermatology machines for safe and effective treatments.
    </p>

    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
  </div>

  {/* Card 2 */}
  <div className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-lg border border-[#E8EEF7] shadow-md hover:shadow-xl hover:-translate-y-1 transition">

    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition"></div>

    <h4 className="relative z-10 text-[#1F2B6C] font-semibold text-sm mb-2">
      Expert Doctors
    </h4>

    <p className="relative z-10 text-xs text-gray-600 leading-5">
      Certified dermatologists with years of experience in aesthetic care.
    </p>

    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
  </div>

  {/* Card 3 */}
  <div className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-lg border border-[#E8EEF7] shadow-md hover:shadow-xl hover:-translate-y-1 transition">

    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition"></div>

    <h4 className="relative z-10 text-[#1F2B6C] font-semibold text-sm mb-2">
      Safe & Hygienic Care
    </h4>

    <p className="relative z-10 text-xs text-gray-600 leading-5">
      Strict sterilization protocols ensure 100% safe treatments.
    </p>

    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
  </div>

</div>

      </div>
      </div>
    </section>
  );
};

export default ServiceSection;