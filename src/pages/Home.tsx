import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, Bot, Database, Cog, Mail, Phone, ChevronRight } from 'lucide-react'
import React from 'react'

// Small animation helpers
const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, viewport: { once: true } })

const SectionTitle: React.FC<{ kicker?: string, title: string, subtitle?: string }> = ({ kicker, title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto">
    {kicker && (<p className="text-accent/90 font-semibold tracking-wide mb-2">{kicker}</p>)}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{title}</h2>
    {subtitle && (<p className="text-white/70">{subtitle}</p>)}
  </div>
)

const MotionLink = motion.a
const Button: React.FC<{ variant?: 'primary' | 'secondary', href?: string, children: React.ReactNode }>
  = ({ variant = 'primary', href = '#contact', children }) => {
  const classes = variant === 'primary'
    ? 'bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-400 text-white shadow-md hover:shadow-lg'
    : 'bg-transparent text-white border border-white/20 hover:border-accent/50 hover:text-accent'
  const base = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all'
  return href.startsWith('http') ? (
    <MotionLink whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} className={`${base} ${classes}`} href={href} target="_blank" rel="noreferrer">{children}</MotionLink>
  ) : (
    <MotionLink whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} className={`${base} ${classes}`} href={href}>{children}</MotionLink>
  )
}

// HERO
const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 hero-pattern" />
    <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/20 rounded-full blur-3xl" />
    <div className="pointer-events-none absolute top-40 -right-16 w-80 h-80 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl" />
    <div className="relative container-locked px-4 py-20 md:py-28">
      <motion.div {...fadeIn(0)} className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white">Transform Your Business with Intelligent AI Solutions</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          From custom AI agents to enterprise automation, we deliver cutting-edge AI solutions that drive real business value.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="secondary" href="#contact">Book a Call <ArrowRight size={18} /></Button>
          <Button variant="secondary" href="#work">See Our Work</Button>
        </div>
      </motion.div>
    </div>
  </section>
)

// SERVICES
const services = [
  { icon: <Bot />, title: 'Custom AI Agents', desc: 'Intelligent agents that automate complex workflows and decision-making processes.' },
  { icon: <Rocket />, title: 'AI-Powered Applications', desc: 'Full-stack applications enhanced with machine learning and AI capabilities.' },
  { icon: <Database />, title: 'Intelligent Data Systems', desc: 'RAG-powered knowledge bases and AI-driven data analytics platforms.' },
  { icon: <Cog />, title: 'Process Automation', desc: 'End-to-end automation solutions powered by AI and machine learning.' },
]

