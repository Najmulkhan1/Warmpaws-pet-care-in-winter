import React, { useState, useContext } from 'react'; 
import PetCard from '../components/PetCard';
import { useRouteLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaSearch, FaFilter } from 'react-icons/fa'; 
import Loading from './Loading';

const Service = () => {
 
  const { loading } = useContext(AuthContext); 
  const allServices = useRouteLoaderData('root') || []; 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service => {
    
    const categoryMatch = selectedCategory === 'All' || service.category === selectedCategory;

    const searchMatch = service.serviceName.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });


  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b pb-2">Our Services</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-md border border-gray-200">
        
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by service name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="relative">
          <FaFilter className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-48 appearance-none bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat} ({allServices.filter(s => cat === 'All' || s.category === cat).length})</option>
            ))}
          </select>
        </div>
      </div>

      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {filteredServices.map(service => (
            <PetCard key={service.id} service={service} /> 
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-white rounded-lg shadow-md">
          <p className="text-2xl font-semibold text-gray-700">
            No services found matching your criteria. 😔
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Service;