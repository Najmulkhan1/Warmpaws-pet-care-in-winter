import React from "react";
// Using MdStar and MdOutlineStarHalf for ratings
import { MdOutlineStarHalf, MdStar } from "react-icons/md";
import { Link } from "react-router";
// Using FaUserCircle for provider, FaPaw for the action button
import { FaUserCircle, FaPaw } from "react-icons/fa";


const PetCard = ({ service }) => {


  // Function to render rating stars (can be refined further)
  const renderRating = (rating) => {
    // Simplified: show a full star for 4.0+, and a half star for less, keeping the rating number.
    if (rating >= 4.0) {
      return <MdStar className="text-xl text-yellow-500 mr-1" />;
    } else if (rating > 0) {
      return <MdOutlineStarHalf className="text-xl text-yellow-500 mr-1" />;
    }
    return null; // Don't show an icon if rating is 0 or undefined
  };

  return (
    <div className="">
      {/* Card Container: More prominent shadow, rounded corners, subtle background color */}
      <div className="max-w-xs mx-auto bg-white rounded-xl shadow-2xl hover:shadow-3xl transition duration-500 border-2 border-gray-100 overflow-hidden">

        {/* Image Section with Price Overlay */}
        <figure className="h-48 relative overflow-hidden">
          <img
            className="h-full w-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
            src={service.image}
            alt={service.serviceName}
          />

          {/* Price Tag Overlay (Top Right) */}
          <div className="absolute top-3 right-3 bg-secondary text-white text-lg font-bold px-3 py-1 rounded-full shadow-lg">
            ${service.price}
          </div>
        </figure>


        <div className="p-5">

          {/* Service Name and Rating */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-extrabold text-gray-900 truncate pr-2">
              {service.serviceName}
            </h2>
            {/* Rating Display */}
            <div className="flex items-center text-lg font-bold text-gray-700 flex-shrink-0">
              {renderRating(service.rating)}
              <span>{service.rating}</span>
            </div>
          </div>

          {/* Provider and Category */}
          <div className="flex flex-col text-sm text-gray-600 mb-5 pt-1 border-t border-gray-100">

            {/* Provider */}
            <div className="flex items-center mt-2">
              <FaUserCircle className="mr-2 text-secondary text-base" />
              <span className="font-semibold text-gray-700 truncate">{service.providerName || "Service Provider"}</span>
            </div>

            {/* Category */}
            <div className="mt-1 ml-6">
              <span className="text-xs font-medium px-2 py-0.5 bg-secondary/10 text-secondary rounded-lg">
                {service.category}
              </span>
            </div>
          </div>


          {/* View Details Button */}
          <Link
            to={`/service-details/${service.serviceId}`}
            className="group w-full flex items-center justify-center py-3 px-4 bg-primary text-white font-bold rounded-lg shadow-md shadow-primary/30 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50 transition duration-300 ease-in-out"
          >
            <FaPaw className="mr-2 text-lg transform rotate-45 transition duration-300 group-hover:rotate-0" />
            <span className="uppercase tracking-widest text-sm">Book Service</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;