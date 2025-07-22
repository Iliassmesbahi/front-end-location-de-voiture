import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import BookingForm from '../components/BookingForm';
import { fadeInUp } from '../utils/motion';
import { Search, Filter } from 'lucide-react';

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const cars = [
    { id: 1, name: 'BMW X5', type: 'suv', price: 89, seats: 5, transmission: 'Automatic', fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop' },
    { id: 2, name: 'Mercedes C-Class', type: 'sedan', price: 75, seats: 5, transmission: 'Automatic', fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop' },
    { id: 3, name: 'Audi A4', type: 'sedan', price: 65, seats: 5, transmission: 'Automatic', fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop' },
    { id: 4, name: 'Range Rover Sport', type: 'suv', price: 120, seats: 7, transmission: 'Automatic', fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&h=300&fit=crop' },
    { id: 5, name: 'Porsche 911', type: 'sports', price: 150, seats: 2, transmission: 'Manual', fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop' },
    { id: 6, name: 'Tesla Model S', type: 'sedan', price: 95, seats: 5, transmission: 'Automatic', fuel: 'Electric', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop' }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || car.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold text-center mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Our Fleet
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cars..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                className="pl-10 pr-8 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="sports">Sports</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              <CarCard 
                car={car} 
                onBook={() => setSelectedCar(car)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCar && (
        <BookingForm 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default Cars;