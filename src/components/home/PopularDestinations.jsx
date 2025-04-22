import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DestinationCard from './DestinationCard';

const PopularDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const carouselRef = useRef(null);
  
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the perfect blend of serene beaches, vibrant culture, and lush landscapes.',
      price: '$899',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Discover white-washed buildings, blue domes, and breathtaking sunsets over the Aegean Sea.',
      price: '$1,299',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Immerse yourself in traditional Japanese culture with historic temples and beautiful gardens.',
      price: '$1,199',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the ancient Incan citadel set against a backdrop of stunning mountain scenery.',
      price: '$1,499',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Marrakech, Morocco',
      image: 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Wander through vibrant markets and experience the rich blend of African and Arabic influences.',
      price: '$999',
      rating: 4.6
    }
  ];

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our travelers' favorite destinations across the globe
          </p>
        </div>

        <div className="relative h-[500px] overflow-hidden" ref={carouselRef}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {[
                  destinations[currentIndex],
                  destinations[(currentIndex + 1) % destinations.length],
                  destinations[(currentIndex + 2) % destinations.length]
                ].map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Previous destination"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Next destination"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;