import React, { useState } from "react";

import logo from "../assets/lool.png";
import emergencyIcon from "../assets/1.svg";
import workHourIcon from "../assets/2.svg";
import locationIcon from "../assets/3.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center justify-center gap-48">

          {/* LOGO (UNCHANGED) */}
          <div className="h-[60px] flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-36 object-contain md:w-40 h-auto max-h-[75px]"
            />
          </div>

          {/* INFO CARDS */}
          <div className="flex gap-4">

            <Card
              icon={emergencyIcon}
              title="WORK HOUR"
              text="05:00 PM - 09:00 PM Mon - Thu"
              bg="bg-blue-50"
            />

            <Card
              icon={workHourIcon}
              title="LOCATION"
              text="View on Map"
              link="https://share.google/7nxXQ27iVh4yy9pp6"
              bg="bg-green-50"
            />

            <Card
              icon={locationIcon}
              title="CALL NOW"
              text="+92 325 9133336"
              bg="bg-orange-50"
            />

          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden">

          {/* LOGO (UPDATED SMALL SIZE) */}
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
              className="text-[#1F2B6C] font-semibold text-sm border px-4 py-1 rounded-full"
            >
              {open ? "Close" : "Info"}
            </button>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="mt-4 space-y-3">

              <Card
                icon={emergencyIcon}
                title="WORK HOUR"
                text="05:00 PM - 09:00 PM Mon - Thu"
                bg="bg-blue-50"
              />

              <Card
                icon={workHourIcon}
                title="LOCATION"
                text="View on Map"
                link="https://share.google/7nxXQ27iVh4yy9pp6"
                bg="bg-green-50"
              />

              <Card
                icon={locationIcon}
                title="CALL NOW"
                text="+92 325 9133336"
                bg="bg-orange-50"
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
const Card = ({ icon, title, text, bg, link }) => {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm ${bg} min-w-[220px]`}>

      <img src={icon} alt={title} className="w-9 h-9" />

      <div>
        <h4 className="text-sm font-bold text-[#1F2B6C]">{title}</h4>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#1596d4] hover:underline font-medium"
          >
            {text}
          </a>
        ) : (
          <p className="text-sm text-gray-600">{text}</p>
        )}
      </div>

    </div>
  );
};