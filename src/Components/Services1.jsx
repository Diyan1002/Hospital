import React from "react";
import cardiogramIcon from "../assets/cardiogram.png";
import dnaTestingIcon from "../assets/dna.png";
import bloodBankIcon from "../assets/blood.png";
import doctor1 from "../assets/doc1.png";
import doctor2 from "../assets/doc2.png";

const ServiceSection = () => {
  const features = [
    "Advanced Skin Treatments",
    "Laser & Aesthetic Solutions",
    "Expert Dermatologists",
    "Safe & Modern Technology",
    "Personalized Care",
    "Proven Results",
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

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left Sidebar (Text Updated Only) */}
          <div className="lg:col-span-2 shadow-md rounded-xl overflow-hidden bg-white flex lg:block">

            {[ 
              { icon: cardiogramIcon, title: "Skin Treatments" },
              { icon: cardiogramIcon, title: "Laser Procedures", active: true },
              { icon: dnaTestingIcon, title: "PRP & Hair Therapy" },
              { icon: bloodBankIcon, title: "Cosmetic Procedures" },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  flex-1 lg:p-4 p-3 text-center border-r lg:border-b border-b-0
                  ${item.active
                    ? "bg-[#1F2B6C] text-white"
                    : "hover:bg-gray-50 text-[#1F2B6C]"}
                  transition cursor-pointer
                `}
              >
                <img src={item.icon} alt="" className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-1 md:mb-2" />
                <p className="text-[10px] md:text-xs font-medium">{item.title}</p>
              </div>
            ))}

            <button className="hidden lg:block w-full bg-[#159EEC] text-white py-3 text-sm font-medium hover:bg-[#1187d1] transition">
              View All
            </button>

          </div>

          {/* Center Content (Updated Text) */}
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
              We provide complete solutions for skin, hair, and aesthetic care using
              modern technology and expert dermatologists.
            </p>

            <p className="text-sm text-gray-600 leading-6 md:leading-7">
              From laser treatments to anti-aging procedures, our clinic ensures
              safe, effective, and personalized care for every patient.
            </p>

          </div>

          {/* Right Images (Same) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 md:space-y-4 md:gap-0">

            <img
              src={doctor1}
              alt="Doctor"
              className="w-full h-[140px] md:h-[180px] rounded-xl shadow-md object-cover"
            />

            <img
              src={doctor2}
              alt="Medical Team"
              className="w-full h-[140px] md:h-[180px] rounded-xl shadow-md object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceSection;