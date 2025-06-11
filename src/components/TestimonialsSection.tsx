
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Excellent service! The car was in perfect condition and the staff was very professional. Highly recommend Shree Shyam Car Rental for anyone looking for reliable transportation.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Amazing experience! The pickup was on time, the car was clean and well-maintained. The pricing is very reasonable. Will definitely use their services again.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      rating: 5,
      text: "Best car rental service in the city! Professional staff, excellent vehicles, and hassle-free booking process. Shree Shyam Car Rental exceeded my expectations.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Great service and competitive prices. The car was delivered on time and was exactly as described. Customer support was helpful throughout the rental period.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      text: "Outstanding experience! The booking process was smooth, and the car was spotless. The driver was courteous and professional. Highly satisfied with the service.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Meera Joshi",
      location: "Chennai",
      rating: 5,
      text: "Reliable and trustworthy service. Used their car for a week-long trip and had no issues whatsoever. Fair pricing and excellent customer service throughout.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-amber-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-4 right-4 text-amber-500">
                <Quote size={24} />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
