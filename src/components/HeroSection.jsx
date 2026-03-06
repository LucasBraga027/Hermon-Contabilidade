import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Award, Building, Globe } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5524999999999?text=Olá! Gostaria de solicitar uma proposta para minha empresa.'

const trustBadges = [
    { icon: Award, label: '28+ anos de experiência' },
    { icon: Building, label: '100% Pessoa Jurídica' },
    { icon: Globe, label: 'Atendimento Nacional' },
]

export default function HeroSection() {
    const scrollToServices = (e) => {
        e.preventDefault()
        document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />

            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-[0.07]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="heroDots" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="15" cy="15" r="1" fill="#C9A84C" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#heroGrid)" />
                    <rect width="100%" height="100%" fill="url(#heroDots)" />
                </svg>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

            {/* Accent lines */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

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
                        Sua empresa em
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
                                <span className="text-white/80 text-sm font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}
