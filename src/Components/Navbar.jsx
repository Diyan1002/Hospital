import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },  
    { name: "Gallery", path: "/gallery" },
    { name: "OurTeams", path: "/ourteams" },
    { name: "Equipments", path: "/equipments" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#1F2B6C] shadow-md relative">
      
      {/* ===== DESKTOP NAV (UNCHANGED STYLE) ===== */}
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-center gap-64">

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white text-sm font-medium hover:text-[#BFD2F8]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <img src={searchIcon} className="w-5 h-5" alt="search" />
          </button>

          <Link to="/appointment">
            <button className="bg-[#BFD2F8] px-6 py-2 rounded-full text-sm font-semibold">
              Appointment
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-3xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU (FIXED PROPERLY) ===== */}
      <div
        className={`md:hidden absolute left-0 w-full bg-[#1F2B6C] transition-all duration-300 overflow-hidden z-50
        ${menuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col items-center gap-4">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-medium hover:text-[#BFD2F8]"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>

    </nav>
  );
};

export default Navbar;