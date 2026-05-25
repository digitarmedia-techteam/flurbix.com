import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import FeaturesSection from '@/components/FeaturesSection'
import ProductShowcase from '@/components/ProductShowcase'
import HowItWorks from '@/components/HowItWorks'
import ComparisonTable from '@/components/ComparisonTable'
import Testimonials from '@/components/Testimonials'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <ProductShowcase />
        <HowItWorks />
        <ComparisonTable />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
