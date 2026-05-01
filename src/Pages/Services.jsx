import React from "react";
import aboutBg from "../assets/sett.png";
import firstServiceImage from "../assets/ser1.jpg";
import secondserviceImage from "../assets/ser2.jpg";
import serviceImage from "../assets/mes.png";
import Contact from "../Components/Contact";

const services = [
  {
    title: "Skin, Hair & Nail Treatments",
    description:
      "Complete treatment for skin, hair, nail and venereal diseases.",
    tag: "General Care",
    image: firstServiceImage,
  },
  {
    title: "Dermoscopy & Microscopy",
    description: "Advanced diagnosis for skin diseases and skin cancers.",
    tag: "Diagnosis",
    image: secondserviceImage,
  },
  {
    title: "Laser Hair Reduction",
    description:
      "Safe and effective laser treatment for unwanted hair removal.",
    tag: "Popular",
    image: serviceImage,
  },
  {
    title: "Pigmentation & Melasma",
    description: "Laser treatments for pigmentation and melasma issues.",
    tag: "Skin Care",
    image: serviceImage,
  },
  {
    title: "Acne & Scar Treatment",
    description:
      "Laser solutions for acne scars and facial rejuvenation including Hydrafacial.",
    tag: "Rejuvenation",
    image: serviceImage,
  },
  {
    title: "PRP, PRF & Bio-filler",
    description:
      "Advanced skin and hair therapies using PRP and bio-fillers.",
    tag: "Advanced",
    image: serviceImage,
  },
  {
    title: "Botox & Thread Lift",
    description:
      "Non-surgical anti-aging treatments for youthful appearance.",
    tag: "Anti-Aging",
    image: serviceImage,
  },
  {
    title: "Micro RF Therapy",
    description:
      "Treatment for scars, stretch marks and skin tightening.",
    tag: "Skin Repair",
    image: serviceImage,
  },
  {
    title: "Fat Grafting & Biopsy",
    description:
      "Fat grafting, mole removal and skin biopsy services.",
    tag: "Surgical",
    image: serviceImage,
  },
  {
    title: "Electrocautery & Plasma Pen",
    description:
      "Modern techniques for skin lesion removal and tightening.",
    tag: "Advanced Tech",
    image: serviceImage,
  },
  {
    title: "Mesotherapy & Microneedling",
    description:
      "Skin rejuvenation using derma pen and mesotherapy.",
    tag: "Glow",
    image: serviceImage,
  },
  {
    title: "Plastic Surgery",
    description:
      "Plastic and reconstructive surgical procedures.",
    tag: "Surgery",
    image: serviceImage,
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-white min-h-screen">
      {/* Banner */}
      <section
        className="relative w-full h-[180px] md:h-[220px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-[#1f2d6b] text-sm font-medium">
            Home / Services
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-[#1f2d6b] font-serif">
            Our Services
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1596d4]" />
      </section>

      {/* Title */}
      <div className="text-center pt-14 px-6">
        <p className="text-[#1596d4] uppercase tracking-[4px] text-sm font-semibold">
          Medical Excellence
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-bold text-[#1f2d6b]">
          Dermatology & Aesthetic Services
        </h2>
      </div>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
            >
              {/* IMAGE */}
              <div className="relative bg-gradient-to-br from-[#eef6ff] to-white h-[220px] flex items-center justify-center p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#1596d4] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {service.tag}
                </span>
              </div>

              {/* TEXT */}
              <div className="p-5 sm:p-6 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-[#1f2d6b]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-6">
                  {service.description}
                </p>

                <button className="mt-5 inline-flex items-center gap-2 text-[#1596d4] font-semibold text-sm hover:gap-3 transition-all">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ServicesPage;