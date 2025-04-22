import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Emily Johnson',
      location: 'New York, USA',
      quote: 'Our European tour was meticulously planned, with incredible guides and seamless logistics. Every detail was perfect!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      trip: 'European Explorer'
    },
    {
      id: 2,
      name: 'David Chen',
      location: 'Vancouver, Canada',
      quote: 'The Thailand adventure package exceeded all expectations. The local experiences arranged by Voyager were authentic and unforgettable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      trip: 'Asian Adventure'
    },
    {
      id: 3,
      name: 'Sarah Patel',
      location: 'London, UK',
      quote: 'From the beautiful beaches to the luxury resort, our Caribbean getaway was absolute perfection. We\'ll definitely book through Voyager again!',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 4,
      trip: 'Island Paradise'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="h-8 w-8 text-gray-200 absolute -top-2 -left-2 opacity-50" />
                <p className="text-gray-600 relative z-10">{testimonial.quote}</p>
              </div>
              
              <p className="text-sm text-gray-500 font-medium mt-4">
                Trip: {testimonial.trip}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;