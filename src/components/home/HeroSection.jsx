import Button from '../ui/Button';
import { Search } from 'lucide-react';

const HeroSection = ({ searchParams, handleInputChange, handleSearch }) => {
  return (
    <div className="relative h-[600px] bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-white text-center max-w-3xl mb-8">
          Find and book your perfect getaway with Voyager - your trusted travel companion
        </p>
        
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-4 md:p-6">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Where to?"
                value={searchParams.destination}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={searchParams.checkIn}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={searchParams.checkOut}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
              <select
                id="travelers"
                name="travelers"
                value={searchParams.travelers}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-4 flex justify-center">
              <Button type="submit" className="w-full md:w-auto flex items-center justify-center gap-2">
                <Search size={18} />
                Search Destinations
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;