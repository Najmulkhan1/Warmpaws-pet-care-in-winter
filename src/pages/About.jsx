import React from "react";
import { Link } from "react-router";
import { FaHeart, FaSnowflake, FaHandHoldingHeart, FaDog } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-base-100 font-sans">
      
      {/* --- Section 1: Hero / Our Story --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="badge badge-primary badge-outline mb-2">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Warming Hearts, <br />
              <span className="text-primary">One Paw at a Time.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Winter can be a magical time, but it brings unique challenges for our furry family members. 
              **WarmPaws** was born from a simple observation: finding reliable winter care, warm clothing, 
              and seasonal grooming tips was harder than it should be.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We created a community-driven platform that connects pet owners with the best local resources 
              to ensure no tail stops wagging just because the temperature drops.
            </p>
            
            <div className="flex gap-4 pt-4">
               <Link to="/service" className="btn btn-primary text-white px-8 rounded-full">
                 View Services
               </Link>
               <Link to="/contact" className="btn btn-ghost hover:bg-base-200 rounded-full">
                 Contact Us
               </Link>
            </div>
          </div>

          {/* Image Composition */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Main Image: Dog in winter clothing */}
              <img 
                src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy dog in snow" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
               <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-500">
                     <FaHeart className="text-2xl" />
                  </div>
                  <div>
                     <p className="text-2xl font-bold text-gray-800">2,000+</p>
                     <p className="text-sm text-gray-500">Happy Pets Warmed</p>
                  </div>
               </div>
            </div>
             {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Our Mission (The 3 Pillars) --- */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800">Why Choose WarmPaws?</h3>
            <p className="text-gray-600 mt-2">We are more than just a directory; we are a community of care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="card bg-white shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-4">
                  <FaSnowflake className="text-3xl" />
                </div>
                <h4 className="card-title text-xl">Winter-Ready Focus</h4>
                <p className="text-gray-600">
                  We specialize in seasonal care. From paw balms for icy roads to heated beds, we curate what matters for the cold.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-white shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <FaHandHoldingHeart className="text-3xl" />
                </div>
                <h4 className="card-title text-xl">Trusted Services</h4>
                <p className="text-gray-600">
                  Every groomer, sitter, and vet listed on our platform is vetted to ensure your pet receives love and professional care.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-white shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <FaDog className="text-3xl" />
                </div>
                <h4 className="card-title text-xl">Community Expert Tips</h4>
                <p className="text-gray-600">
                  Access articles and guides from veterinarians about nutrition, exercise, and mental health during indoor winter days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 3: Call to Action --- */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
         {/* Background Image Overlay */}
         <img 
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2000&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Dog running in snow"
         />
         
         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to make this winter their favorite season?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
               Join thousands of pet owners who trust WarmPaws for their winter care needs. Sign up today and get exclusive access to local deals.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg border-none text-white rounded-full px-10 shadow-lg hover:bg-white hover:text-primary transition-colors">
               Join WarmPaws
            </Link>
         </div>
      </section>

    </div>
  );
};

export default About;