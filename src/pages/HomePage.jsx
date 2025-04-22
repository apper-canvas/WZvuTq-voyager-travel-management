import { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularDestinations from '../components/home/PopularDestinations';
import FeaturedPackages from '../components/home/FeaturedPackages';
import TravelCategories from '../components/home/TravelCategories';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: 1
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with params:', searchParams);
    // Here you would typically navigate to search results page
    // or filter destinations based on search criteria
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection 
        searchParams={searchParams}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <PopularDestinations />
      <FeaturedPackages />
      <TravelCategories />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;