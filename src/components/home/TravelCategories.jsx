import { motion } from 'framer-motion';

const TravelCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Adventure',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Adrenaline-pumping activities in stunning natural settings'
    },
    {
      id: 2,
      name: 'Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Relaxing getaways on pristine shores around the world'
    },
    {
      id: 3,
      name: 'Cultural',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Immersive experiences in diverse global traditions'
    },
    {
      id: 4,
      name: 'Urban',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore vibrant metropolises and their unique attractions'
    },
    {
      id: 5,
      name: 'Nature',
      image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Connect with the natural world in breathtaking landscapes'
    },
    {
      id: 6,
      name: 'Culinary',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Savor authentic flavors and cooking traditions worldwide'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Explore by Category</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find your perfect travel experience based on your interests
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg h-64"
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TravelCategories;