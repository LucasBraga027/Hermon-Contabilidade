import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, CheckCircle } from 'lucide-react'

const cities = [
    'Barra do Piraí',
    'Volta Redonda',
    'Barra Mansa',
    'Vassouras',
    'Valença',
    'Pinheiral',
    'Piraí',
    'Rio Claro',
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
}

function RJMap() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Simplified RJ state shape */}
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-lg">
                {/* Brazil outline (simplified background silhouette) */}
                <g opacity="0.08">
                    <path
                        d="M50 20 Q100 10 180 30 Q260 10 320 40 Q370 50 380 100 Q390 150 360 190 Q340 230 300 260 Q250 280 200 290 Q150 280 100 260 Q60 230 40 190 Q20 150 30 100 Q35 60 50 20Z"
                        fill="#0D2B55"
                    />
                </g>

                {/* RJ state shape */}
                <path
                    d="M100 80 L160 65 L220 70 L280 60 L320 80 L340 120 L330 160 L300 190 L260 210 L220 220 L170 215 L130 200 L100 170 L80 130 L90 100Z"
                    fill="#0D2B55"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    opacity="0.15"
                />

                {/* Sul Fluminense region - highlighted */}
                <path
                    d="M140 140 L180 130 L220 135 L250 150 L240 180 L210 195 L170 200 L140 185 L125 165Z"
                    fill="#C9A84C"
                    opacity="0.3"
                    stroke="#C9A84C"
                    strokeWidth="2"
                />

                {/* Animated pulse on Sul Fluminense */}
                <circle cx="190" cy="165" r="8" fill="#C9A84C" opacity="0.6">
                    <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="190" cy="165" r="4" fill="#C9A84C" />

                {/* Label */}
                <text x="190" y="230" textAnchor="middle" fill="#0D2B55" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
                    Sul Fluminense
                </text>

                {/* City dots */}
                <g>
                    <circle cx="190" cy="160" r="3" fill="#0D2B55" />
                    <text x="198" y="158" fill="#0D2B55" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">Barra do Piraí</text>

                    <circle cx="220" cy="175" r="2.5" fill="#0D2B55" opacity="0.7" />
                    <text x="228" y="173" fill="#0D2B55" fontSize="7" opacity="0.7" fontFamily="Inter, sans-serif">Volta Redonda</text>

                    <circle cx="235" cy="165" r="2.5" fill="#0D2B55" opacity="0.7" />

                    <circle cx="165" cy="150" r="2.5" fill="#0D2B55" opacity="0.7" />
                    <text x="143" y="145" fill="#0D2B55" fontSize="7" opacity="0.7" fontFamily="Inter, sans-serif">Vassouras</text>

                    <circle cx="155" cy="170" r="2.5" fill="#0D2B55" opacity="0.7" />
                </g>

                {/* Capital marker */}
                <g>
                    <circle cx="310" cy="130" r="4" fill="#0D2B55" stroke="white" strokeWidth="1.5" />
                    <text x="290" y="120" fill="#0D2B55" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">RJ Capital</text>
                </g>
            </svg>

            {/* Map legend */}
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-gold/30 border border-gold rounded-sm" />
                    <span>Sul Fluminense</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-navy/15 border border-navy/30 rounded-sm" />
                    <span>Estado do RJ</span>
                </div>
            </div>
        </div>
    )
}

export default function RegionalSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="regioes" className="py-20 lg:py-28 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">Cobertura</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
                        Do Sul Fluminense ao Brasil inteiro
                    </h2>
                    <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-6" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column — city list */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                        custom={1}
                    >
                        <h3 className="text-2xl font-bold text-navy mb-6">
                            Presença consolidada no Sul Fluminense
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nossa base está em Barra do Piraí, mas atuamos em toda a região Sul Fluminense e atendemos empresas em todo o território nacional de forma <strong className="text-navy">100% digital e remota</strong>.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {cities.map((city, i) => (
                                <motion.div
                                    key={city}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    variants={fadeInUp}
                                    custom={i * 0.5 + 2}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                                    <span className="text-navy text-sm font-medium">{city}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-5 bg-light-gray rounded-xl border-l-4 border-gold">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Seja você de <strong className="text-navy">Barra do Piraí, Volta Redonda, Barra Mansa</strong> ou de qualquer outro estado — a Hebron tem a estrutura para atender sua empresa.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column — map */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                        custom={3}
                    >
                        <RJMap />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
