import { Star } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 sm:h-64">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-20"></div>
        <div className="absolute bottom-3 left-3 flex items-center">
          <span className="inline-flex items-center bg-yellow-400 px-2 py-1 rounded text-sm font-semibold text-gray-900">
            <Star className="h-4 w-4 mr-1 fill-current" />
            {destination.rating}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            Starting at {destination.price}
          </span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => console.log(`Exploring ${destination.name}`)}
          >
            Explore
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;