import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Lightbulb, Handshake, Eye } from 'lucide-react'

const values = [
    {
        icon: ShieldCheck,
        title: 'Confiança',
        description: 'Construímos relações sólidas baseadas em transparência e resultados.',
    },
    {
        icon: Lightbulb,
        title: 'Expertise',
        description: 'Conhecimento técnico consolidado em mais de duas décadas de atuação.',
    },
    {
        icon: Handshake,
        title: 'Parceria',
        description: 'Não somos apenas contadores — somos aliados do sucesso do seu negócio.',
    },
    {
        icon: Eye,
        title: 'Transparência',
        description: 'Comunicação clara e relatórios precisos para decisões seguras.',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="sobre" className="py-20 lg:py-28 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    custom={0}
                    className="mb-16"
                >
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">Sobre nós</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
                        Quem somos
                    </h2>
                    <div className="w-16 h-1 bg-gold rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left column — text */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                        custom={1}
                    >
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Fundada em dezembro de 1998 em <strong className="text-navy">Barra do Piraí</strong>, no coração do Sul Fluminense, a Hermon Contabilidade nasceu da convicção de que empresas merecem uma contabilidade que vai além dos números.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Com raízes bíblicas que remetem a <em className="text-navy font-medium">aliança, pacto e força</em>, o nome Hermon reflete nosso compromisso fundamental: construir relações duradouras e confiáveis com cada cliente. São mais de <strong className="text-navy">28 anos de experiência</strong> atendendo empresas de diversos segmentos e portes.
                        </p>

                        {/* PJ-exclusive callout */}
                        <div className="relative pl-6 py-5 pr-6 bg-light-gray rounded-xl border-l-4 border-gold">
                            <p className="text-navy font-medium leading-relaxed">
                                🎯 Atendemos <strong>exclusivamente empresas (Pessoa Jurídica)</strong>. Nossa especialização permite entregar soluções contábeis mais precisas e estratégicas para o seu negócio.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right column — value cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={fadeInUp}
                                custom={i + 2}
                                className="group p-6 bg-light-gray rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-light transition-colors">
                                    <value.icon className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="text-navy font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
