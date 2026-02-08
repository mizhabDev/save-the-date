import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import EventDetails from "@/components/EventDetails";
import GuestWishes from "@/components/GuestWishes";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <EventDetails />
      <GuestWishes />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
