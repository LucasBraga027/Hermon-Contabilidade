import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Award, Building, Globe } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5524993100692?text=Olá! Gostaria de solicitar uma proposta para minha empresa.'

const heroSlides = [
    { image: '/images/hero-bg-1.png' },
    { image: '/images/hero-bg-2.png' },
    { image: '/images/hero-bg-3.png' },
]

const trustBadges = [
    { icon: Award, label: '28+ anos de experiência' },
    { icon: Building, label: '100% Pessoa Jurídica' },
    { icon: Globe, label: 'Atendimento Nacional' },
]

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const scrollToServices = (e) => {
        e.preventDefault()
        document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background image carousel */}
            <AnimatePresence mode="wait">
                {heroSlides.map((slide, index) =>
                    index === currentSlide ? (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            className="absolute inset-0"
                        >
                            <img
                                src={slide.image}
                                alt={`Hermon Contabilidade - Atendimento estratégico para empresas - Slide ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-navy/75" />

            {/* Subtle geometric pattern on top */}
            <div className="absolute inset-0 opacity-[0.05]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#heroGrid)" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/10 rounded-full mb-6">
                            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                                Desde 1998 • Sul Fluminense e Brasil
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
                    >
                        Contabilidade em
                        <span className="text-gold"> mãos experientes</span>
                        {' '}há mais de 28 anos
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed"
                    >
                        Contabilidade estratégica exclusiva para pessoas jurídicas — do Sul Fluminense ao Brasil inteiro.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-bold text-base rounded-xl hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
                        >
                            Solicitar Proposta
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#servicos"
                            onClick={scrollToServices}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                        >
                            Conheça nossos serviços
                            <ChevronDown className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-wrap gap-6"
                    >
                        {trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                    <badge.icon className="w-5 h-5 text-gold" />
                                </div>
                                <span className="text-white/90 text-sm font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        aria-label={`Ir para slide ${i + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide
                                ? 'bg-gold w-8'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
