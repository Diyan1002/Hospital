import React, { useState } from "react";

import logo from "../assets/Meddical.svg";
import emergencyIcon from "../assets/1.svg";
import workHourIcon from "../assets/2.svg";
import locationIcon from "../assets/3.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex items-center justify-center gap-48">

          {/* LOGO */}
          <img
            src={logo}
            alt="logo"
            className="w-36 object-contain"
          />

          {/* INFO CARDS */}
          <div className="flex gap-4">

            <Card icon={emergencyIcon} title="EMERGENCY" text="+923259133336" bg="bg-blue-50" />

            <Card icon={workHourIcon} title="WORK HOUR" text="09:00 - 20:00 Everyday" bg="bg-green-50" />

            <Card icon={locationIcon} title="LOCATION" text="0123 Some Place" bg="bg-orange-50" />

          </div>

        </div>

        {/* MOBILE VIEW (ONLY LOGO + CLICK) */}
        <div className="lg:hidden">

          {/* LOGO + BUTTON */}
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" className="w-28" />

            <button
              onClick={() => setOpen(!open)}
              className="text-[#1F2B6C] font-semibold text-sm border px-4 py-1 rounded-full"
            >
              {open ? "Close" : "Info"}
            </button>
          </div>

          {/* DROPDOWN INFO */}
          {open && (
            <div className="mt-4 space-y-3">

              <Card icon={emergencyIcon} title="EMERGENCY" text="+923259133336" bg="bg-blue-50" />

              <Card icon={workHourIcon} title="WORK HOUR" text="09:00 - 20:00 Everyday" bg="bg-green-50" />

              <Card icon={locationIcon} title="LOCATION" text="0123 Some Place" bg="bg-orange-50" />

            </div>
          )}

        </div>

      </div>

    </header>
  );
};

export default Header;

/* CARD COMPONENT */
const Card = ({ icon, title, text, bg }) => {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-sm ${bg} min-w-[220px]`}>
      <img src={icon} alt={title} className="w-9 h-9" />
      <div>
        <h4 className="text-sm font-bold text-[#1F2B6C]">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};