import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your subscription service
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Get Inspired for Your Next Journey
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Subscribe to our newsletter and receive exclusive travel deals, insider tips, and inspiration for your next adventure.
          </p>
        </div>

        {subscribed ? (
          <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You for Subscribing!</h3>
            <p className="text-blue-100">
              You're now on the list to receive our best travel deals and inspiration. Keep an eye on your inbox!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-6"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-3 text-center sm:text-left">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">2M+</div>
            <p className="text-blue-200">Happy Travelers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <p className="text-blue-200">Countries Covered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <p className="text-blue-200">Travel Packages</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <p className="text-blue-200">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;