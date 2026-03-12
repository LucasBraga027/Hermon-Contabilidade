import { useState, useEffect } from 'react'
import { Menu, X, Building2 } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5524993100692?text=Olá! Gostaria de solicitar uma proposta para minha empresa.'

const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Regiões', href: '#regioes' },
    { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        setIsOpen(false)
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
            role="navigation"
            aria-label="Navegação principal"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => handleLinkClick(e, '#inicio')}
                        className="flex items-center gap-2.5 group"
                        aria-label="Hebron Contabilidade - Página inicial"
                    >
                        <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center group-hover:bg-navy-light transition-colors">
                            <Building2 className="w-5 h-5 text-gold" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-lg font-bold leading-tight tracking-tight transition-colors ${scrolled ? 'text-navy' : 'text-white'
                                }`}>
                                Hebron
                            </span>
                            <span className={`text-[10px] font-medium uppercase tracking-widest leading-none transition-colors ${scrolled ? 'text-gold-dark' : 'text-gold'
                                }`}>
                                Contabilidade
                            </span>
                        </div>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 ${scrolled
                                        ? 'text-navy/80 hover:text-navy hover:bg-navy/5'
                                        : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 inline-flex items-center px-5 py-2.5 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-gold-light transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Solicitar Proposta
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-navy' : 'text-white'
                            }`}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="block px-4 py-3 text-navy/80 hover:text-navy hover:bg-light-gray rounded-lg text-sm font-medium transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-2">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center px-4 py-3 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-gold-light transition-all"
                        >
                            Solicitar Proposta
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
