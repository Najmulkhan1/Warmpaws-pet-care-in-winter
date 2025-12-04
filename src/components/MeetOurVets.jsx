import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const MeetOurVets = () => {
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/expertVets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load vets data");
        return res.json();
      })
      .then((data) => setVets(data))
      .catch((err) => {
        console.error(err);
        setVets([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-base-200 to-base-100">
      <header className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Meet Our Expert Vets 👩‍⚕️👨‍⚕️
        </h2>
        <p className="text-lg text-gray-700">
          Our dedicated team of veterinary professionals is here to provide the
          best possible care for your beloved pets. Get to know them below.
        </p>
      </header>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 hover:border-secondary h-full"
            >
              {/* Vet Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-primary/20 shrink-0">
                <img
                  src={vet.image}
                  alt={`Dr. ${vet.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vet Details */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {vet.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4 text-lg">
                    {vet.specialty}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {vet.bio}
                  </p>
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center space-x-4 mt-auto">
                  {vet.contact.linkedin && (
                    <a
                      href={vet.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition duration-200 text-2xl"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {vet.contact.email && (
                    <a
                      href={`mailto:${vet.contact.email}`}
                      className="text-primary hover:text-secondary transition duration-200 text-2xl"
                    >
                      <FaEnvelope />
                    </a>
                  )}
                  {vet.contact.phone && (
                    <a
                      href={`tel:${vet.contact.phone}`}
                      className="text-primary hover:text-secondary transition duration-200 text-2xl"
                    >
                      <FaPhone />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MeetOurVets;
