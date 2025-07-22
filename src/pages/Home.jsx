import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Car, Shield, Clock, Star } from 'lucide-react';
import { fadeInUp } from '../utils/motion';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Car, title: 'Large Fleet', desc: 'Over 500 vehicles available' },
    { icon: Shield, title: 'Fully Insured', desc: 'Complete coverage included' },
    { icon: Clock, title: '24/7 Support', desc: 'Round the clock assistance' },
    { icon: Star, title: 'Top Rated', desc: '4.9/5 customer satisfaction' }
  ];

  const cars = [
    { id: 1, name: 'BMW X5', price: 89, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop' },
    { id: 2, name: 'Mercedes C-Class', price: 75, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop' },
    { id: 3, name: 'Audi A4', price: 65, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop' }
  ];

  return (
    <div className="pt-16">
      <motion.section 
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Premium Car Rental Service
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Experience luxury and comfort with our premium fleet of vehicles. Book now for the best rates.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/cars')}
          >
            Browse Cars
          </motion.button>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Featured Vehicles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <motion.div 
                key={car.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">${car.price}/day</p>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;