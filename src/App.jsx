import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import DifferentialsSection from './components/DifferentialsSection'
import RegionalSection from './components/RegionalSection'
import NumbersSection from './components/NumbersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <DifferentialsSection />
                <RegionalSection />
                <NumbersSection />
                <ContactSection />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    )
}
