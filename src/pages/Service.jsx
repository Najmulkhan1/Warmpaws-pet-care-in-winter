import React, { useState, useContext, useMemo, useEffect } from 'react'; // Import useEffect
import PetCard from '../components/PetCard';
import { useRouteLoaderData } from 'react-router';
import { FaSearch, FaFilter, FaDollarSign, FaTags, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Loading from './Loading';
import { AuthContext } from '../provider/AuthContext';

const Service = () => {

  const { loading } = useContext(AuthContext);
  const allServices = useRouteLoaderData('root') || [];

  // --- State for Filtering ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100); // Initial dummy value
  const [priceRange, setPriceRange] = useState(100); // Initial dummy value

  // --- State for Mobile Responsiveness ---
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  // --- Dynamic Data Calculation (Memoized) ---
  // 1. Calculate Categories
  const categories = useMemo(() => {
    // Ensure we only map if allServices is defined and not empty
    const uniqueCategories = allServices.length > 0
      ? [...new Set(allServices.map(service => service.category))]
      : [];
    return ['All', ...uniqueCategories];
  }, [allServices]);

  // 2. Calculate the true Maximum Service Price
  const trueMaxServicePrice = useMemo(() => {
    // Calculate the highest price, defaulting to 0 if the array is empty
    return Math.max(...allServices.map(s => s.price || 0), 0);
  }, [allServices]);


  // --- FIX: Initialize Price States using useEffect ---
  // This runs AFTER render and handles the side effect of setting state based on loaded data.
  useEffect(() => {
    if (allServices.length > 0 && trueMaxServicePrice > maxPrice) {
      // Only update maxPrice and set the initial priceRange when the data loads
      setMaxPrice(trueMaxServicePrice);
      setPriceRange(trueMaxServicePrice);
    }
    // NOTE: The dependency array includes only trueMaxServicePrice 
    // to ensure it runs whenever the calculated maximum price changes (i.e., when allServices changes)
  }, [trueMaxServicePrice]);


  // --- Filtering Logic ---
  const filteredServices = allServices.filter(service => {
    // Ensure serviceName is available before calling toLowerCase
    const searchTarget = service.serviceName ? service.serviceName.toLowerCase() : '';

    const categoryMatch = selectedCategory === 'All' || service.category === selectedCategory;
    const searchMatch = searchTarget.includes(searchTerm.toLowerCase());
    // Ensure service.price is treated as 0 if undefined for safety
    const servicePrice = service.price || 0;
    const priceMatch = servicePrice >= minPrice && servicePrice <= priceRange;

    return categoryMatch && searchMatch && priceMatch;
  });


  // --- Reset Function ---
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    // Use the latest calculated true maximum price for reset
    setPriceRange(trueMaxServicePrice);
  }


  // --- Loading Screen ---
  if (loading) {
    return <Loading />
  }

  // --- Component Render ---
  return (
    <div className="w-11/12 mx-auto py-12">

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-primary mb-10">
        Explore Pet Services 🐾
      </h1>


      {/* Search Input Bar (remains full width) */}
      <div className="relative mb-8 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
        <input
          type="text"
          placeholder="Search for grooming, walking, vet services, etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 text-lg border-2 border-primary/30 rounded-xl focus:ring-primary focus:border-primary transition duration-200 outline-none"
        />
        <FaSearch className="absolute left-7 top-7 text-primary text-xl" />
      </div>


      {/* Main Content: Sidebar and Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* --- Sidebar (Filter Controls) --- */}
        <aside className="lg:col-span-1 p-6 bg-white rounded-xl shadow-2xl h-fit lg:sticky top-4 border-l-4 border-primary">

          {/* Filter Header (Always visible) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex justify-between items-center text-2xl font-bold text-gray-800 mb-4 lg:mb-6"
          >
            <span><FaFilter className="mr-2 text-primary inline" /> Filter Options</span>
            {/* Toggle Icon for Mobile */}
            <span className="lg:hidden">
              {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>

          {/* Filter Content (Visible on desktop or when toggled open on mobile) */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isFilterOpen ? 'max-h-screen' : 'max-h-0 lg:max-h-full'}`}>

            {/* Price Filter */}
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <FaDollarSign className="mr-2 text-secondary" /> Price Range
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Current Max: <span className="font-bold text-primary">${priceRange}</span>
              </p>
              <input
                type="range"
                min={minPrice}
                max={maxPrice} // Use the state variable here
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-primary"
              />
            </div>

            {/* Category Filter (Buttons/Tabs) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <FaTags className="mr-2 text-secondary" /> Categories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => {
                  const count = allServices.filter(s => cat === 'All' || s.category === cat).length;
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`
                        w-full text-left px-4 py-2 rounded-lg transition duration-200 flex justify-between items-center
                        ${isActive
                          ? 'bg-primary text-white font-bold shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      `}
                    >
                      <span>{cat}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isActive ? 'bg-white text-primary' : 'bg-gray-300 text-gray-700'}`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Reset Button for Filters */}
            <button
              onClick={resetFilters}
              className="mt-6 w-full px-4 py-2 bg-error text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Reset All Filters
            </button>
          </div>
        </aside>


        {/* --- Main Service List --- */}
        <main className="lg:col-span-3">

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {filteredServices.map(service => (
                <PetCard key={service.id || service.serviceName} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-xl shadow-lg border-t-4 border-error">
              <p className="text-2xl font-semibold text-gray-700">
                No services found matching your criteria. 😔
              </p>
              <p className="text-gray-500 mt-2">Try adjusting the search term, category, or price range.</p>
              <button
                onClick={resetFilters}
                className="mt-4 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Service;