const Services = () => (
  <section id="services" className="container-locked px-4 py-16 md:py-24">
    <SectionTitle kicker="Services" title="What We Do" subtitle="End-to-end delivery across product, engineering, and AI." />
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map((s, i) => (
        <motion.div key={s.title} {...fadeIn(i * 0.1)} whileHover={{ scale: 1.02, y: -4 }} className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:ring-accent/40 transition-all">
          <div className="text-accent">{s.icon}</div>
          <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
          <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

// WORK / CASE STUDIES
const work = [
  { name: 'Ops Agent Platform', desc: 'Agentic workflows automating support triage and resolution.', metric: 'Saved 200+ hours/month' },
  { name: 'RAG for Knowledge Base', desc: 'Enterprise-grade RAG over 200k+ docs with evaluators.', metric: 'Cut response time by 65%' },
  { name: 'AI Copilot for CRM', desc: 'Context-aware recommendations and email drafting.', metric: 'Increased conversions by 22%' },
]

const Work = () => (
  <section id="work" className="container-locked px-4 py-16 md:py-24">
    <SectionTitle kicker="Portfolio" title="Case Studies" subtitle="A few examples of recent projects and impact." />
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {work.map((w, i) => (
        <motion.div key={w.name} {...fadeIn(i * 0.1)} whileHover={{ scale: 1.02, y: -4 }} className="group card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:ring-accent/40 transition-all">
          <h3 className="font-semibold text-lg">{w.name}</h3>
          <p className="mt-2 text-white/70 text-sm">{w.desc}</p>
          <p className="mt-4 text-accent text-sm font-medium">{w.metric}</p>
          <button className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
            View More <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      ))}
    </div>
  </section>
)

// WHY US
const why = [
  { icon: <Sparkles />, title: 'Proven AI Expertise', desc: 'Deep experience shipping real GenAI systems in production.' },
  { icon: <Cog />, title: 'End-to-End Delivery', desc: 'From strategy and design to deployment and MLOps.' },
  { icon: <Rocket />, title: 'Faster Timelines', desc: 'Battle-tested templates and accelerators to ship 40% faster.' },
  { icon: <Database />, title: 'Industry-Specific', desc: 'Solutions tailored for your domain and regulatory needs.' },
]

const WhyUs = () => (
  <section id="why" className="container-locked px-4 py-16 md:py-24">
    <SectionTitle kicker="Why Us" title="Why Choose Vizax" />
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {why.map((w, i) => (
        <motion.div key={w.title} {...fadeIn(i * 0.1)} whileHover={{ scale: 1.02, y: -2 }} className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:ring-accent/40 transition-all">
          <div className="text-accent">{w.icon}</div>
          <h3 className="mt-4 font-semibold">{w.title}</h3>
          <p className="mt-2 text-white/70 text-sm">{w.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

// TESTIMONIALS
const testimonials = [
  { name: 'Alex Carter', role: 'CTO, FinCore', text: 'Vizax delivered our AI-powered platform in record time. Their expertise in AI solutions is unmatched.', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Priya Singh', role: 'Head of Ops, Helio', text: 'The AI agents from Vizax automated half our workload. Exceptional engineering and user experience.', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Liam Chen', role: 'VP Product, Omnia', text: 'Vizax built an AI copilot that transformed our sales process. Results exceeded expectations.', avatar: 'https://i.pravatar.cc/100?img=12' },
]

const Testimonials = () => (
  <section id="testimonials" className="container-locked px-4 py-16 md:py-24">
    <SectionTitle kicker="Testimonials" title="What Clients Say" />
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div key={t.name} {...fadeIn(i * 0.1)} whileHover={{ scale: 1.02, y: -2 }} className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 transition-all">
          <div className="flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-xs text-white/60">{t.role}</p>
            </div>
          </div>
          <p className="mt-4 text-white/80 text-sm">"{t.text}"</p>
        </motion.div>
      ))}
    </div>
  </section>
)

// Alphabetically sorted countries
const countries = [
  { code: 'AF', name: 'Afghanistan' },
  { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'AS', name: 'American Samoa' },
  { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' },
  { code: 'AI', name: 'Anguilla' },
  { code: 'AQ', name: 'Antarctica' },
  { code: 'AG', name: 'Antigua and Barbuda' },
  { code: 'AR', name: 'Argentina' },
  { code: 'AM', name: 'Armenia' },
  { code: 'AW', name: 'Aruba' },
  { code: 'AU', name: 'Australia' },
  { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' },
  { code: 'BS', name: 'Bahamas' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'BB', name: 'Barbados' },
  { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' },
  { code: 'BZ', name: 'Belize' },
  { code: 'BJ', name: 'Benin' },
  { code: 'BM', name: 'Bermuda' },
  { code: 'BT', name: 'Bhutan' },
  { code: 'BO', name: 'Bolivia' },
  { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
  { code: 'BA', name: 'Bosnia and Herzegovina' },
  { code: 'BW', name: 'Botswana' },
  { code: 'BV', name: 'Bouvet Island' },
  { code: 'BR', name: 'Brazil' },
  { code: 'IO', name: 'British Indian Ocean Territory' },
  { code: 'BN', name: 'Brunei Darussalam' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' },
  { code: 'CV', name: 'Cabo Verde' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' },
  { code: 'CA', name: 'Canada' },
  { code: 'KY', name: 'Cayman Islands' },
  { code: 'CF', name: 'Central African Republic' },
  { code: 'TD', name: 'Chad' },
  { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' },
  { code: 'CX', name: 'Christmas Island' },
  { code: 'CC', name: 'Cocos (Keeling) Islands' },
  { code: 'CO', name: 'Colombia' },
  { code: 'KM', name: 'Comoros' },
  { code: 'CG', name: 'Congo' },
  { code: 'CD', name: 'Congo, Democratic Republic of the' },
  { code: 'CK', name: 'Cook Islands' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'CI', name: "Cote d'Ivoire" },
  { code: 'HR', name: 'Croatia' },
  { code: 'CU', name: 'Cuba' },
  { code: 'CW', name: 'Curaçao' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'CZ', name: 'Czechia' },
  { code: 'DK', name: 'Denmark' },
  { code: 'DJ', name: 'Djibouti' },
  { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' },
  { code: 'GQ', name: 'Equatorial Guinea' },
  { code: 'ER', name: 'Eritrea' },
  { code: 'EE', name: 'Estonia' },
  { code: 'SZ', name: 'Eswatini' },
  { code: 'ET', name: 'Ethiopia' },
  { code: 'FK', name: 'Falkland Islands (Malvinas)' },
  { code: 'FO', name: 'Faroe Islands' },
  { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' },
  { code: 'FR', name: 'France' },
  { code: 'GF', name: 'French Guiana' },
  { code: 'PF', name: 'French Polynesia' },
  { code: 'TF', name: 'French Southern Territories' },
  { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambia' },
  { code: 'GE', name: 'Georgia' },
  { code: 'DE', name: 'Germany' },
  { code: 'GH', name: 'Ghana' },
  { code: 'GI', name: 'Gibraltar' },
  { code: 'GR', name: 'Greece' },
  { code: 'GL', name: 'Greenland' },
  { code: 'GD', name: 'Grenada' },
  { code: 'GP', name: 'Guadeloupe' },
  { code: 'GU', name: 'Guam' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'GG', name: 'Guernsey' },
  { code: 'GN', name: 'Guinea' },
  { code: 'GW', name: 'Guinea-Bissau' },
  { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' },
  { code: 'HM', name: 'Heard Island and McDonald Islands' },
  { code: 'VA', name: 'Holy See' },
  { code: 'HN', name: 'Honduras' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IR', name: 'Iran' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'IE', name: 'Ireland' },
  { code: 'IM', name: 'Isle of Man' },
  { code: 'IL', name: 'Israel' },
  { code: 'IT', name: 'Italy' },
  { code: 'JM', name: 'Jamaica' },
  { code: 'JP', name: 'Japan' },
  { code: 'JE', name: 'Jersey' },
  { code: 'JO', name: 'Jordan' },
  { code: 'KZ', name: 'Kazakhstan' },
  { code: 'KE', name: 'Kenya' },
  { code: 'KI', name: 'Kiribati' },
  { code: 'KP', name: 'Korea, Democratic People\'s Republic of' },
  { code: 'KR', name: 'Korea, Republic of' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'KG', name: 'Kyrgyzstan' },
  { code: 'LA', name: 'Lao People\'s Democratic Republic' },
  { code: 'LV', name: 'Latvia' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Liberia' },
  { code: 'LY', name: 'Libya' },
  { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'MO', name: 'Macao' },
  { code: 'MG', name: 'Madagascar' },
  { code: 'MW', name: 'Malawi' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MV', name: 'Maldives' },
  { code: 'ML', name: 'Mali' },
  { code: 'MT', name: 'Malta' },
  { code: 'MH', name: 'Marshall Islands' },
  { code: 'MQ', name: 'Martinique' },
  { code: 'MR', name: 'Mauritania' },
  { code: 'MU', name: 'Mauritius' },
  { code: 'YT', name: 'Mayotte' },
  { code: 'MX', name: 'Mexico' },
  { code: 'FM', name: 'Micronesia' },
  { code: 'MD', name: 'Moldova' },
  { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' },
  { code: 'ME', name: 'Montenegro' },
  { code: 'MS', name: 'Montserrat' },
  { code: 'MA', name: 'Morocco' },
  { code: 'MZ', name: 'Mozambique' },
  { code: 'MM', name: 'Myanmar' },
  { code: 'NA', name: 'Namibia' },
  { code: 'NR', name: 'Nauru' },
  { code: 'NP', name: 'Nepal' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'NC', name: 'New Caledonia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'NE', name: 'Niger' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'NU', name: 'Niue' },
  { code: 'NF', name: 'Norfolk Island' },
  { code: 'MK', name: 'North Macedonia' },
  { code: 'MP', name: 'Northern Mariana Islands' },
  { code: 'NO', name: 'Norway' },
  { code: 'OM', name: 'Oman' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'PW', name: 'Palau' },
  { code: 'PS', name: 'Palestine, State of' },
  { code: 'PA', name: 'Panama' },
  { code: 'PG', name: 'Papua New Guinea' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'PH', name: 'Philippines' },
  { code: 'PN', name: 'Pitcairn' },
  { code: 'PL', name: 'Poland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'PR', name: 'Puerto Rico' },
  { code: 'QA', name: 'Qatar' },
  { code: 'RE', name: 'Reunion' },
  { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russian Federation' },
  { code: 'RW', name: 'Rwanda' },
  { code: 'BL', name: 'Saint Barthelemy' },
  { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
  { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' },
  { code: 'MF', name: 'Saint Martin' },
  { code: 'PM', name: 'Saint Pierre and Miquelon' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'WS', name: 'Samoa' },
  { code: 'SM', name: 'San Marino' },
  { code: 'ST', name: 'Sao Tome and Principe' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'SN', name: 'Senegal' },
  { code: 'RS', name: 'Serbia' },
  { code: 'SC', name: 'Seychelles' },
  { code: 'SL', name: 'Sierra Leone' },
  { code: 'SG', name: 'Singapore' },
  { code: 'SX', name: 'Sint Maarten' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'SB', name: 'Solomon Islands' },
  { code: 'SO', name: 'Somalia' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
  { code: 'SS', name: 'South Sudan' },
  { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'SD', name: 'Sudan' },
  { code: 'SR', name: 'Suriname' },
  { code: 'SJ', name: 'Svalbard and Jan Mayen' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syrian Arab Republic' },
  { code: 'TW', name: 'Taiwan, Province of China' },
  { code: 'TJ', name: 'Tajikistan' },
  { code: 'TZ', name: 'Tanzania, United Republic of' },
  { code: 'TH', name: 'Thailand' },
  { code: 'TL', name: 'Timor-Leste' },
  { code: 'TG', name: 'Togo' },
  { code: 'TK', name: 'Tokelau' },
  { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad and Tobago' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' },
  { code: 'TC', name: 'Turks and Caicos Islands' },
  { code: 'TV', name: 'Tuvalu' },
  { code: 'UG', name: 'Uganda' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'UM', name: 'United States Minor Outlying Islands' },
  { code: 'US', name: 'United States' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'UZ', name: 'Uzbekistan' },
  { code: 'VU', name: 'Vanuatu' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'VN', name: 'Viet Nam' },
  { code: 'VG', name: 'Virgin Islands, British' },
  { code: 'VI', name: 'Virgin Islands, U.S.' },
  { code: 'WF', name: 'Wallis and Futuna' },
  { code: 'EH', name: 'Western Sahara' },
  { code: 'YE', name: 'Yemen' },
  { code: 'ZM', name: 'Zambia' },
  { code: 'ZW', name: 'Zimbabwe' }
]

import { useState } from 'react'

// CONTACT
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('')

  const toggleDropdown = () => setIsOpen(!isOpen)
  const selectCountry = (code: string, name: string) => {
    setSelectedCountry(`${code} - ${name}`)
    setIsOpen(false)
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-60 hero-pattern" />
      <div className="container-locked px-4">
        <div className="card rounded-2xl p-8 md:p-10 ring-1 ring-white/10 hover:ring-accent/40 transition-all">
          <div className="md:flex md:items-start md:justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-extrabold">Let's build your next AI-powered solution.</h3>
              <p className="mt-2 text-white/70 text-sm">Tell us about your project and we'll get back within 24 hours.</p>
              <div className="mt-6 space-y-2 text-sm">
                <p className="flex items-center gap-2"><Mail size={16} className="text-accent"/> team@vizax.tech</p>
                <p className="flex items-center gap-2"><Phone size={16} className="text-accent"/> +1 (555) 123-4567</p>
              </div>
              <div className="mt-6">
                <Button variant="secondary" href="https://calendly.com/">Book a Call</Button>
              </div>
            </div>

            <form className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-1 gap-4">
              <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
                     type="text" placeholder="Name" aria-label="Name" />
              <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
                     type="email" placeholder="Email" aria-label="Email" />
              <div className="relative">
                <div 
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm cursor-pointer w-full focus:ring-2 focus:ring-accent/40 outline-none pr-10 hover:border-accent/50 transition-colors" 
                  onClick={toggleDropdown}
                >
                  <span className="text-white/80">{selectedCountry || 'Select Country'}</span>
                  <ChevronRight 
                    size={16} 
                    className={`text-white/40 transition-transform ${isOpen ? 'rotate-90' : ''}`} 
                  />
                </div>
                {isOpen && (
                  <ul className="absolute top-full left-0 right-0 mt-1 bg-white/5 border border-white/10 rounded-xl shadow-lg max-h-60 overflow-y-auto z-50 backdrop-blur-sm bg-black/20 ring-1 ring-white/10">
                    {countries.map((country) => (
                      <li key={country.code}>
                        <button
                          type="button"
                          onClick={() => selectCountry(country.code, country.name)}
                          className="w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          {country.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <textarea className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                        placeholder="Tell us about your project" rows={4} aria-label="Message"></textarea>
            <button 
              type="submit" 
              className="mx-auto inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all bg-transparent text-white border border-white/20 hover:border-accent/50 hover:text-accent justify-self-center cursor-pointer"
            >
              Send Message
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => (
  <>
    <Hero />
    <Services />
    <Work />
    <WhyUs />
    <Testimonials />
    <Contact />
  </>
)

export default Home

// Export all components
export {
  Hero,
  Services,
  Work,
  WhyUs,
  Testimonials,
  Contact
}
