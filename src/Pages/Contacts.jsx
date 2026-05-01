import React from "react";
import aboutBg from "../assets/ct.png";

import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/location1.png";
import emailIcon from "../assets/email.png";
import clockIcon from "../assets/clock.png";

export default function ContactSection() {
  return (
    <div className="bg-[#f7f9fc]">

      {/* ================= BANNER ================= */}
      <section
        className="relative w-full h-[160px] md:h-[190px] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
          <p className="text-[#1f2d6b] text-sm font-medium">
            Home / Contact
          </p>

          <h1 className="mt-1 text-3xl md:text-4xl font-bold text-[#1f2d6b] font-serif">
            Contact Us
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1596d4]" />
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* MAP */}
        <div className="w-full h-[250px] md:h-[380px] rounded-2xl overflow-hidden shadow-md mb-12">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {/* FORM */}
          <div>
            <p className="text-[#1596d4] text-xs tracking-[4px] uppercase font-semibold">
              Get In Touch
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2d6b] mb-6">
              Contact
            </h2>

            <form className="bg-[#1f2d6b] text-white rounded-2xl overflow-hidden shadow-lg">

              {/* inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <input placeholder="Name" className="input border-b sm:border-r sm:border-b-0" />
                <input placeholder="Email" className="input border-b sm:border-b-0" />
              </div>

              <input placeholder="Subject" className="input border-t" />

              <textarea
                placeholder="Message"
                rows="5"
                className="input border-t resize-none"
              ></textarea>

              <button className="w-full bg-[#dbeafe] text-[#1f2d6b] py-3 font-semibold hover:bg-white transition">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <InfoCard icon={phoneIcon} title="Emergency">
              <p>+923259133336</p>
            </InfoCard>

           <InfoCard icon={locationIcon} title="Location" dark>
  <a
    href="https://share.google/7nxXQ27iVh4yy9pp6"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    View on map
  </a>
</InfoCard>

            <InfoCard icon={emailIcon} title="Email">
              <p>tcsbyasim21@gmail.com</p>
            </InfoCard>

            <InfoCard icon={clockIcon} title="Working Hours">
              <p>Mon-Thu 05:00 PM-09:00 PM</p>
            </InfoCard>

          </div>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .input::placeholder {
          color: rgba(255,255,255,0.7);
        }
      `}</style>
    </div>
  );
}

/* ================= INFO CARD ================= */
const InfoCard = ({ icon, title, children, dark = false }) => {
  return (
    <div
      className={`p-5 rounded-2xl text-sm shadow-md hover:shadow-xl transition
      ${dark ? "bg-[#1f2d6b] text-white" : "bg-[#dbeafe] text-[#1f2d6b]"}`}
    >
      <img src={icon} alt={title} className="w-6 mb-3" />

      <h3 className="font-semibold mb-2 uppercase text-xs tracking-wider">
        {title}
      </h3>

      <div className="text-xs leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
};