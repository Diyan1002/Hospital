import React from "react";
import aboutBg from "../assets/appoint.png";
import Contact from "../Components/Contact";

const AppointmentPage = () => {
  return (
    <div className="bg-[#f7f9fc]">

      {/* ================= BANNER ================= */}
      <section
        className="relative w-full h-[180px] md:h-[220px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full px-4 md:px-6 flex flex-col justify-center animate-fadeIn">
          <p className="text-[#1f2d6b] text-xs md:text-sm tracking-wide font-medium">
            Home / Appointment
          </p>

          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-[#1f2d6b] font-serif">
            Book an Appointment
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1596d4]"></div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* ===== FORM ===== */}
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-500 animate-slideUp">

          <h2 className="text-xl md:text-2xl font-bold text-[#1f2d6b] mb-5 md:mb-6">
            Appointment Form
          </h2>

          <div className="grid gap-3 md:gap-4">

            <input className="input" placeholder="Full Name" />
            <input className="input" placeholder="Email Address" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <select className="input">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input className="input" placeholder="Phone" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <input type="date" className="input" />
              <input type="time" className="input" />
            </div>

            <select className="input">
              <option>Select Doctor</option>
              <option>Dr. John</option>
              <option>Dr. Sarah</option>
            </select>

            <select className="input">
              <option>Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>

            <textarea
              className="input h-24 md:h-28 resize-none"
              placeholder="Message..."
            ></textarea>

            <button className="mt-2 md:mt-3 bg-[#1f2d6b] text-white py-3 rounded-xl hover:bg-[#1596d4] transition-all duration-300 shadow-md">
              Submit Appointment
            </button>

          </div>
        </div>

        {/* ===== SCHEDULE ===== */}
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-500 animate-slideUp">

          <h2 className="text-xl md:text-2xl font-bold text-[#1f2d6b] mb-5 md:mb-6">
            Working Hours
          </h2>

          <div className="space-y-2 md:space-y-3 text-xs md:text-sm">

            {[
              ["Monday", "09:00 - 07:00"],
              ["Tuesday", "09:00 - 07:00"],
              ["Wednesday", "09:00 - 07:00"],
              ["Thursday", "09:00 - 07:00"],
              ["Friday", "OFF"],
              ["Saturday", "OFF"],
              ["Sunday", "OFF"],
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b pb-2 text-gray-600 hover:text-[#1f2d6b] transition"
              >
                <span>{item[0]}</span>
                <span className="font-medium">{item[1]}</span>
              </div>
            ))}

          </div>

          <div className="mt-6 md:mt-8 p-4 bg-[#f0f7ff] rounded-xl text-center text-[#1f2d6b] font-medium text-sm">
            Call Now: +923259133336
          </div>

        </div>
      </div>

      {/* ================= MAP ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-14">
        <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-[220px] md:h-[320px]"
          />
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: 0.3s;
          font-size: 14px;
          background: #fff;
        }

        .input:focus {
          border-color: #1596d4;
          box-shadow: 0 0 0 3px rgba(21,150,212,0.15);
        }

        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }

        @keyframes slideUp {
          from {opacity: 0; transform: translateY(30px);}
          to {opacity: 1; transform: translateY(0);}
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>

      <Contact />
    </div>
  );
};

export default AppointmentPage;