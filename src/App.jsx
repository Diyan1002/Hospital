import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages Sections
import Hero from "./Components/Hero";
import Welcome from "./Components/Welcome";
import Services1 from "./Components/Services1";
import Specialties from "./Components/Specialties";
import Appoint from "./Components/Appoint";
import Doctors from "./Components/Doctors";
import Contact from "./Components/Contact";

// Pages
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Doctor from "./Pages/Doctor";
import Staffs  from "./Pages/Staffs";
import Contacts from "./Pages/Contacts";
import Machines from "./Pages/Machines";
import Appointment from "./Pages/Appointment"; 

const Home = () => (
  <>
    <Hero />
    <Welcome />
    <Services1 />
    <Specialties />
    <Appoint />
    <Doctors />

    <Contact />
  </>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/machines" element={<Machines />} />

          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default App;