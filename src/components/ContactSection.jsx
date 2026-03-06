import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Send, Building2 } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5524999999999?text=Olá! Gostaria de solicitar uma proposta para minha empresa.'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
}

export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [formData, setFormData] = useState({
        empresa: '',
        cnpj: '',
        segmento: '',
        mensagem: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Build WhatsApp message with form data
        const msg = `Olá! Gostaria de solicitar uma proposta.\n\n*Empresa:* ${formData.empresa}\n*CNPJ:* ${formData.cnpj}\n*Segmento:* ${formData.segmento}\n*Mensagem:* ${formData.mensagem}`
        const url = `https://wa.me/5524999999999?text=${encodeURIComponent(msg)}`
        window.open(url, '_blank')
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section id="contato" className="py-20 lg:py-28 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-semibold text-sm uppercase tracking-wider">Fale conosco</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-2 mb-4">
                        Vamos conversar sobre a sua empresa?
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Entre em contato e descubra como podemos ajudar sua empresa a crescer com segurança contábil.
                    </p>
                    <div className="w-16 h-1 bg-gold rounded-full mx-auto mt-6" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left column — contact info */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                        custom={1}
                    >
                        <div className="space-y-8 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold mb-1">Endereço</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Vila Jandira, 21 – Centro<br />
                                        Barra do Piraí/RJ – CEP 27120-090
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold mb-1">Telefone</h4>
                                    <p className="text-gray-500 text-sm">(24) 9999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-navy font-bold mb-1">E-mail</h4>
                                    <p className="text-gray-500 text-sm">contato@hebroncontabilidade.com.br</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-bold text-base rounded-xl hover:brightness-110 transition-all duration-300 shadow-lg shadow-whatsapp/20 hover:shadow-xl hover:shadow-whatsapp/30 hover:-translate-y-0.5"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Falar pelo WhatsApp
                        </a>

                        {/* Google Maps */}
                        <div className="mt-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.123456789!2d-43.8269!3d-22.4711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzE2LjAiUyA0M8KwNDknMzYuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Hebron Contabilidade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right column — form */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeInUp}
                        custom={2}
                    >
                        <form onSubmit={handleSubmit} className="bg-light-gray rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h3 className="text-navy font-bold text-lg">Solicite uma proposta</h3>
                                    <p className="text-gray-400 text-xs">Responderemos em até 24 horas</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="empresa" className="block text-navy text-sm font-semibold mb-2">
                                        Nome da Empresa *
                                    </label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        required
                                        value={formData.empresa}
                                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                                        placeholder="Ex: Minha Empresa LTDA"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="cnpj" className="block text-navy text-sm font-semibold mb-2">
                                        CNPJ
                                    </label>
                                    <input
                                        type="text"
                                        id="cnpj"
                                        value={formData.cnpj}
                                        onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                                        placeholder="00.000.000/0000-00"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="segmento" className="block text-navy text-sm font-semibold mb-2">
                                        Segmento de Atuação
                                    </label>
                                    <input
                                        type="text"
                                        id="segmento"
                                        value={formData.segmento}
                                        onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                                        placeholder="Ex: Tecnologia, Varejo, Serviços..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mensagem" className="block text-navy text-sm font-semibold mb-2">
                                        Mensagem *
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        required
                                        rows={4}
                                        value={formData.mensagem}
                                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                                        placeholder="Conte-nos um pouco sobre sua empresa e como podemos ajudar..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-bold text-base rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg shadow-navy/20 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    {submitted ? (
                                        'Mensagem enviada! ✓'
                                    ) : (
                                        <>
                                            Enviar Mensagem
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
