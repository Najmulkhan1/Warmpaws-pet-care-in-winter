import AOS from "aos";
import "aos/dist/aos.css"; //
import React from "react";

import {
  FaPaw,
  FaTint,
  FaHome,
  FaUtensils,
  FaThermometerHalf,
  FaHeartbeat,
} from "react-icons/fa";


const winterTipsData = [
  {
    id: 1,
    icon: FaHome,
    title: "Shelter is Key",
    description:
      "Keep pets indoors as much as possible. If they must go outside, provide a dry, draft-free shelter and thick bedding.",
    category: "Housing",
  },
  {
    id: 2,
    icon: FaTint,
    title: "Avoid Antifreeze",
    description:
      "Antifreeze is a deadly poison. Clean up spills immediately and consider using pet-safe coolants in your vehicle.",
    category: "Safety",
  },
  {
    id: 3,
    icon: FaPaw,
    title: "Protect Paws",
    description:
      "Salt and de-icers can burn paws. Wipe them down after walks or consider using booties for protection.",
    category: "Grooming",
  },
  {
    id: 4,
    icon: FaUtensils,
    title: "Adjust Nutrition",
    description:
      "Pets burn more energy trying to stay warm. Consult your vet about slightly increasing their food intake, especially outdoor pets.",
    category: "Diet",
  },
  {
    id: 5,
    icon: FaThermometerHalf,
    title: "Bundle Up Short-Hairs",
    description:
      "Breeds with short coats may need a sweater or jacket when outside to help maintain their body temperature.",
    category: "Clothing",
  },
  {
    id: 6,
    icon: FaHeartbeat,
    title: "Beware of Hypothermia",
    description:
      "If your pet is shivering, weak, or seems depressed, get them inside immediately and wrap them in warm blankets. Call your vet.",
    category: "Health",
  },
];

AOS.init({
  duration: 800,
  once: true,
});

const WinterCareTips = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          ❄️ Winter Care Tips for Pets 🐾
        </h1>
        <p className="text-lg text-gray-600">
          Essential advice to keep your furry friends safe and warm during the
          cold months.
        </p>
      </header>

   
      <div data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {winterTipsData.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-teal-500"
            >
              {/* Icon & Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <tip.icon className="text-4xl text-teal-500 bg-teal-50 p-2 rounded-full" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 bg-gray-200 px-3 py-1 rounded-full">
                  {tip.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 flex-grow">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCareTips;
