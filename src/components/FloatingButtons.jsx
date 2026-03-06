import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5524999999999?text=Olá! Gostaria de solicitar uma proposta para minha empresa.'

function WhatsAppIcon({ className }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.95a13.2 13.2 0 0 0 1.792 6.636L2.667 29.333l6.983-1.828A13.28 13.28 0 0 0 16.004 29.3h.005c7.32 0 13.28-5.96 13.28-13.28S23.324 2.667 16.004 2.667Zm0 24.307a11 11 0 0 1-5.616-1.538l-.403-.239-4.178 1.095 1.115-4.074-.263-.418A10.96 10.96 0 0 1 5.042 15.95c0-6.048 4.923-10.968 10.971-10.968 2.93 0 5.684 1.143 7.754 3.215a10.9 10.9 0 0 1 3.208 7.76c-.003 6.048-4.926 10.967-10.971 10.967Zm6.016-8.21c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.743.165-.22.33-.853 1.073-1.046 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.654-1.638-.981-.875-1.643-1.955-1.836-2.285-.193-.33-.02-.508.145-.672.149-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.743-1.79-1.018-2.45-.268-.643-.54-.556-.743-.566-.193-.01-.413-.012-.633-.012s-.578.083-.88.413c-.303.33-1.156 1.128-1.156 2.75 0 1.623 1.183 3.19 1.348 3.41.165.22 2.328 3.552 5.64 4.98.788.34 1.403.543 1.883.695.791.251 1.511.216 2.08.131.635-.095 1.952-.798 2.228-1.568.275-.77.275-1.43.193-1.568-.083-.138-.303-.22-.633-.385Z" />
        </svg>
    )
}

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
                <WhatsAppIcon className="w-8 h-8 text-white" />
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />

                {/* Tooltip — positioned above the button so it never gets covered */}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                    Fale conosco!
                    <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-navy" />
                </span>
            </a>

            {/* Back to top button — positioned above the WhatsApp button */}
            <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className={`fixed bottom-24 right-7 z-50 w-10 h-10 bg-navy rounded-full flex items-center justify-center shadow-lg hover:bg-navy-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <ArrowUp className="w-5 h-5 text-gold" />
            </button>
        </>
    )
}
