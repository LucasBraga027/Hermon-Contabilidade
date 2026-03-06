import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Target, Globe, MapPin } from 'lucide-react'

const differentials = [
    {
        icon: Trophy,
        number: '28+',
        title: 'anos de mercado',
        description: 'Experiência consolidada desde 1998, com expertise construída ao longo de décadas de atuação.',
    },
    {
        icon: Target,
        number: '100%',
        title: 'foco em empresas',
        description: 'Não somos generalistas. Somos especialistas em Pessoa Jurídica — sua empresa é nossa prioridade.',
    },
    {
        icon: Globe,
        number: 'Brasil',
        title: 'todo',
        description: 'Presença digital para atender onde sua empresa estiver, com processos 100% otimizados.',
    },
    {
        icon: MapPin,
        number: 'Sul',
        title: 'Fluminense',
        description: 'Base consolidada na região, com conhecimento profundo do mercado e da legislação local.',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
    }),
}

export default function DifferentialsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="diferenciais" className="relative py-20 lg:py-28 bg-navy overflow-hidden" ref={ref}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diffGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="#C9A84C" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diffGrid)" />
                </svg>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                        Por que escolher a Hebron?
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Combinamos tradição e inovação para oferecer uma experiência contábil de excelência.
                    </p>
                    <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Differential cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentials.map((diff, i) => (
                        <motion.div
                            key={diff.title}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                            custom={i + 1}
                            className="group relative text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                                <diff.icon className="w-8 h-8 text-gold" />
                            </div>
                            <div className="mb-3">
                                <span className="text-3xl lg:text-4xl font-extrabold text-gold">{diff.number}</span>
                                <span className="block text-white font-semibold text-lg">{diff.title}</span>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed">{diff.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
