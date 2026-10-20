// import CustomCursor from '@/components/ui/CustomCursor';
// import Navbar from '@/components/layout/Navbar';
// import HeroTiffin from '@/components/hero/HeroTiffin'; // Your flexbox tiffin code
// import Brands from '@/components/sections/Brands';
// import Specialties from '@/components/sections/Specialties';
// import HowItWorks from '@/components/sections/HowItWorks';

import Brands from "../components/sections/Brands";
import HeroTiffin from "../components/hero/HeroTiffin";
import HowItWorks from "../components/sections/HowItWorks";
import MenuPricing from "../components/sections/MenuPricing";
import Navbar from "../components/layout/Navbar";
import Specialties from "../components/sections/Specialties";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";
import CustomCursor from "../components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden relative">
      {/* 1. Global Custom Framer Motion Cursor */}
      <CustomCursor />

      {/* 2. Global Navigation */}
      <Navbar />

      {/* 3. Hero Tiffin Interactive Animation */}
      <HeroTiffin />

      {/* 4. Social Proof Partner Logos Marquee */}
      <Brands />

      {/* 5. Services & Specialties */}
      <div id="services">
        <div id="specialties">
          <Specialties />
        </div>
      </div>

      {/* 6. How It Works 3-Step Timeline */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* 7. Menu & Transparent Subscription Plans */}
      <MenuPricing />

      {/* 8. Customer Testimonials & Social Proof */}
      <Testimonials />

      {/* 9. Comprehensive Multi-Column Footer */}
      <Footer />
    </div>
  );
}

