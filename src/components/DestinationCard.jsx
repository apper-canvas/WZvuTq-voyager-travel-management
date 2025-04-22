import { Star } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  const { name, country, description, image, price, rating } = destination;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name}, ${country}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
          ${price}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-gray-500">{country}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm flex-grow mb-4">{description}</p>
        
        <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 w-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;