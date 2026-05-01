import React, { useState } from "react";
import aboutBg from "../assets/aba.png";

import image1 from "../assets/111.jpeg";
import image2 from "../assets/222.jpeg";
import image3 from "../assets/333.jpeg";
import image44 from "../assets/989.jpeg";
import image4 from "../assets/444.jpeg";
import image5 from "../assets/555.jpeg";
import image6 from "../assets/666.jpeg";
import image7 from "../assets/777.jpeg";
import image8 from "../assets/888.jpeg";
import image9 from "../assets/999.jpeg";
import image10 from "../assets/1111.jpeg";
import image11 from "../assets/2222.jpeg";
import image12 from "../assets/3333.jpeg";
import image13 from "../assets/4444.jpeg";
import image14 from "../assets/5555.jpeg";
import image15 from "../assets/6666.jpeg";
import image16 from "../assets/7777.jpeg";
import image17 from "../assets/8888.jpeg";
import image18 from "../assets/9999.jpeg";
import image19 from "../assets/99999.jpeg";

const AboutSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const topImages = [image1, image2, image3, image44];
  const rowImages = [image4, image5, image6, image7];
  const bottomImages = [
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
  ];

  const ImageCard = ({ img, height }) => (
    <div className="relative overflow-hidden rounded-2xl shadow-md group bg-white border">
      <img
        src={img}
        alt=""
        className={`w-full ${height} object-contain bg-slate-50 p-2 transition duration-500 group-hover:scale-105`}
      />

      <div className="absolute inset-0 bg-[#1F2B6C]/0 group-hover:bg-[#1F2B6C]/50 transition duration-300 flex items-center justify-center">
        <button
          onClick={() => setSelectedImage(img)}
          className="opacity-0 group-hover:opacity-100 bg-white text-[#1F2B6C] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition duration-300"
        >
          View Result
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative w-full h-[220px] md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-[#1F2B6C]/70" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-white/80 text-sm uppercase tracking-[4px]">
            Home / Gallery
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Skin & Aesthetic Treatment Gallery
          </h1>

          <p className="text-white/80 text-sm md:text-base mt-3 max-w-xl">
            Real patient transformations showcasing dermatology, skincare,
            laser procedures and aesthetic treatments.
          </p>
        </div>
      </section>

      {/* TITLE */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-[#1F2B6C] text-3xl md:text-4xl font-bold">
          Our Treatment Results
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Every image represents real transformation through advanced
          dermatology, skincare and aesthetic procedures.
        </p>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-8">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {topImages.map((img, index) => (
            <ImageCard key={index} img={img} height="h-[280px]" />
          ))}
        </div>

        {/* 4 5 6 7 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {rowImages.map((img, index) => (
            <ImageCard key={index} img={img} height="h-[220px]" />
          ))}
        </div>

        {/* REST */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bottomImages.map((img, index) => (
            <ImageCard key={index} img={img} height="h-[220px]" />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-3xl p-4 shadow-2xl max-w-lg w-full animate-fadeIn">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt=""
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;