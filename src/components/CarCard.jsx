import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Fuel, Star } from 'lucide-react';

const CarCard = ({ car, onBook }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">4.8</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span className="text-sm">{car.seats} seats</span>
          </div>
          <div className="flex items-center space-x-1">
            <Settings className="w-4 h-4" />
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="w-4 h-4" />
            <span className="text-sm">{car.fuel}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">${car.price}</span>
            <span className="text-gray-600">/day</span>
          </div>
          <button 
            onClick={onBook}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;