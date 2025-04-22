import DestinationCarousel from '../components/DestinationCarousel';
import destinations from '../data/destinations';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Discover Your Dream Destination</h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Explore the world's most exciting locations and create unforgettable memories with our curated travel experiences.
        </p>
      </section>
      
      <section className="mb-16">
        <DestinationCarousel destinations={destinations} />
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Expertly Curated</h3>
            <p className="text-gray-600">Our travel experts personally visit and vet each destination to ensure exceptional experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
            <p className="text-gray-600">Find the same trip for less, and we'll match it — plus give you an additional 10% off.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Travel with peace of mind knowing our dedicated team is available around the clock.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;