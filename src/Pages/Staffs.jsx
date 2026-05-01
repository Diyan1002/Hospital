import React from "react";
import aboutBg from "../assets/aba.png";
import staff1 from "../assets/staff1.jpeg";
import staff2 from "../assets/staff2.jpeg";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";

const staffMembers = [
  {
    name: "Miss Sanika Riasat",
    role: "Front Desk Officer & Aesthetic Technician",
    image: staff1,
  },
  {
    name: "Ali Hassan",
    role: "Technician / Assistant",
    image: staff2,
  },
];

const Staffs = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section
        className="relative w-full h-[160px] md:h-[190px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-[#1f2d6b] text-xs sm:text-sm font-medium">
            Home / Staffs
          </p>

          <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2d6b] font-serif">
            Our Staff
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1596d4]" />
      </section>

      {/* Staff Cards */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">

            {staffMembers.map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image same doctors style */}
                <div className="h-[300px] bg-white flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="bg-[#dbeafe] px-5 py-6 text-center">
                  <h3 className="text-lg font-bold text-[#1f2d6b]">
                    {staff.name}
                  </h3>

                  <p className="text-xs tracking-[2px] text-gray-600 mt-2 uppercase">
                    {staff.role}
                  </p>
                </div>

                {/* Button */}
                <button className="w-full bg-[#1f2d6b] text-white py-3 text-sm font-medium hover:bg-[#1596d4] transition">
                  View Profile
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Testimonial />
      <Contact />
    </div>
  );
};

export default Staffs;