import React, { use } from 'react';
// import SwiperComponent from '../components/SwiperComponent'; // Not used in JSX, keeping it for now in case it's needed later.
import PetCard from '../components/PetCard';
import WinterCareTips from '../components/WinterCareTips';
import MeetOurVets from '../components/MeetOurVets';
import FeaturedPetAdoption from '../components/FeaturedPetAdoption';
import { useRouteLoaderData } from 'react-router';
import Loading from './Loading';
import { useTransition, animated } from '@react-spring/web'; 
import WinterWellnessHub from '../components/WinterWellnessHub';
import { AuthContext } from '../provider/AuthContext';
import Banner from '../components/Banner';

const Home = () => {
    // Assuming data is an array of services/products based on useTransition usage
    const data = useRouteLoaderData('root'); 

    const displayData = data.slice(0, 4)
    
    // Using React's 'use' hook for context, assuming AuthContext is a promise/lazy value
    const { loading } = use(AuthContext); 
    
    // --- Animation Setup ---
    const transitions = useTransition(displayData || [], { 
        keys: (service) => service.id,
        from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' }, 
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' }, 
        leave: { opacity: 0, transform: 'translate3d(0, 40px, 0)' }, 
        trail: 150, 
    });

    if (loading) {
        return <Loading />;
    }

    return (
        <div className=''>
            {/* Increased space-y- to space-y-16 for better visual separation between sections */}
            <div className='w-11/12 mx-auto space-y-16 py-8'> 
                
                
                <Banner />
                
                
                
                <section>
                   
                    <h2 className='text-4xl font-extrabold text-center text-gray-800 mb-12'>
                        🌟 Our Top-Rated Services & Products
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                        {transitions((style, service) => (
                            <animated.div 
                                key={service.id} 
                                style={style}
                                className='p-2' // Added slight padding to animated box
                            >
                                <PetCard service={service} />
                            </animated.div>
                        ))}
                    </div>
                </section>

                
                <section>
                    <WinterCareTips />
                </section>
                
                
                <section>
                    <MeetOurVets />
                </section>
                
               
                <section>
                    <FeaturedPetAdoption />
                </section>
                
                
                <section>
                    <WinterWellnessHub />
                </section>

            </div>
        </div>
    );
}

export default Home;