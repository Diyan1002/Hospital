import React, { useState } from "react";

import logo from "../assets/lool.png";
import emergencyIcon from "../assets/1.svg";
import workHourIcon from "../assets/2.svg";
import locationIcon from "../assets/3.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-[#F9FBFF] to-white shadow-sm border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        
        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center justify-center gap-20">
          
          {/* LOGO */}
          <div className="h-[60px] md:h-[90px] flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-36 md:w-56 lg:w-64 object-contain h-auto max-h-[90px] md:max-h-[120px]"
            />
          </div>

          {/* INFO CARDS */}
          <div className="flex gap-5">
            <Card
              icon={emergencyIcon}
              title="WORK HOUR"
              text="05:00 PM - 09:00 PM Mon - Thu"
            />

            <Card
              icon={workHourIcon}
              title="LOCATION"
              text="View on Map"
              link="https://share.google/7nxXQ27iVh4yy9pp6"
            />

            <Card
              icon={locationIcon}
              title="CALL NOW"
              text="+92 325 9133336"
            />
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden">
          
          {/* TOP BAR */}
          <div className="flex items-center justify-between">
            <div className="h-[45px] flex items-center overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="w-28 object-contain"
              />
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="text-[#1F2B6C] font-semibold text-sm border border-[#1F2B6C]/20 px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              {open ? "Close" : "Info"}
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          {open && (
            <div className="mt-4 space-y-3 animate-fadeIn">
              <Card
                icon={emergencyIcon}
                title="WORK HOUR"
                text="05:00 PM - 09:00 PM Mon - Thu"
              />

              <Card
                icon={workHourIcon}
                title="LOCATION"
                text="View on Map"
                link="https://share.google/7nxXQ27iVh4yy9pp6"
              />

              <Card
                icon={locationIcon}
                title="CALL NOW"
                text="+92 325 9133336"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

/* CARD COMPONENT */
const Card = ({ icon, title, text, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-lg px-5 py-4 min-w-[240px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-50 to-sky-50 opacity-90"></div>

      {/* Glow Effect */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl group-hover:scale-125 transition duration-700"></div>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-700"></div>

      <div className="relative flex items-center gap-4">
        
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8F0FF] to-[#DCE8FF] flex items-center justify-center shadow-md">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#1F2B6C] tracking-wide">
            {title}
          </h4>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#1F2B6C] font-medium transition"
            >
              {text}
            </a>
          ) : (
            <p className="text-sm text-gray-600">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
};