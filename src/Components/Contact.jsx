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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <Card icon={phoneIcon} title="Call Now">
            <p>+92 325 9133336</p>
          </Card>

          <Card icon={locationIcon} title="Location">
            <a
              href="https://share.google/7nxXQ27iVh4yy9pp6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-[#1f2d6b] hover:underline font-medium"
            >
              View on map
            </a>
          </Card>

          <Card icon={emailIcon} title="Email">
            <p>tcsbyasim21@gmail.com</p>
          </Card>

          <Card icon={clockIcon} title="Working Hours">
            <p>05:00 PM - 09:00 PM</p>
            <p>Mon - Thu</p>
          </Card>

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
const Card = ({ icon, title, children }) => {
  return (
    <div className="group relative p-6 rounded-2xl text-center bg-white/80 backdrop-blur-lg border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-[#1f2d6b] transition duration-300">
  <img
    src={icon}
    alt={title}
    className="w-6 h-6 brightness-0 group-hover:brightness-0 group-hover:invert transition duration-300"
  />
</div>

      {/* Title */}
      <h3 className="relative z-10 text-lg font-semibold text-[#1f2d6b] mb-2">
        {title}
      </h3>

      {/* Content */}
      <div className="relative z-10 text-sm text-gray-600 leading-relaxed space-y-1">
        {children}
      </div>

      {/* Bottom line animation */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};