import { Building2 } from 'lucide-react'

const quickLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
]

export default function Footer() {
    const handleClick = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-navy-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
                    {/* Brand column */}
                    <div>
                        <a href="#inicio" onClick={(e) => handleClick(e, '#inicio')} className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-gold" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold leading-tight text-white">Hermon</span>
                                <span className="text-[10px] font-medium uppercase tracking-widest text-gold leading-none">
                                    Contabilidade
                                </span>
                            </div>
                        </a>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Contabilidade estratégica para empresas. Parceira do seu crescimento desde 1998.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Links Rápidos</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className="text-white/50 hover:text-gold text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal info */}
                    <div>
                        <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">Informações Legais</h4>
                        <ul className="space-y-3 text-white/40 text-sm">
                            <li>
                                <span className="text-white/60 font-medium">CNPJ:</span>{' '}
                                14.805.685/0001-58
                            </li>
                            <li>
                                <span className="text-white/60 font-medium">CRC/RJ:</span>{' '}
                                082048/O4
                            </li>
                            <li>Barra do Piraí – RJ</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs text-center md:text-left">
                        © 2026 Hermon Contabilidade. Todos os direitos reservados.
                    </p>
                    <p className="text-white/30 text-xs text-center md:text-right">
                        Atendemos exclusivamente Pessoas Jurídicas (CNPJ)
                    </p>
                </div>
            </div>
        </footer>
    )
}
