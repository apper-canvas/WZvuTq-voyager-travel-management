import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DestinationCard from './DestinationCard';

const DestinationCarousel = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);
  
  // Calculate items to show based on viewport
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Auto advance carousel
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => resetTimeout();
  }, [currentIndex]);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => 
      prevIndex === destinations.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? destinations.length - itemsToShow : prevIndex - 1
    );
  };
  
  // Calculate visible destinations
  const visibleDestinations = destinations.slice(
    currentIndex,
    Math.min(currentIndex + itemsToShow, destinations.length)
  );
  
  // If we're at the end and don't have enough destinations left, wrap around
  if (visibleDestinations.length < itemsToShow) {
    const remaining = itemsToShow - visibleDestinations.length;
    visibleDestinations.push(...destinations.slice(0, remaining));
  }

  return (
    <div className="relative w-full py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      
      <div className="relative overflow-hidden px-4">
        <AnimatePresence initial={false} custom={direction}>
          <div className="flex">
            {visibleDestinations.map((destination, index) => (
              <motion.div
                key={`${destination.id}-${index}`}
                custom={direction}
                initial={{ 
                  opacity: 0,
                  x: direction > 0 ? 200 : -200 
                }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 }
                }}
                exit={{ 
                  opacity: 0,
                  x: direction > 0 ? -200 : 200,
                  transition: { duration: 0.5 }
                }}
                className={`flex-shrink-0 w-full px-2 ${
                  itemsToShow === 1 ? 'w-full' : 
                  itemsToShow === 2 ? 'w-1/2' : 'w-1/3'
                }`}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
        aria-label="Previous destination"
      >
        <ChevronLeft className="text-gray-800" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
        aria-label="Next destination"
      >
        <ChevronRight className="text-gray-800" />
      </button>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(destinations.length / itemsToShow) }).map((_, index) => {
          const isActive = index === Math.floor(currentIndex / itemsToShow);
          return (
            <button
              key={index}
              onClick={() => {
                setDirection(index > Math.floor(currentIndex / itemsToShow) ? 1 : -1);
                setCurrentIndex(index * itemsToShow);
              }}
              className={`h-2 w-2 rounded-full ${
                isActive ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DestinationCarousel;