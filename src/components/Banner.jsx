import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaArrowRight, FaArrowLeft, FaPaw } from "react-icons/fa";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Slide Data (Unified to strict 3-color palette)
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?q=80&w=2600&auto=format&fit=crop",
            tag: "Winter Grooming",
            title: "Winter Care for Your Furry Friend",
            description: "Keep your pets safe, warm, and happy this season with our expert grooming and care services.",
            buttonText: "Book Appointment",
            color: "text-primary",
            primaryColor: "bg-primary",
            link: "/service",
        },
        {
            id: 2,
            image: "https://i.ibb.co/cXcM1Dk2/Gemini-Generated-Image-a0mxixa0mxixa0mx.png",
            tag: "Cozy Collection",
            title: "Premium Warmth & Accessories",
            description: "Explore our winter collection of sweaters, booties, and heated beds to beat the chill.",
            buttonText: "Shop Collection",
            color: "text-secondary",
            primaryColor: "bg-secondary",
            link: "/shop",
        },
        {
            id: 3,
            image: "https://i.ibb.co/9mCWcJSC/Gemini-Generated-Image-rwtf10rwtf10rwtf.png",
            tag: "Expert Community",
            title: "Vet Advice & Health Tips",
            description: "Join our community to get daily tips on nutrition and health during the cold months.",
            buttonText: "Join Community",
            color: "text-primary",
            primaryColor: "bg-primary",
            link: "/register",
        },
    ];

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const activeSlide = slides[currentSlide];

    return (
        <div className="relative w-full min-h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-white font-sans">

            {/* --- 1. Ambient Background Layer (Subtle Light Mood) --- */}
            {/* Soft gradient background to add depth without being too dark */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
            ></div>

            {/* --- 2. Main Content Container (Floating Card Style) --- */}
            <div className="relative z-10 container mx-auto px-4 lg:px-12 w-full h-full flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left pt-10 lg:pt-0">

                    {/* Animated Tag (Light Mode Look: Bordered White Card) */}
                    <div key={`tag-${activeSlide.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold tracking-wide shadow-md animate-fadeIn">
                        <span className={`w-2 h-2 rounded-full ${activeSlide.primaryColor}`}></span>
                        {activeSlide.tag}
                    </div>

                    {/* Animated Title (Dark text for contrast) */}
                    <h1
                        key={`title-${activeSlide.id}`}
                        className={`text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-sm animate-slideUp ${activeSlide.color}`}
                    >
                        {activeSlide.title}
                    </h1>

                    {/* Animated Description (Standard body text color) */}
                    <p
                        key={`desc-${activeSlide.id}`}
                        className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slideUp delay-100 opacity-0"
                        style={{ animationFillMode: 'forwards' }}
                    >
                        {activeSlide.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link
                            to={activeSlide.link}
                            className={`btn border-none text-white px-8 h-12 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 ${activeSlide.primaryColor}`}
                        >
                            {activeSlide.buttonText}
                            <FaPaw />
                        </Link>
                        <button onClick={handleNext} className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 h-12 rounded-xl px-8 hidden sm:flex">
                            Next Slide
                        </button>
                    </div>
                </div>

                {/* Right Side: Floating Image Card */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end pb-10 lg:pb-0">

                    {/* Decorative Ring behind image (Soft, light color) */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full blur-[100px] -z-10 opacity-30 transition-colors duration-1000 ${activeSlide.primaryColor}`}></div>

                    {/* Main Image Container (White background, soft shadow) */}
                    <div
                        key={`img-${activeSlide.id}`}
                        className="relative w-full max-w-md aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 animate-scaleIn"
                    >
                        <img
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                        />

                        {/* Custom Navigation on top of image (Light, clear style) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/20 to-transparent flex justify-between items-end">
                            <div className="text-white drop-shadow-md">
                                <span className="text-3xl font-bold">0{currentSlide + 1}</span>
                                <span className="text-white/80 text-lg">/0{slides.length}</span>
                            </div>
                            <div className="flex gap-3">
                                {/* Navigation buttons are clean white circles */}
                                <button onClick={handlePrev} className="p-3 rounded-full bg-white/70 hover:bg-white text-gray-800 backdrop-blur-sm transition-all shadow-md"><FaArrowLeft /></button>
                                <button onClick={handleNext} className={`p-3 rounded-full text-white hover:opacity-80 transition-all shadow-md ${activeSlide.primaryColor}`}><FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 3. Bottom Progress Bar (Clean and minimal) --- */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div
                    key={currentSlide}
                    className={`h-full animate-progress ${activeSlide.primaryColor}`}
                ></div>
            </div>

            {/* --- Custom CSS for animations --- */}
            <style>{`
        /* Animations remain the same, just the colors and contrast change */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-progress { animation: progress 6s linear forwards; }
        .delay-100 { animation-delay: 0.1s; }
      `}</style>
        </div>
    );
};

export default Banner;