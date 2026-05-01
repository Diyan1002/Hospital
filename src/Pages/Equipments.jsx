import React, { useState } from "react";

import machineImage1 from "../assets/11.jpeg";
import machineImage2 from "../assets/12.jpeg";
import machineImage3 from "../assets/13.jpeg";
import machineImage4 from "../assets/14.jpeg";
import machineImage5 from "../assets/15.jpeg";
import machineImage6 from "../assets/16.jpeg";
import machineImage7 from "../assets/17.jpeg";
import machineImage8 from "../assets/der.jpeg"; // ⭐ NEW Dermoscope

const machines = [
  {
    title: "Triple Wavelength Diode Laser",
    desc: "Advanced multi-wavelength laser system for safe hair removal.",
    img: machineImage1,
    details:
      "Uses 755nm, 808nm, 1064nm wavelengths for deep follicle targeting. Safe for all skin types and long-term results.",
  },
  {
    title: "Pico Laser",
    desc: "Pigmentation, freckles and melasma treatment system.",
    img: machineImage2,
    details:
      "Ultra-fast pulses break pigment without damaging skin. Best for acne marks, melasma and tattoos.",
  },
  {
    title: "CO2 Laser & Micro RF",
    desc: "Skin tightening and scar reduction system.",
    img: machineImage3,
    details:
      "Boosts collagen, reduces wrinkles and improves skin texture.",
  },
  {
    title: "Hydra Facial Machine",
    desc: "Deep cleansing and hydration facial system.",
    img: machineImage4,
    details:
      "Multi-step facial improves hydration and gives instant glow.",
  },
  {
    title: "Biofiller System",
    desc: "Natural facial volume restoration.",
    img: machineImage5,
    details:
      "Uses body plasma for natural fillers without chemicals.",
  },
  {
    title: "PRP/PRF Centrifuge",
    desc: "Regenerative skin & hair therapy system.",
    img: machineImage6,
    details:
      "Separates platelet-rich plasma for healing and hair growth.",
  },
  {
    title: "Plexage Plasma Pen",
    desc: "Non-surgical skin tightening and lifting device.",
    img: machineImage7,
    details:
      "Uses plasma energy to stimulate skin regeneration, reduce wrinkles, tighten loose skin, and improve skin texture without surgery or downtime. Commonly used for eyelid lifting, fine lines, and acne scars.",
  },

  // ⭐ NEW DERMOSCOPE
  {
    title: "Dermatoscope",
    desc: "Advanced skin examination and diagnostic tool.",
    img: machineImage8,
    details:
      "Dermoscope is a non-invasive diagnostic device used to examine skin lesions, pigmentation, and early signs of skin diseases. It provides magnified and illuminated views of the skin for accurate diagnosis of conditions like melanoma, acne, and other dermatological issues.",
  },
];

export default function Machines() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-20 bg-[#f7f9fc] overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute -top-32 -left-32 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10 px-4">
        <p className="text-[#1596d4] text-xs tracking-[4px] uppercase font-semibold">
          Medical Technology
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2d6b] mt-2">
          Advanced Machines
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14 sm:space-y-16 relative z-10">

        {machines.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="md:w-1/2 w-full">
              <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md">

                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-contain p-4 sm:p-6 transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="md:w-1/2 w-full text-center md:text-left">

              <h3 className="text-xl sm:text-2xl font-bold text-[#1f2d6b]">
                {item.title}
              </h3>

              <div className="w-12 sm:w-14 h-1 bg-[#1596d4] my-4 rounded-full mx-auto md:mx-0"></div>

              <p className="text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base">
                {item.desc}
              </p>

              <button
                onClick={() => setSelected(item)}
                className="mt-5 sm:mt-6 inline-block px-4 sm:px-5 py-2 border border-[#1596d4] text-[#1596d4] rounded-md hover:bg-[#1596d4] hover:text-white transition"
              >
                Learn More →
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

          <div className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-pop">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100"
            >
              ✕
            </button>

            <div className="bg-[#f7f9fc] flex items-center justify-center p-6">
              <img
                src={selected.img}
                alt={selected.title}
                className="h-[250px] object-contain"
              />
            </div>

            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-[#1f2d6b]">
                {selected.title}
              </h2>

              <div className="w-16 h-1 bg-[#1596d4] mx-auto my-3"></div>

              <p className="text-gray-600 text-sm sm:text-base">
                {selected.details}
              </p>

              <button className="mt-6 w-full bg-[#1f2d6b] text-white py-3 rounded-xl hover:bg-[#16204f] transition">
                Book Consultation
              </button>

            </div>

          </div>

          <style>{`
            @keyframes pop {
              0% { transform: scale(0.9); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-pop {
              animation: pop 0.25s ease-out;
            }
          `}</style>

        </div>
      )}

    </section>
  );
}