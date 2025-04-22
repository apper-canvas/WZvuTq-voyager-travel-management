import { CreditCard, Globe, Compass, Clock } from 'lucide-react';
import Button from '../ui/Button';

const FeaturedPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'European Explorer',
      description: 'Visit 5 iconic European cities over 14 days with guided tours, luxury accommodations, and local experiences.',
      price: '$3,499',
      duration: '14 days',
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Island Paradise',
      description: 'Relax on pristine beaches with all-inclusive resort stays, water activities, and sunset cruises in the Caribbean.',
      price: '$2,799',
      duration: '10 days',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Asian Adventure',
      description: 'Discover the rich cultures of Japan, Thailand, and Vietnam with immersive local experiences and guided tours.',
      price: '$3,299',
      duration: '12 days',
      image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Featured Travel Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All-inclusive packages designed to give you unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 sm:h-64 relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <Button className="w-full">View Package Details</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Best Price Guarantee</h3>
            <p className="text-gray-600">Find a lower price? We'll match it and give you an additional 10% off.</p>
          </div>
          
          <div className="p-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Worldwide Coverage</h3>
            <p className="text-gray-600">With packages covering over 100 countries across 6 continents.</p>
          </div>
          
          <div className="p-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Experienced Guides</h3>
            <p className="text-gray-600">Local experts who provide authentic cultural experiences.</p>
          </div>
          
          <div className="p-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is available around the clock to assist with any needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;