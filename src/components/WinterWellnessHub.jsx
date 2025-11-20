import React from 'react';
import { PawPrint, Heart, Lightbulb, Sun } from 'lucide-react';

const WinterWellnessHub = () => {
    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-extrabold text-indigo-700 mb-2 border-b-4 border-indigo-300 pb-2 inline-block">
                    💙 The Winter Wellness Hub
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Keep the tail wagging! Essential care for joint comfort, skin health, and boosting mood during the chilly months.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="bg-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 border-t-8 border-indigo-500">
                        <Heart className="w-12 h-12 text-indigo-600 mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Joint Comfort & Mobility
                        </h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Cold weather often exacerbates **arthritis and stiff joints**, especially in older pets. Proper support is key to pain-free movement.
                        </p>
                        
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start text-gray-800">
                                <PawPrint className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    **Orthopedic Beds:** Raised beds and cozy blankets to keep them off cold, hard floors.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-800">
                                <PawPrint className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    **Joint Supplements:** Omega-3 and Glucosamine options for smoother, pain-free movement.
                                </div>
                            </li>
                        </ul>
                        
                        <a 
                            href="#" 
                            className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            Shop Joint Support & Beds →
                        </a>
                    </div>

                    <div className="bg-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 border-t-8 border-amber-500">
                        <Sun className="w-12 h-12 text-amber-600 mb-4" />
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Dry Skin & Mental Boost
                        </h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Indoor heating causes **dry skin and static electricity** in coats. Combat boredom with engaging indoor activities.
                        </p>

                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start text-gray-800">
                                <Lightbulb className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    **Moisturizers & Balms:** Pet-safe creams for cracked paws, nose, and dry skin.
                                </div>
                            </li>
                            <li className="flex items-start text-gray-800">
                                <Lightbulb className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    **Enrichment Toys:** Interactive puzzle feeders and treat-dispensers to keep minds active.
                                </div>
                            </li>
                        </ul>
                        
                        <a 
                            href="#" 
                            className="inline-block mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            Browse Skin Care & Indoor Toys →
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WinterWellnessHub;