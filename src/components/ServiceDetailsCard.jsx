import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUserTie,
  FaEnvelopeOpenText,
  FaArrowRight,
  FaCalendarCheck,
  FaInfoCircle,
} from "react-icons/fa";
import RatingRenderStart from "./RatingRenderStart";

const ServiceDetailsCard = ({ service }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Request Sent Successfully.", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
    setName("");
    setEmail("");
  };

  if (!service) {
    return (
      <div className="p-8 text-center text-red-500">
        Service data is not available.
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-white p-6 md:p-10 border-b border-gray-200">
          <span className="inline-block text-sm font-medium px-3 py-1 text-navy-800 bg-blue-50 border border-blue-200 rounded-full mb-3">
            {service.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {service.serviceName}
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-gray-600 mt-4">
            <div className="flex items-center gap-2">
              <FaUserTie className="text-blue-600 text-lg" />
              <span className="font-semibold">{service.providerName}</span>
            </div>

            <RatingRenderStart rating={service.rating} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
          <div className="lg:col-span-2 space-y-6">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-auto max-h-[400px] object-cover rounded-md shadow-lg border border-gray-100"
            />

            <h2 className="text-2xl font-bold text-gray-800 pt-4">
              In-depth Service Overview
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600 pt-4 border-t border-gray-100">
              <FaEnvelopeOpenText className="text-blue-600" />
              <span>Contact:</span>
              <a
                href={`mailto:${service.providerEmail}`}
                className="hover:underline text-blue-600 font-medium"
              >
                {service.providerEmail}
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-200 sticky top-10">
              <div className="text-center mb-6 pb-4 border-b border-gray-200">
                <span className="text-5xl font-extrabold text-blue-800 block leading-none">
                  ${service.price}
                </span>
                <span className="text-base font-medium text-gray-600 mt-1 block">
                  per session
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6 p-2 bg-yellow-100 text-yellow-800 rounded-md">
                <FaInfoCircle className="text-sm" />
                <span className="text-sm font-semibold">
                  Only {service.slotsAvailable} slots remain.
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCalendarCheck className="text-blue-600" /> Book Now
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nameV6" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nameV6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="emailV6" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailV6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Professional Email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold text-lg py-3 mt-2 rounded-md flex items-center justify-center gap-2 group hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg"
                >
                  <span>Book Now</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ServiceDetailsCard;
