
import { MapPin, Clock, Shield, Headphones, Wrench, CreditCard } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Free Pickup & Drop",
      description: "We provide free pickup and drop service within city limits for your convenience."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round the clock service availability. Book anytime, anywhere with our 24/7 support."
    },
    {
      icon: Shield,
      title: "Full Insurance Coverage",
      description: "All our vehicles come with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated customer support team to assist you throughout your rental journey."
    },
    {
      icon: Wrench,
      title: "Well Maintained Cars",
      description: "Regular maintenance and quality checks ensure you get the best driving experience."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options including cash, card, and digital wallets for your convenience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-amber-600">Shree Shyam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional car rental services with a focus on quality, reliability, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-8 opacity-90">Book your perfect ride today and experience the difference</p>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
