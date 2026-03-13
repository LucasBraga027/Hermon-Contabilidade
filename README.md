# Hermon Contabilidade — Website Institucional

Website institucional moderno e responsivo para a Hebron Contabilidade, escritório de contabilidade especializado exclusivamente em Pessoas Jurídicas, com base em Barra do Piraí/RJ.

## 🛠 Tech Stack

- **React** 19 — UI library
- **Vite** 7 — Build tool
- **Tailwind CSS** v4 — Utility-first CSS (via `@tailwindcss/vite`)
- **Framer Motion** — Scroll-triggered animations
- **Lucide React** — Icon library

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── App.jsx                     # Layout principal
├── main.jsx                    # Entry point React
├── index.css                   # Estilos globais + Tailwind
└── components/
    ├── Navbar.jsx              # Navegação fixa com menu mobile
    ├── HeroSection.jsx         # Seção hero com CTAs
    ├── AboutSection.jsx        # Quem somos + cards de valores
    ├── ServicesSection.jsx     # Grid de 6 serviços
    ├── DifferentialsSection.jsx # Diferenciais (fundo escuro)
    ├── RegionalSection.jsx     # Cobertura regional com mapa SVG
    ├── NumbersSection.jsx      # Contadores animados
    ├── ContactSection.jsx      # Formulário + WhatsApp + Google Maps
    ├── Footer.jsx              # Rodapé com dados legais
    └── FloatingButtons.jsx     # Botão WhatsApp flutuante + voltar ao topo
```

## 🎨 Identidade Visual

| Token          | Cor       | Uso                       |
|----------------|-----------|---------------------------|
| `navy`         | `#0D2B55` | Cor principal              |
| `navy-light`   | `#1A4080` | Gradientes e hovers       |
| `gold`         | `#C9A84C` | Acentos, CTAs, ícones     |
| `light-gray`   | `#F5F7FA` | Backgrounds alternados    |
| `whatsapp`     | `#25D366` | Botões WhatsApp           |

## 📱 Responsividade

O site é **mobile-first** e otimizado para:
- **375px** — Smartphones
- **768px** — Tablets
- **1280px** — Desktop

## ⚡ Features

- ✅ Navegação sticky com blur
- ✅ Animações de entrada no scroll (Framer Motion)
- ✅ Contadores animados
- ✅ Mapa SVG do RJ com Sul Fluminense destacado
- ✅ Formulário de contato integrado com WhatsApp
- ✅ Botão WhatsApp flutuante com animação pulse
- ✅ SEO: meta tags, Open Graph, HTML5 semântico
- ✅ Acessibilidade: ARIA labels, foco, contraste

---

**Hermon Contabilidade** — Contabilidade estratégica para empresas desde 1998.
