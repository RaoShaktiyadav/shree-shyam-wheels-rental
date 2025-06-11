
import { Star, Shield, Clock, Users } from 'lucide-react';

interface HeroSectionProps {
  onBookNow: () => void;
}

const HeroSection = ({ onBookNow }: HeroSectionProps) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="text-amber-400 mr-2" size={16} />
            <span className="text-amber-200">Trusted by 10,000+ Happy Customers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Car Rental 
            <span className="text-amber-400"> Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover the freedom of the road with our premium fleet of vehicles. 
            From economy cars to luxury sedans, we have the perfect ride for every journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={onBookNow}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Ride Now
            </button>
            <button 
              onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              View Our Fleet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="text-amber-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-gray-400">Insured</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="text-amber-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="text-amber-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="text-amber-400" size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">4.9</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
