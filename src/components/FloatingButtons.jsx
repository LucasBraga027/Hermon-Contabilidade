import { useState, useEffect } from 'react'
import { MessageCircle, ArrowUp } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5524999999999?text=Olá! Gostaria de solicitar uma proposta para minha empresa.'

export default function FloatingButtons() {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 300)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {/* WhatsApp floating button */}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40 hover:scale-110 transition-all duration-300 group"
            >
                <MessageCircle className="w-7 h-7 text-white" />
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />

                {/* Tooltip */}
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                    Fale conosco!
                </span>
            </a>

            {/* Back to top button */}
            <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className={`fixed bottom-6 right-24 z-50 w-11 h-11 bg-navy rounded-full flex items-center justify-center shadow-lg hover:bg-navy-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <ArrowUp className="w-5 h-5 text-gold" />
            </button>
        </>
    )
}
