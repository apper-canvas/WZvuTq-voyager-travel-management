import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, DollarSign, Users, Plus, X, Check, AlertCircle } from "lucide-react";

const MainFeature = () => {
  // Form state
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 2,
    budget: 2000,
    accommodation: "hotel",
    activities: [],
    notes: ""
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  // Available activities for the selected destination
  const [availableActivities, setAvailableActivities] = useState([
    { id: 1, name: "City Tour", price: 50, duration: "4 hours" },
    { id: 2, name: "Beach Day", price: 30, duration: "Full day" },
    { id: 3, name: "Mountain Hiking", price: 80, duration: "6 hours" },
    { id: 4, name: "Cultural Experience", price: 65, duration: "3 hours" },
    { id: 5, name: "Food Tasting", price: 45, duration: "2 hours" }
  ]);
  
  // Popular destinations
  const destinations = [
    { id: 1, name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      // Handle activities checkboxes
      if (name === "activity") {
        const activityId = parseInt(value);
        const activity = availableActivities.find(a => a.id === activityId);
        
        if (checked) {
          setFormData({
            ...formData,
            activities: [...formData.activities, activity]
          });
        } else {
          setFormData({
            ...formData,
            activities: formData.activities.filter(a => a.id !== activityId)
          });
        }
      } else {
        setFormData({
          ...formData,
          [name]: checked
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Select a destination from the popular destinations
  const selectDestination = (destination) => {
    setFormData({
      ...formData,
      destination: destination.name
    });
    
    // Clear error for destination if it exists
    if (errors.destination) {
      setErrors({
        ...errors,
        destination: null
      });
    }
  };
  
  // Calculate total price based on selected options
  const calculateTotalPrice = () => {
    const basePrice = formData.budget;
    const activitiesPrice = formData.activities.reduce((total, activity) => total + activity.price, 0);
    const travelersMultiplier = formData.travelers;
    
    return (basePrice + activitiesPrice) * travelersMultiplier;
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.clientName.trim()) {
      newErrors.clientName = "Client name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required";
    }
    
    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    }
    
    if (!formData.endDate) {
      newErrors.endDate = "End date is required";
    } else if (formData.startDate && new Date(formData.endDate) <= new Date(formData.startDate)) {
      newErrors.endDate = "End date must be after start date";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate API call
      setFormSubmitted(true);
      
      // Simulate success after 1.5 seconds
      setTimeout(() => {
        setFormSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            clientName: "",
            email: "",
            phone: "",
            destination: "",
            startDate: "",
            endDate: "",
            travelers: 2,
            budget: 2000,
            accommodation: "hotel",
            activities: [],
            notes: ""
          });
          setFormSubmitted(false);
          setFormSuccess(false);
        }, 3000);
      }, 1500);
    }
  };
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="card overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
        <h2 className="text-white text-2xl font-bold">Create New Travel Booking</h2>
        <p className="text-white/80 mt-1">
          Fill out the form below to create a new travel booking for your client
        </p>
      </div>
      
      <div className="p-6">
        <AnimatePresence mode="wait">
          {formSubmitted && formSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-surface-800 dark:text-white mb-2">
                Booking Created Successfully!
              </h3>
              <p className="text-surface-600 dark:text-surface-400 max-w-md mb-6">
                The booking for {formData.clientName} to {formData.destination} has been created successfully. 
                A confirmation email has been sent to {formData.email}.
              </p>
              <div className="flex space-x-3">
                <button className="btn btn-primary">
                  View Booking Details
                </button>
                <button className="btn btn-outline">
                  Create Another Booking
                </button>
              </div>
            </motion.div>
          ) : formSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <div className="w-16 h-16 relative mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
              </div>
              <h3 className="text-xl font-bold text-surface-800 dark:text-white mb-2">
                Creating Booking...
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Please wait while we process your booking request.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Client Information */}
                <div>
                  <h3 className="text-lg font-semibold text-surface-800 dark:text-white mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Client Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="clientName" className="label">Client Name</label>
                      <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        className={`input ${errors.clientName ? 'border-red-500 dark:border-red-500' : ''}`}
                        placeholder="Enter client name"
                      />
                      {errors.clientName && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.clientName}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                        placeholder="Enter email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input ${errors.phone ? 'border-red-500 dark:border-red-500' : ''}`}
                        placeholder="Enter phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Trip Details */}
                <div>
                  <h3 className="text-lg font-semibold text-surface-800 dark:text-white mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Trip Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="destination" className="label">Destination</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className={`input ${errors.destination ? 'border-red-500 dark:border-red-500' : ''}`}
                        placeholder="Enter destination"
                      />
                      {errors.destination && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.destination}
                        </p>
                      )}
                      
                      <div className="mt-2">
                        <p className="text-sm text-surface-600 dark:text-surface-400 mb-2">Popular destinations:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {destinations.map((destination) => (
                            <motion.div
                              key={destination.id}
                              className={`relative rounded-lg overflow-hidden cursor-pointer group h-16 ${
                                formData.destination === destination.name ? 'ring-2 ring-primary' : ''
                              }`}
                              onClick={() => selectDestination(destination)}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                              <div className="absolute inset-0 flex items-center justify-center p-2">
                                <p className="text-white text-xs font-medium text-center">
                                  {destination.name}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="startDate" className="label">Start Date</label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          className={`input ${errors.startDate ? 'border-red-500 dark:border-red-500' : ''}`}
                        />
                        {errors.startDate && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors.startDate}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="endDate" className="label">End Date</label>
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                          className={`input ${errors.endDate ? 'border-red-500 dark:border-red-500' : ''}`}
                        />
                        {errors.endDate && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors.endDate}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="travelers" className="label">Number of Travelers</label>
                        <input
                          type="number"
                          id="travelers"
                          name="travelers"
                          min="1"
                          max="20"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="label">Budget per Person</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400 w-4 h-4" />
                          <input
                            type="number"
                            id="budget"
                            name="budget"
                            min="500"
                            step="100"
                            value={formData.budget}
                            onChange={handleChange}
                            className="input pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Accommodation */}
                <div>
                  <h3 className="text-lg font-semibold text-surface-800 dark:text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Accommodation
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="label">Accommodation Type</label>
                      <div className="grid grid-cols-3 gap-3">
                        <label className={`
                          relative flex flex-col items-center p-3 rounded-lg border cursor-pointer transition-all
                          ${formData.accommodation === 'hotel' 
                            ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                            : 'border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800'}
                        `}>
                          <input
                            type="radio"
                            name="accommodation"
                            value="hotel"
                            checked={formData.accommodation === 'hotel'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-surface-800 dark:text-white">Hotel</span>
                          {formData.accommodation === 'hotel' && (
                            <motion.div 
                              className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </label>
                        
                        <label className={`
                          relative flex flex-col items-center p-3 rounded-lg border cursor-pointer transition-all
                          ${formData.accommodation === 'resort' 
                            ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                            : 'border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800'}
                        `}>
                          <input
                            type="radio"
                            name="accommodation"
                            value="resort"
                            checked={formData.accommodation === 'resort'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-surface-800 dark:text-white">Resort</span>
                          {formData.accommodation === 'resort' && (
                            <motion.div 
                              className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </label>
                        
                        <label className={`
                          relative flex flex-col items-center p-3 rounded-lg border cursor-pointer transition-all
                          ${formData.accommodation === 'villa' 
                            ? 'border-primary bg-primary/5 dark:bg-primary/10' 
                            : 'border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800'}
                        `}>
                          <input
                            type="radio"
                            name="accommodation"
                            value="villa"
                            checked={formData.accommodation === 'villa'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-surface-800 dark:text-white">Villa</span>
                          {formData.accommodation === 'villa' && (
                            <motion.div 
                              className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                              <Check className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="label">Additional Notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="input min-h-[100px]"
                        placeholder="Any special requirements or notes for this booking..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* Activities */}
                <div>
                  <h3 className="text-lg font-semibold text-surface-800 dark:text-white mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Activities
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="label">Select Activities</label>
                      <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2 scrollbar-hide">
                        {availableActivities.map((activity) => (
                          <label 
                            key={activity.id}
                            className={`
                              flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer
                              ${formData.activities.some(a => a.id === activity.id)
                                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                                : 'border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800'}
                            `}
                          >
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                name="activity"
                                value={activity.id}
                                checked={formData.activities.some(a => a.id === activity.id)}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className={`
                                w-5 h-5 rounded border flex items-center justify-center mr-3 transition-colors
                                ${formData.activities.some(a => a.id === activity.id)
                                  ? 'bg-primary border-primary'
                                  : 'border-surface-300 dark:border-surface-600'}
                              `}>
                                {formData.activities.some(a => a.id === activity.id) && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-surface-800 dark:text-white">{activity.name}</p>
                                <p className="text-xs text-surface-500 dark:text-surface-400">{activity.duration}</p>
                              </div>
                            </div>
                            <span className="text-sm font-medium text-surface-800 dark:text-white">
                              ${activity.price}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price Summary */}
                    <div className="bg-surface-50 dark:bg-surface-800/50 rounded-lg p-4 border border-surface-200 dark:border-surface-700">
                      <h4 className="font-medium text-surface-800 dark:text-white mb-3">Price Summary</h4>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-surface-600 dark:text-surface-400">Base Price (per person)</span>
                          <span className="text-surface-800 dark:text-white">{formatCurrency(formData.budget)}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-surface-600 dark:text-surface-400">Activities</span>
                          <span className="text-surface-800 dark:text-white">
                            {formatCurrency(formData.activities.reduce((total, activity) => total + activity.price, 0))}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-surface-600 dark:text-surface-400">Number of Travelers</span>
                          <span className="text-surface-800 dark:text-white">x {formData.travelers}</span>
                        </div>
                        
                        <div className="pt-2 mt-2 border-t border-surface-200 dark:border-surface-700 flex justify-between font-medium">
                          <span className="text-surface-800 dark:text-white">Total Estimated Price</span>
                          <span className="text-primary">{formatCurrency(calculateTotalPrice())}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-8 flex justify-end">
                <motion.button
                  type="submit"
                  className="btn btn-primary px-6 py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Booking
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainFeature;