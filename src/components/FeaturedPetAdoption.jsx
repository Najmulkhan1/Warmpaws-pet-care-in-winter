import React from 'react';
import { FaHeart, FaPaw, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';


const featuredPetData = {
  id: 101,
  name: "Barnaby",
  species: "Dog",
  breed: "Labrador Retriever Mix",
  age: "3 Months",
  location: "Main Shelter Location",
  image: "https://i.ibb.co.com/gMqnFvZm/cristina-anne-costello-NR2e-Mg9z-Xx-A-unsplash.jpg",
  description: "Barnaby is a loyal, sweet-natured dog who loves long walks and belly rubs. He's great with kids and other dogs, and is looking for a forever home with a fenced yard. He's neutered, microchipped, and fully vaccinated. Come meet your new best friend!",
  status: "Available"
};


const FeaturedPetAdoption = () => {
  const pet = featuredPetData;

  return (
    <section className="py-16 md:py-20">
      
      
      <header className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-amber-700 mb-3 flex items-center justify-center">
          <FaHeart className="mr-3 text-red-500" /> Meet Our Featured Pet!
        </h2>
        <p className="text-lg text-gray-600">
          Ready to change a life? This wonderful pet is currently waiting for their forever family.
        </p>
      </header>
      
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">
        
      
        <div className="md:w-1/2">
          <img 
            className="w-full h-full object-cover max-h-96 md:max-h-full"
            src={pet.image}
            alt={pet.name}
          />
        </div>
        
       
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          
          <h3 className="text-4xl font-black text-gray-900 mb-2">{pet.name}</h3>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-lg font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">{pet.species}</span>
            <span className="text-lg font-medium text-gray-700">{pet.breed}</span>
          </div>
          
         
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center text-gray-700">
              <FaCalendarAlt className="mr-2 text-red-400" />
              <span className="font-medium">Age:</span> {pet.age}
            </div>
            <div className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-red-400" />
              <span className="font-medium">Status:</span> {pet.status}
            </div>
          </div>
          
        
          <p className="text-gray-600 mb-8 leading-relaxed">
            {pet.description}
          </p>
       
          <button className="w-full py-4 px-6 bg-red-500 text-white font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:bg-red-600 hover:scale-[1.02] focus:ring-4 focus:ring-red-300 flex items-center justify-center">
            <FaPaw className="mr-3" /> Apply to Adopt {pet.name}
          </button>

        </div>
      </div>
    </section>
  );
};

export default FeaturedPetAdoption;