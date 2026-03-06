import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    useEffect(() => {
        if (!isInView) return
        const controls = animate(0, target, {
            duration,
            ease: 'easeOut',
            onUpdate: (v) => setValue(Math.round(v)),
        })
        return () => controls.stop()
    }, [isInView, target, duration])

    return (
        <span ref={ref}>
            {value}{suffix}
        </span>
    )
}

const stats = [
    {
        target: 28,
        suffix: '+',
        label: 'Anos de experiência',
        description: 'Desde 1998 no mercado',
    },
    {
        target: 100,
        suffix: '%',
        label: 'Foco em Pessoa Jurídica',
        description: 'Especialistas em empresas',
    },
    {
        target: 0,
        suffix: '',
        customText: 'Sul Fluminense +',
        label: 'Base de clientes consolidada',
        description: 'Atuação regional e nacional',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
    }),
}

export default function NumbersSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="py-20 lg:py-24 bg-light-gray" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    custom={0}
                    className="text-center mb-12"
                >
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">Números que falam</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-2">
                        Nossa trajetória em números
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                            custom={i + 1}
                            className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div className="text-5xl lg:text-6xl font-extrabold text-navy mb-2">
                                {stat.customText ? (
                                    <span className="text-4xl lg:text-5xl">{stat.customText}</span>
                                ) : (
                                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                                )}
                            </div>
                            <div className="text-gold font-bold text-lg mb-1">{stat.label}</div>
                            <div className="text-gray-400 text-sm">{stat.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
