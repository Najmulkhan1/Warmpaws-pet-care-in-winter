import React, { use } from 'react';
import SwiperComponent from '../components/SwiperComponent';
import WinterCare from '../components/WinterCare';
import PetCard from '../components/PetCard';
import WinterCareTips from '../components/WinterCareTips';
import MeetOurVets from '../components/MeetOurVets';
import FeaturedPetAdoption from '../components/FeaturedPetAdoption';
import { useRouteLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import { useTransition, animated } from '@react-spring/web'; 
import WinterWellnessHub from '../components/WinterWellnessHub';


const Home = () => {
    const data = useRouteLoaderData('root');
    const { loading } = use(AuthContext);
    

    // useTransition hook ব্যবহার করে PetCard-গুলোর জন্য ট্রানজিশন কনফিগার করুন
    const transitions = useTransition(data || [], { // data যদি null বা undefined হয়, তবে খালি অ্যারে ব্যবহার করুন
        keys: (service) => service.id, // প্রতিটি আইটেমের জন্য একটি unique key
        from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' }, // শুরু করার স্টাইল (নিচ থেকে উপরে)
        enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },   // এন্ট্রি স্টাইল
        leave: { opacity: 0, transform: 'translate3d(0, 40px, 0)' },  // যদি তালিকা থেকে কিছু remove হয় 
        trail: 150, // প্রতিটি আইটেমের মধ্যে 150ms ট্রেইল (ক্রমিক বিলম্ব)
    });

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className='bg-gray-100 '>
            <div className='w-11/12 mx-auto'>
                <SwiperComponent></SwiperComponent>
                
                <WinterCare></WinterCare>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10'>
                    {/* transitions ফাংশন ব্যবহার করে অ্যানিমেটেড আইটেমগুলো রেন্ডার করুন */}
                    {transitions((style, service) => (
                        <animated.div key={service.id} style={style}>
                            <PetCard service={service}></PetCard>
                        </animated.div>
                    ))}
                </div>

                <WinterCareTips></WinterCareTips>
                <MeetOurVets></MeetOurVets>
                <FeaturedPetAdoption></FeaturedPetAdoption>
                
              
                <WinterWellnessHub></WinterWellnessHub>

            </div>
        </div>
    );
}

export default Home;