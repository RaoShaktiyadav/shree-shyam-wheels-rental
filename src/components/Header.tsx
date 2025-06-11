
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onBookNow: () => void;
}

const Header = ({ onBookNow }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-amber-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>info@shreeshyamrental.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>24/7 Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Shree Shyam</h1>
                <p className="text-sm text-gray-600">Car Rental</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#fleet" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Our Fleet</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact</a>
              <button 
                onClick={onBookNow}
                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium">Home</a>
                <a href="#fleet" className="text-gray-700 hover:text-amber-600 font-medium">Our Fleet</a>
                <a href="#services" className="text-gray-700 hover:text-amber-600 font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium">Contact</a>
                <button 
                  onClick={onBookNow}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors w-fit"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
