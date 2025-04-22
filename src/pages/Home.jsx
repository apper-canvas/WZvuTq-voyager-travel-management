import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Briefcase, Search, Plus, Filter, ChevronDown } from "lucide-react";
import MainFeature from "../components/MainFeature";

const Home = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Sample data for bookings
  const bookings = [
    {
      id: "BK-1001",
      clientName: "Emma Thompson",
      destination: "Bali, Indonesia",
      startDate: "2023-11-15",
      endDate: "2023-11-22",
      status: "confirmed",
      travelers: 2,
      totalAmount: 2450,
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "BK-1002",
      clientName: "Michael Chen",
      destination: "Paris, France",
      startDate: "2023-12-05",
      endDate: "2023-12-12",
      status: "pending",
      travelers: 4,
      totalAmount: 5200,
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "BK-1003",
      clientName: "Sarah Johnson",
      destination: "Tokyo, Japan",
      startDate: "2024-01-10",
      endDate: "2024-01-20",
      status: "confirmed",
      travelers: 1,
      totalAmount: 3100,
      img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "BK-1004",
      clientName: "David Rodriguez",
      destination: "Cape Town, South Africa",
      startDate: "2023-11-25",
      endDate: "2023-12-05",
      status: "pending",
      travelers: 2,
      totalAmount: 4300,
      img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  // Filter bookings based on active tab
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         booking.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "upcoming") {
      return new Date(booking.startDate) > new Date() && matchesSearch;
    } else if (activeTab === "confirmed") {
      return booking.status === "confirmed" && matchesSearch;
    } else if (activeTab === "pending") {
      return booking.status === "pending" && matchesSearch;
    }
    return matchesSearch;
  });

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Calculate duration of trip
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-surface-800 dark:text-white mb-2">
            Travel Management Dashboard
          </h1>
          <p className="text-surface-600 dark:text-surface-400">
            Manage your bookings, clients, and travel packages
          </p>
        </motion.div>
        
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="btn btn-primary flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Booking
          </button>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div 
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-surface-500 dark:text-surface-400 text-sm font-medium mb-1">Active Bookings</p>
              <h3 className="text-3xl font-bold text-surface-800 dark:text-white">24</h3>
              <p className="text-secondary text-sm font-medium mt-1">+12% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-primary-light/10 text-primary">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-surface-500 dark:text-surface-400 text-sm font-medium mb-1">Total Clients</p>
              <h3 className="text-3xl font-bold text-surface-800 dark:text-white">156</h3>
              <p className="text-secondary text-sm font-medium mt-1">+5% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-secondary/10 text-secondary">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-surface-500 dark:text-surface-400 text-sm font-medium mb-1">Travel Packages</p>
              <h3 className="text-3xl font-bold text-surface-800 dark:text-white">42</h3>
              <p className="text-secondary text-sm font-medium mt-1">+8% from last month</p>
            </div>
            <div className="p-3 rounded-full bg-accent/10 text-accent">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Main Feature Component */}
      <MainFeature />
      
      {/* Bookings Section */}
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold text-surface-800 dark:text-white mb-4 md:mb-0">
            Bookings
          </h2>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search bookings..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <button 
                className="btn btn-outline flex items-center"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-surface-800 rounded-lg shadow-lg border border-surface-200 dark:border-surface-700 z-10">
                  <div className="p-3">
                    <p className="text-sm font-medium text-surface-800 dark:text-white mb-2">Filter by Status</p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                        <span className="ml-2 text-sm text-surface-600 dark:text-surface-400">Confirmed</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                        <span className="ml-2 text-sm text-surface-600 dark:text-surface-400">Pending</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                        <span className="ml-2 text-sm text-surface-600 dark:text-surface-400">Cancelled</span>
                      </label>
                    </div>
                    
                    <p className="text-sm font-medium text-surface-800 dark:text-white mt-4 mb-2">Date Range</p>
                    <div className="space-y-2">
                      <input type="date" className="input text-sm" />
                      <input type="date" className="input text-sm" />
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <button className="btn btn-primary text-sm">Apply Filters</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-surface-200 dark:border-surface-700 mb-6">
          <button
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "upcoming"
                ? "border-primary text-primary dark:text-primary-light"
                : "border-transparent text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "confirmed"
                ? "border-primary text-primary dark:text-primary-light"
                : "border-transparent text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200"
            }`}
            onClick={() => setActiveTab("confirmed")}
          >
            Confirmed
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "pending"
                ? "border-primary text-primary dark:text-primary-light"
                : "border-transparent text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
        </div>
        
        {/* Bookings List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <motion.div
                key={booking.id}
                className="card overflow-hidden group hover:shadow-soft transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={booking.img} 
                    alt={booking.destination} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-white font-bold text-lg">{booking.destination}</h3>
                    <p className="text-white/80 text-sm">
                      {formatDate(booking.startDate)} - {formatDate(booking.endDate)}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      booking.status === "confirmed" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-surface-800 dark:text-white">{booking.clientName}</h4>
                      <p className="text-sm text-surface-500 dark:text-surface-400">Booking ID: {booking.id}</p>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-surface-500 dark:text-surface-400 mr-1" />
                      <span className="text-sm text-surface-600 dark:text-surface-400">{booking.travelers}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-surface-600 dark:text-surface-400">
                      {calculateDuration(booking.startDate, booking.endDate)} days
                    </span>
                    <span className="font-medium text-surface-800 dark:text-white">
                      ${booking.totalAmount.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="btn btn-primary text-sm flex-1">View Details</button>
                    <button className="btn btn-outline text-sm">Edit</button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-surface-100 dark:bg-surface-800 p-4 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-surface-400" />
              </div>
              <h3 className="text-lg font-medium text-surface-800 dark:text-white mb-1">No bookings found</h3>
              <p className="text-surface-500 dark:text-surface-400 max-w-md">
                There are no bookings matching your current filters. Try adjusting your search or create a new booking.
              </p>
              <button className="btn btn-primary mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Create New Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;