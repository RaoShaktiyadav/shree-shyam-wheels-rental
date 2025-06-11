
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Satisfaction Rate"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-amber-600">Shree Shyam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in premium car rental services since 2019
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2019, Shree Shyam Car Rental has been serving customers with dedication and excellence. 
              What started as a small family business has grown into one of the most trusted car rental services 
              in the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that every journey should be comfortable, safe, and memorable. Our commitment to 
              quality service and customer satisfaction has earned us the trust of thousands of happy customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-amber-50 px-4 py-2 rounded-lg">
                <span className="text-amber-600 font-semibold">Quality Service</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-lg">
                <span className="text-amber-600 font-semibold">Trusted Brand</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-lg">
                <span className="text-amber-600 font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop" 
              alt="Our fleet" 
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                <achievement.icon size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h4>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional car rental services that exceed customer expectations while maintaining 
              the highest standards of safety, reliability, and customer care.
            </p>
          </div>
          <div className="bg-amber-50 p-8 rounded-xl">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              To become the leading car rental service provider, known for innovation, quality, and 
              exceptional customer experiences across all our locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
