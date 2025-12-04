import React from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa"; // You might need: npm install react-icons

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    // Simulate sending data
    toast.success("Thanks for reaching out! We'll warm up your inbox shortly. 🐾");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about winter grooming? Need help finding the perfect sweater size for your pup? 
            We are here to help keep your paws warm and happy!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
          
          {/* Left Side: Contact Info & Illustration */}
          <div className="bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-10 translate-y-10"></div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaPaw className="text-xl" /> Contact Information
              </h3>
              <p className="text-blue-100 mb-8">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Phone</p>
                    <p className="font-medium">+880 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Email</p>
                    <p className="font-medium">hello@warmpaws.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Location</p>
                    <p className="font-medium">123 Snowy Lane, Winter City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links or Decor */}
            <div className="mt-12">
              <p className="text-sm text-blue-100 mb-4">Follow our journey:</p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <button className="btn btn-sm btn-circle btn-ghost border border-white/30 hover:bg-white hover:text-primary">FB</button>
                <button className="btn btn-sm btn-circle btn-ghost border border-white/30 hover:bg-white hover:text-primary">IG</button>
                <button className="btn btn-sm btn-circle btn-ghost border border-white/30 hover:bg-white hover:text-primary">TW</button>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="p-10 bg-white">
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-gray-600">First Name</span>
                  </label>
                  <input type="text" placeholder="John" className="input input-bordered w-full focus:input-primary bg-gray-50" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-gray-600">Last Name</span>
                  </label>
                  <input type="text" placeholder="Doe" className="input input-bordered w-full focus:input-primary bg-gray-50" />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-600">Email Address</span>
                </label>
                <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:input-primary bg-gray-50" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-600">Topic</span>
                </label>
                <select className="select select-bordered w-full focus:select-primary bg-gray-50">
                  <option disabled selected>Select a topic</option>
                  <option>Grooming Services</option>
                  <option>Clothing & Accessories</option>
                  <option>General Inquiry</option>
                  <option>Expert Advice</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-600">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-32 w-full focus:textarea-primary bg-gray-50" placeholder="How can we help your furry friend today?" required></textarea>
              </div>

              <button className="btn btn-primary w-full text-white text-lg">Send Message</button>
            </form>
          </div>
        </div>

        {/* FAQ Section (Optional but good for Service apps) */}
        <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h3>
            <div className="collapse collapse-plus bg-white mb-2 shadow-sm rounded-xl">
                <input type="radio" name="my-accordion-3" defaultChecked /> 
                <div className="collapse-title text-xl font-medium text-gray-700">
                    Do you provide mobile grooming services?
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>Yes! We can come to your home to ensure your pet stays warm and comfortable without needing to travel in the cold.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-white mb-2 shadow-sm rounded-xl">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium text-gray-700">
                    How do I know what size clothing fits my pet?
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>Check out our "Size Guide" on the Service page. We recommend measuring the neck, chest girth, and back length.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;