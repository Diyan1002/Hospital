import React, { useState } from "react";
import aboutBg from "../assets/aba.png";

import image1 from "../assets/111.jpeg";
import image2 from "../assets/222.jpeg";
import image3 from "../assets/333.jpeg";
import image44 from "../assets/989.jpeg";
import image55 from "../assets/877.jpeg";
import image4 from "../assets/444.jpeg";
import image5 from "../assets/555.jpeg";
import image6 from "../assets/666.jpeg";
import image7 from "../assets/777.jpeg";

const AboutSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const topImages = [image1, image2, image3, image44, image55];
  const rowImages = [image4, image5, image6, image7];
  const bottomImages = [

  ];

  // ✅ CLEAN IMAGE CARD (no movement issues)
  const ImageCard = ({ img, height }) => (
    <div className="group rounded-2xl p-[2px] bg-gradient-to-r from-[#1F2B6C] via-purple-500 to-pink-400 shadow-md hover:shadow-xl transition">

      <div className="relative overflow-hidden rounded-2xl bg-white">

        <img
          src={img}
          alt=""
          className={`w-full ${height} object-cover transition duration-500 group-hover:scale-105`}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end justify-center pb-4">

          <button
            onClick={() => setSelectedImage(img)}
            className="opacity-0 group-hover:opacity-100 bg-white text-[#1F2B6C] px-4 py-1.5 rounded-full text-xs font-semibold transition"
          >
            View Result
          </button>

        </div>

      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative w-full h-[200px] md:h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-[#1F2B6C]/70" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">

          <p className="text-white/80 text-xs uppercase tracking-[3px]">
            Home / Gallery
          </p>

          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-white">
            Skin & Aesthetic Treatment Gallery
          </h1>

          <p className="text-white/70 text-xs md:text-sm mt-2 max-w-xl">
            Real patient transformations showcasing dermatology, skincare, and aesthetic procedures.
          </p>

        </div>
      </section>

      {/* TITLE */}
      <section className="max-w-7xl mx-auto py-12 px-6 text-center">

        <h2 className="text-[#1F2B6C] text-2xl md:text-3xl font-bold">
          Our Treatment Results
        </h2>

        <p className="text-gray-500 mt-3 text-sm max-w-2xl mx-auto">
          Every image represents real transformation through advanced dermatology and skincare procedures.
        </p>

      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-8">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {topImages.map((img, i) => (
            <ImageCard key={i} img={img} height="h-[280px]" />
          ))}
        </div>

        {/* MIDDLE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {rowImages.map((img, i) => (
            <ImageCard key={i} img={img} height="h-[220px]" />
          ))}
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bottomImages.map((img, i) => (
            <ImageCard key={i} img={img} height="h-[220px]" />
          ))}
        </div>

      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">

          <div className="relative bg-white rounded-2xl p-3 max-w-lg w-full">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt=""
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />

          </div>

        </div>
      )}

    </div>
  );
};

export default AboutSection;