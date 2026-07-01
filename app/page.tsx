import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import WhyMyPrint from '@/components/landing/WhyMyPrint'
import Categories from '@/components/landing/Categories'
import ForVendors from '@/components/landing/ForVendors'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyMyPrint />
      <Categories />
      <ForVendors />
      <Footer />
    </main>
  )
}
