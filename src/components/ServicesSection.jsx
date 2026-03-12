import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    Briefcase,
    Landmark,
    FileX,
    ShieldCheck,
    Calculator,
    Tractor,
} from 'lucide-react'

const services = [
    {
        icon: Briefcase,
        title: 'Legalização de Empresas',
        description: 'Abertura e legalização de negócios com agilidade, garantindo que sua empresa nasça com total segurança jurídica e conformidade.',
    },
    {
        icon: Landmark,
        title: 'Entidades Sem Fins Lucrativos',
        description: 'Assessoria especializada na constituição e legalização de ONGs, associações e igrejas, cuidando de todas as suas particularidades.',
    },
    {
        icon: FileX,
        title: 'Baixa de Empresas',
        description: 'Processo completo de encerramento de atividades, liquidando todas as obrigações fiscais e contábeis de forma definitiva.',
    },
    {
        icon: ShieldCheck,
        title: 'Regularização de Inaptas',
        description: 'Diagnóstico e resolução de pendências para reativar CNPJs inaptos perante a Receita Federal e demais órgãos ambientais e fiscais.',
    },
    {
        icon: Calculator,
        title: 'Escrituração Contábil',
        description: 'Atendimento e gestão para Lucro Real, Presumido, Arbitrado, Simples Nacional, MEI, além de entidades Isentas e Imunes.',
    },
    {
        icon: Tractor,
        title: 'Produtor Rural & ITR',
        description: 'Assessoria para o agronegócio, incluindo o Cadastramento de Produtor Rural e a declaração anual do ITR.',
    },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function ServicesSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="servicos" className="py-20 lg:py-28 bg-light-gray" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">O que fazemos</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Soluções contábeis completas para a sua empresa — do operacional ao estratégico.
                    </p>
                    <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-6" />
                </motion.div>

                {/* Service cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={fadeInUp}
                            custom={i + 1}
                            className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-navy/20 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-navy transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-gold" />
                            </div>
                            <h3 className="text-navy font-bold text-lg mb-3">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
