
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FleetSection from '@/components/FleetSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<{
    name: string;
    price: string;
    category: string;
  } | undefined>();

  const handleBookNow = (car?: { name: string; price: string; category: string }) => {
    setSelectedCar(car);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onBookNow={() => handleBookNow()} />
      <HeroSection onBookNow={() => handleBookNow()} />
      <FleetSection onBookNow={handleBookNow} />
      <ServicesSection onBookNow={() => handleBookNow()} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedCar={selectedCar}
      />
    </div>
  );
};

export default Index;
