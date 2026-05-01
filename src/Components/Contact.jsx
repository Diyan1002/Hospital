import React from "react";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/location1.png";
import emailIcon from "../assets/email.png";
import clockIcon from "../assets/clock.png";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-500 text-xs tracking-[4px] uppercase font-semibold">
            Get in Touch
          </p>

          <h2 className="text-4xl font-bold text-[#1f2d6b] mt-2">
            Contact Us
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <Card icon={phoneIcon} title="Emergency">
            <p>+923259133336</p>
          </Card>

          <Card icon={locationIcon} title="Location" highlight>
            <p>0123 Some Place</p>
            <p>9876 Some Country</p>
          </Card>

          <Card icon={emailIcon} title="Email">
            <p>tcsbyasim21@gmail.com</p>
          </Card>

          <Card icon={clockIcon} title="Working Hours">
            <p>Mon - Sat: 09:00 - 20:00</p>
            <p>Sunday: Emergency only</p>
          </Card>

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
const Card = ({ icon, title, children, highlight = false }) => {
  return (
    <div
      className={`group p-6 rounded-2xl text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl
      ${highlight
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-white/70 backdrop-blur-md text-gray-700 shadow-md"
      }`}
    >

      {/* Icon */}
      <div
        className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full transition
        ${highlight
          ? "bg-white/20"
          : "bg-blue-100 group-hover:bg-blue-600"
        }`}
      >
        <img
          src={icon}
          alt={title}
          className={`w-6 h-6 transition ${
            highlight ? "invert" : "group-hover:invert"
          }`}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-semibold mb-2 ${
          highlight ? "text-white" : "text-[#1f2d6b]"
        }`}
      >
        {title}
      </h3>

      {/* Content */}
      <div className="text-sm leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
};