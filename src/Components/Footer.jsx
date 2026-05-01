import React from "react";
import { Link } from "react-router-dom";

import sendIcon from "../assets/send.svg";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import logo from "../assets/rssf.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f2d6b] text-white">
      <div className="max-w-[1050px] mx-auto px-6 pt-14 pb-8">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

          {/* Logo / About */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-auto mb-5 object-contain mx-auto sm:mx-0"
            />

           <p className="text-[13px] leading-[22px] text-white/85 max-w-[230px]">
  Transforming skin health with advanced dermatology, laser, and aesthetic solutions.
</p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-[14px] font-bold mb-5">
              Important Links
            </h3>

            <ul className="space-y-[9px] text-[13px] text-white/85">

              <li>
                <Link to="/appointment" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#bfd0f5]">
                  Appointment
                </Link>
              </li>

              <li>
                <Link to="/doctors" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#bfd0f5]">
                  Doctors
                </Link>
              </li>

              <li>
                <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#bfd0f5]">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#bfd0f5]">
                  About Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[14px] font-bold mb-5">
              Contact Us
            </h3>

            <div className="space-y-[8px] text-[13px] text-white/85">
              <p>Call: +923259133336</p>
              <p>Email: tcsbyasim21@gmail.com</p>
              <p>
  Address: {" "}
  <a
    href="https://share.google/7nxXQ27iVh4yy9pp6"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline ml-2"
  >
    View on map
  </a>
</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[14px] font-bold mb-5">
              Newsletter
            </h3>

            <form className="w-full max-w-[230px] mx-auto sm:mx-0">
              <div className="flex items-center bg-[#bfd0f5] rounded-[3px] overflow-hidden h-[45px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-full px-4 bg-transparent outline-none text-[#1f2d6b] placeholder:text-[#1f2d6b]/80 text-[12px]"
                />

                <button
                  type="submit"
                  className="w-[48px] h-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <img
                    src={sendIcon}
                    alt="Send"
                    className="w-[17px] h-[17px] object-contain"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-white/35 my-9"></div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">

          <p className="text-[12px] text-white/85">
            © 2026 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>

          <div className="flex items-center gap-4">
  <a
    href="https://www.linkedin.com/company/your-company"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkedinIcon} alt="LinkedIn" className="w-[18px] h-[18px]" />
  </a>

  <a
    href="https://tr.ee/13ya7RXV4n"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={facebookIcon} alt="Facebook" className="w-[18px] h-[18px]" />
  </a>

  <a
    href="https://tr.ee/gcSqGi_eIF"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={instagramIcon} alt="Instagram" className="w-[18px] h-[18px]" />
  </a>
</div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;