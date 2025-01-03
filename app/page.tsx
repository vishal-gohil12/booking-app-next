import RestaurantHero from '@/components/RestaurantHero';
import BookingSection from '@/components/BookingSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <RestaurantHero />
      <BookingSection />
    </main>
  );
}