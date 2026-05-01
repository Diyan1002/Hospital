import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/App.png";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    department: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.phone || form.phone.length < 10)
      newErrors.phone = "Valid phone required";
    if (!form.date) newErrors.date = "Select date";
    if (!form.doctor) newErrors.doctor = "Select doctor";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Appointment Booked ✅");
    }
  };

  return (
    <section className="relative py-16 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* LEFT TEXT */}
        <div
          className={`text-center md:text-left transition-all duration-700 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
            Book Appointment
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Quick and easy doctor booking system.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className={`bg-[#1e2a78]/90 p-5 sm:p-6 rounded-xl shadow-2xl text-white space-y-3
          transition-all duration-700 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >

          {/* ROW 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                name="name"
                onChange={handleChange}
                placeholder="Name"
                className="input"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <select name="gender" onChange={handleChange} className="input">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="input"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
              <input
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                className="input"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input type="date" name="date" onChange={handleChange} className="input" />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <input type="time" name="time" onChange={handleChange} className="input" />
          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <select name="doctor" onChange={handleChange} className="input">
                <option value="">Doctor</option>
                <option>Dr Ijaz Ali</option>
                <option>Dr. Jane</option>
              </select>
              {errors.doctor && <p className="error">{errors.doctor}</p>}
            </div>

            <select name="department" onChange={handleChange} className="input">
              <option>Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Message"
            rows="3"
            className="input"
          />

          {/* BUTTON */}
          <button className="w-full bg-white text-blue-900 py-3 rounded-lg font-semibold hover:scale-[1.02] active:scale-95 transition">
            Submit
          </button>
        </form>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: white;
          font-size: 14px;
          outline: none;
          transition: 0.3s;
        }

        .input:focus {
          border-color: white;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.2);
        }

        .error {
          font-size: 11px;
          color: #ffb3b3;
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
}