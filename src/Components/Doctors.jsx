import React, { useEffect, useState } from "react";

import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import doctor3 from "../assets/doctor3.png";
import doctor4 from "../assets/doctor3.png";
import doctor5 from "../assets/doctor3.png";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const doctors = [
  {
    name: "Dr Asim Suhail",
    specialty: "Founder / Chairperson",
    qualifications: [
      "MBBS (Pb)",
      "MCPS (Dermatology)",
      "Diplomate American Board of Regenerative Medicine",
      "Diplomate in Facial Aesthetics",
    ],
    image: doctor1,
  },
  {
    name: "Dr Ijaz Ali",
    specialty: "General Surgeon",
    qualifications: ["MBBS", "FCPS", "CHPE", "Fellowship in Plastic Surgery"],
    image: doctor2,
  },
  {
    name: "Dr Anas Sajjad",
    specialty: "Dermatologist & Aesthetic Physician",
    qualifications: ["MBBS (UHS)", "FCPS Part-II (Dermatology)"],
    image: doctor3,
  },
  {
    name: "Dr Aliza Bukhari",
    specialty: "Dermatologist & Aesthetic Physician",
    qualifications: ["MBBS (Pb)", "FCPS Part-II (Dermatology)"],
    image: doctor4,
  },
  {
    name: "Dr Maryam Ijaz",
    specialty: "CERTIFIED AESTHETICIAN",
    qualifications: ["MBBS,MPHIL (TQM), CPHQ(USA), CHPE"],
    image: doctor5,
  },
];

const DoctorsSection = ({ fullPage = false }) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (!fullPage) {
      const interval = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % doctors.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [fullPage]);

  const visibleDoctors = fullPage
    ? doctors
    : [
        doctors[startIndex % doctors.length],
        doctors[(startIndex + 1) % doctors.length],
        doctors[(startIndex + 2) % doctors.length],
      ];

  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20">

      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* HEADER */}
        <p className="text-[#1596d4] text-xs font-bold tracking-[4px] uppercase">
          Trusted Care
        </p>

        <h2 className="text-[#1f2d6b] text-2xl sm:text-3xl font-bold mt-2 mb-10 sm:mb-12">
          Our Doctors
        </h2>

        {/* GRID */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">

          {visibleDoctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >

              {/* IMAGE FIXED */}
              <div className="h-[220px] sm:h-[260px] md:h-[280px] bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="bg-[#dbeafe] px-4 sm:px-5 py-5 sm:py-6 flex flex-col flex-1">

                <h3 className="text-base sm:text-lg font-bold text-[#1f2d6b]">
                  {doc.name}
                </h3>

                <p className="text-[10px] sm:text-xs tracking-[2px] text-gray-600 mt-1 uppercase">
                  {doc.specialty}
                </p>

                {/* QUALIFICATIONS */}
                <div className="mt-3 space-y-1 flex-1">
                  {doc.qualifications.map((q, index) => (
                    <p key={index} className="text-[10px] sm:text-[11px] text-gray-700">
                      • {q}
                    </p>
                  ))}
                </div>

                {/* SOCIAL */}
                <div className="flex justify-center gap-3 mt-4">
                  <div className="icon"><FaFacebookF size={12} /></div>
                  <div className="icon"><FaTwitter size={12} /></div>
                  <div className="icon"><FaInstagram size={12} /></div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#1f2d6b] text-white py-3 text-sm font-medium hover:bg-[#1596d4] transition">
                View Profile
              </button>

            </div>
          ))}

        </div>

        {/* DOTS */}
        {!fullPage && (
          <div className="flex justify-center mt-8 gap-3">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`rounded-full transition-all duration-500 ${
                  dot === startIndex % 3
                    ? "w-7 h-2 bg-[#1596d4]"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

      </div>

      {/* ICON STYLE */}
      <style>{`
        .icon {
          width: 32px;
          height: 32px;
          background: #1f2d6b;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          transition: 0.3s;
        }

        .icon:hover {
          background: #1596d4;
          transform: scale(1.1);
        }
      `}</style>

    </section>
  );
};

export default DoctorsSection;