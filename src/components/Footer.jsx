import React from "react";
import logo from "../assets/logo.png";
import { 
    FaEnvelope, 
    FaPhoneAlt, 
    FaMapMarkedAlt, 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaChevronRight 
} from 'react-icons/fa'; 

const Footer = () => {
  
  
  const NavLink = ({ href, children }) => (
    <a href={href} className="flex items-center link link-hover text-sm text-gray-700 hover:text-blue-600 transition duration-300">
        <FaChevronRight className="w-2 h-2 mr-2 text-blue-500" />
        {children}
    </a>
  );

  return (
    
    <div className="bg-white text-gray-800 font-sans border-t border-gray-200">
  
      <div className="w-11/12 mx-auto py-12 md:py-16">
        <footer className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          
         
          <div className="lg:col-span-1 space-y-4">
            <aside>
              <img className="w-44 mb-4" src={logo} alt="WarmPaws Logo" /> 
              <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
                Nurturing the well-being of your beloved pets through the colder months with expertise and compassion.
              </p>
              <div className="flex gap-4 pt-6">
                <a href="#" aria-label="Facebook" className="text-xl text-blue-500 hover:text-blue-700 transition duration-300">
                    <FaFacebookF />
                </a>
                <a href="#" aria-label="Twitter" className="text-xl text-blue-500 hover:text-blue-700 transition duration-300">
                    <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram" className="text-xl text-blue-500 hover:text-blue-700 transition duration-300">
                    <FaInstagram />
                </a>
              </div>
            </aside>
          </div>
          
         
          <nav className="space-y-3">
            <h6 className="font-bold text-lg text-gray-900 mb-4 border-b-2 border-blue-100 pb-1 uppercase tracking-wider">Our Services</h6>
            <NavLink href="#">Temperature Monitoring</NavLink>
            <NavLink href="#">Custom Diets</NavLink>
            <NavLink href="#">Emergency Protocols</NavLink>
            <NavLink href="#">Grooming Schedules</NavLink>
          </nav>
          
          
          <nav className="space-y-3">
            <h6 className="font-bold text-lg text-gray-900 mb-4 border-b-2 border-blue-100 pb-1 uppercase tracking-wider">Company Info</h6>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Meet Our Vets</NavLink>
            <NavLink href="#">Privacy Policy</NavLink>
            <NavLink href="#">Careers & Jobs</NavLink>
          </nav>
          
         
          <div className="lg:col-span-1 space-y-4 bg-blue-50 p-6 rounded-lg shadow-inner  border border-blue-100">
            <h6 className="font-bold text-lg text-blue-600 mb-4 uppercase tracking-wider">Get In Touch</h6>
            <div className="flex items-start space-y-2 flex-col">
                <div className="flex items-center text-sm text-gray-700">
                    <FaMapMarkedAlt className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    <span>101 Paw Road, Winter Park, US 10001</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                    <FaPhoneAlt className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    <span>+1 (800) 987-WINTER</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                    <FaEnvelope className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    <span>contact@warmpaws.com</span>
                </div>
            </div>
          </div>
        </footer>
      </div>

      
      <div className="bg-gray-100 py-3 border-t border-gray-200">
        <div className="w-11/12 mx-auto text-center text-sm text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} - WarmPaws – Pet Care in Winter. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;