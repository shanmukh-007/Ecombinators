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
          <span className="animated-gradient gradient-text">Transform Your Business with Intelligent AI Solutions</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          From custom AI agents to enterprise automation, we deliver cutting-edge AI solutions that drive real business value.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#contact">Book a Call <ArrowRight size={18} /></Button>
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

// CONTACT
const Contact = () => (
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
              <Button href="https://calendly.com/">Book a Call</Button>
            </div>
          </div>

          <form className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-1 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
                   type="text" placeholder="Name" aria-label="Name" />
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
                   type="email" placeholder="Email" aria-label="Email" />
            <textarea className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40 min-h-[120px]"
                      placeholder="Project Idea" aria-label="Project Idea" />
            <button type="button" className="bg-accent text-black rounded-xl px-5 py-3 text-sm font-semibold hover:opacity-90">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home

