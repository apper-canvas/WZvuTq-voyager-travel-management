import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Bookings", path: "/bookings" },
    { name: "Clients", path: "/clients" },
    { name: "Packages", path: "/packages" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <motion.div 
                  className="text-2xl font-bold text-primary"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-primary">Voyager</span>
                </motion.div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.path}
                    className="text-surface-600 dark:text-surface-300 hover:text-primary dark:hover:text-primary-light font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={darkMode ? "dark" : "light"}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {darkMode ? (
                        <Sun className="w-5 h-5 text-yellow-400" />
                      ) : (
                        <Moon className="w-5 h-5 text-surface-600" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
                
                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-surface-200 dark:border-surface-700"
              >
                <div className="container mx-auto px-4 py-3">
                  <nav className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.path}
                        className="py-2 px-3 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-600 dark:text-surface-300 hover:text-primary dark:hover:text-primary-light font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-surface-600 dark:text-surface-400 text-sm">
                  © {new Date().getFullYear()} Voyager Travel Management. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-surface-500 hover:text-primary dark:text-surface-400 dark:hover:text-primary-light text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-surface-500 hover:text-primary dark:text-surface-400 dark:hover:text-primary-light text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-surface-500 hover:text-primary dark:text-surface-400 dark:hover:text-primary-light text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;