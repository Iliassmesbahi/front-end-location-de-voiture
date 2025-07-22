import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardStats from '../components/DashboardStats';
import RecentBookings from '../components/RecentBookings';
import { fadeInUp } from '../utils/motion';
import { Calendar, Car, Users, DollarSign, TrendingUp, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Car, label: 'Total Cars', value: '156', change: '+12%', color: 'blue' },
    { icon: Users, label: 'Active Bookings', value: '89', change: '+8%', color: 'green' },
    { icon: DollarSign, label: 'Monthly Revenue', value: '$45,280', change: '+15%', color: 'purple' },
    { icon: Calendar, label: 'Today\'s Bookings', value: '24', change: '+5%', color: 'orange' }
  ];

  const recentBookings = [
    { id: 1, customer: 'John Doe', car: 'BMW X5', date: '2024-01-15', status: 'active', amount: '$267' },
    { id: 2, customer: 'Sarah Wilson', car: 'Mercedes C-Class', date: '2024-01-14', status: 'completed', amount: '$225' },
    { id: 3, customer: 'Mike Johnson', car: 'Audi A4', date: '2024-01-14', status: 'pending', amount: '$195' },
    { id: 4, customer: 'Emma Brown', car: 'Range Rover', date: '2024-01-13', status: 'active', amount: '$360' },
    { id: 5, customer: 'David Lee', car: 'Tesla Model S', date: '2024-01-13', status: 'completed', amount: '$285' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'fleet', label: 'Fleet', icon: Car },
    { id: 'customers', label: 'Customers', icon: Users }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          className="flex justify-between items-center mb-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your car rental business.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex space-x-1 mb-8 bg-white p-1 rounded-lg shadow-sm"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {activeTab === 'overview' && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <DashboardStats stats={stats} />
            <div className="mt-8">
              <RecentBookings bookings={recentBookings} />
            </div>
          </motion.div>
        )}

        {activeTab === 'bookings' && (
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Customer</th>
                    <th className="text-left py-3 px-4">Car</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{booking.customer}</td>
                      <td className="py-3 px-4">{booking.car}</td>
                      <td className="py-3 px-4">{booking.date}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'active' ? 'bg-green-100 text-green-800' :
                          booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold">{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'fleet' && (
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Fleet Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((item) => (
                <div key={item} className="border rounded-lg p-4">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="font-semibold">Car Model {item}</h3>
                  <p className="text-gray-600 text-sm">Available</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-blue-600 font-semibold">$89/day</span>
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'customers' && (
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Customer Management</h2>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      {booking.customer.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{booking.customer}</h3>
                      <p className="text-gray-600 text-sm">Last booking: {booking.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{booking.amount}</p>
                    <p className="text-gray-600 text-sm">{booking.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;