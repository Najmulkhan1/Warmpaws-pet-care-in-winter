import React from "react";
import { MdOutlineStarHalf, MdStar, MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router";
import { FaUserCircle,  FaCheckCircle } from "react-icons/fa"; 

const PetCard = ({ service }) => {
  

  return (
    <div className="p-4"> 
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border-t-4 border-teal-500 overflow-hidden">
        
       
        <figure className="h-40 relative overflow-hidden">
          <img
            className="h-full w-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
            src={service.image}
            alt={service.serviceName}
          />
        </figure>
        
      
        <div className="p-5">
          
         
          <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">
            {service.serviceName}
          </h2>
          
          
          <div className="flex items-center text-sm text-gray-500 mb-3 border-b pb-3 border-gray-100">
             <FaUserCircle className="mr-1 text-teal-500" />
             <span className="font-medium mr-3 truncate">{service.providerName || "Service Provider"}</span>
             <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                {service.category}
             </span>
          </div>

         
          <div className="flex justify-between items-center mb-4">
            
            
            <div className="text-3xl font-extrabold text-teal-600 flex items-start">
              <span className="text-xl font-semibold mt-0.5">$</span>{service.price}
            </div>
            
            
            <div className="flex items-center text-base font-bold text-gray-700">
              {service.rating >= 4.5 ? <MdStar className="text-xl text-yellow-500 mr-1" /> : <MdOutlineStarHalf className="text-xl text-yellow-500 mr-1" />}
              <span>{service.rating}</span>
            </div>
          </div>

         
          <Link 
            to={`/service-details/${service.serviceId}`} 
            className="group w-full flex items-center justify-center py-2.5 px-4 bg-teal-600 text-white font-semibold rounded-md shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200 ease-in-out"
          >
            <FaCheckCircle className="mr-2 text-sm" />
            <span className="uppercase tracking-wide text-sm">View Details</span>
            <MdOutlineChevronRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;