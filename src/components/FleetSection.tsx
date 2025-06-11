
import { Fuel, Users, Briefcase, Star } from 'lucide-react';

const FleetSection = () => {
  const cars = [
    {
      id: 1,
      name: "Maruti Swift",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      price: "₹2,000",
      features: ["Manual", "5 Seats", "AC", "Music System"],
      rating: 4.8,
      fuel: "Petrol",
      seats: 5,
      bags: 2
    },
    {
      id: 2,
      name: "Hyundai i20",
      category: "Compact",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      price: "₹2,500",
      features: ["Manual", "5 Seats", "AC", "Bluetooth"],
      rating: 4.9,
      fuel: "Petrol",
      seats: 5,
      bags: 3
    },
    {
      id: 3,
      name: "Honda City",
      category: "Sedan",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop",
      price: "₹3,500",
      features: ["Automatic", "5 Seats", "AC", "Premium Sound"],
      rating: 4.9,
      fuel: "Petrol",
      seats: 5,
      bags: 4
    },
    {
      id: 4,
      name: "Toyota Innova",
      category: "SUV",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      price: "₹4,500",
      features: ["Manual", "7 Seats", "AC", "Spacious"],
      rating: 4.8,
      fuel: "Diesel",
      seats: 7,
      bags: 5
    },
    {
      id: 5,
      name: "Mercedes E-Class",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
      price: "₹8,000",
      features: ["Automatic", "5 Seats", "Leather", "Premium"],
      rating: 5.0,
      fuel: "Petrol",
      seats: 5,
      bags: 3
    },
    {
      id: 6,
      name: "BMW X5",
      category: "Premium SUV",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      price: "₹12,000",
      features: ["Automatic", "7 Seats", "Sunroof", "Luxury"],
      rating: 5.0,
      fuel: "Petrol",
      seats: 7,
      bags: 6
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium <span className="text-amber-600">Fleet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained vehicles, from budget-friendly options to luxury rides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="text-amber-500 fill-current" size={16} />
                  <span className="ml-1 text-sm font-semibold">{car.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Fuel size={16} className="mr-1" />
                      <span className="text-sm">{car.fuel}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span className="text-sm">{car.seats}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1" />
                      <span className="text-sm">{car.bags}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">{car.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
