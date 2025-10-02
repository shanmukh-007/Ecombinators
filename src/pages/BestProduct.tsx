import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Mail, CreditCard, Globe, Clock, Settings, Zap, Database, X } from 'lucide-react'
import React, { useState } from 'react'

// Animation helper
const fadeIn = (delay = 0) => ({ 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, 
  viewport: { once: true } 
})

// Button component
const Button: React.FC<{ variant?: 'primary' | 'secondary', href?: string, children: React.ReactNode, className?: string, target?: string, rel?: string }>
  = ({ variant = 'primary', href = '#contact', children, className: extraClass = '', target, rel }) => {
  const classes = variant === 'primary'
    ? 'bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-400 text-white shadow-md hover:shadow-lg'
    : 'bg-transparent text-white border border-white/20 hover:border-accent/50 hover:text-accent'
  const base = `inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${extraClass}`
  const MotionLink = motion.a
  return (
    <MotionLink 
      whileHover={{ scale: 1.03, y: -1 }} 
      whileTap={{ scale: 0.98 }} 
      className={base} 
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </MotionLink>
  )
}

// Section Title
const SectionTitle: React.FC<{ kicker?: string, title: string, subtitle?: string }> = ({ kicker, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto">
    {kicker && (<p className="text-accent/90 font-semibold tracking-wide mb-2">{kicker}</p>)}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{title}</h2>
    {subtitle && (<p className="text-white/70">{subtitle}</p>)}
  </div>
)

// Hero Section
const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-black to-slate-900">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
    <div className="relative container-locked px-4">
      <motion.div {...fadeIn(0)} className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="text-white">Conference Website</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 block">Provider</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Complete A to Z Tech Support for Entire Conference Organizations
        </p>
        <div className="flex flex-col items-center gap-2 mb-8 text-center">
          <a href="https://www.law.ox.ac.uk/content/event/2nd-international-conference-nursing-education-and-healthcare" target="_blank" rel="noreferrer" className="block w-64 h-48 rounded-xl overflow-hidden transition-all">
            <img src="/images/best-product/oxford-logo.png" alt="University of Oxford Logo" className="w-full h-full object-contain p-2" />
          </a>
          <span className="text-accent/90 font-semibold">Trusted by University of Oxford and leading institutions</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" href="https://nursingeducationconferences.org" target="_blank" rel="noreferrer">
            View Live Example <ArrowRight size={18} />
          </Button>
          <a href="https://nursingeducationconferences.org" target="_blank" rel="noreferrer" className="block w-32 h-12 sm:w-40 sm:h-14 rounded-xl overflow-hidden ring-1 ring-white/20 hover:ring-accent/40 transition-all">
            <img src="/images/best-product/intelli-logo.webp" alt="Intelli Logo" className="w-full h-full object-contain p-2" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

// Feature Card
const FeatureCard: React.FC<{
  icon: React.ReactNode,
  title: string,
  description: string,
  image?: string,
  delay: number,
  onImageClick?: (image: string) => void
}> = ({ icon, title, description, image, delay, onImageClick }) => (
  <motion.div
    {...fadeIn(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-col gap-6 group"
  >
    {image && (
      <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm group-hover:ring-accent/30 transition-all cursor-pointer" onClick={() => onImageClick?.(image)}>
        <img
          src={image}
          alt={title}
          className="w-full h-80 md:h-96 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    )}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-accent/10 text-accent">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/80 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
    {!image && (
      <div className="flex justify-center">
        <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-accent/10 to-violet-500/10 flex items-center justify-center">
          <Settings size={48} className="text-accent/50" />
        </div>
      </div>
    )}
  </motion.div>
)

// Features Section
const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const openModal = (image: string) => {
    setCurrentImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImage('')
  }

  return (
    <>
      <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-black">
        <div className="container-locked px-4">
          <SectionTitle
            kicker="Our Capabilities"
            title="Key Features"
            subtitle="Professional, automated, and scalable web solutions for conferences"
          />
          
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <FeatureCard
              icon={<Shield size={24} />}
              title="Admin Panel"
              description="A powerful dashboard to manage and control the entire website content with ease. Full control over registrations, speakers, schedules, and content updates."
              image="/images/best-product/Admin-Pannel.png"
              delay={0.2}
              onImageClick={openModal}
            />

            <FeatureCard
              icon={<Database size={24} />}
              title="Registration Table Management"
              description="Comprehensive table management for viewing and editing participant registrations, payment details, and attendee information directly from the admin dashboard."
              image="/images/best-product/Registration-Management.png"
              delay={0.3}
              onImageClick={openModal}
            />

            <FeatureCard
              icon={<Database size={24} />}
              title="Brochure Downloaders Table Management"
              description="Track and manage brochure downloads with detailed logs including user emails, download dates, and IP addresses for marketing insights."
              image="/images/best-product/Brochure-Downloaders.png"
              delay={0.5}
              onImageClick={openModal}
            />

            <FeatureCard
              icon={<Database size={24} />}
              title="Abstract Submissions Table Management"
              description="Efficient management of abstract submissions, including review status, author details, and submission metadata to streamline the review process."
              image="/images/best-product/Abstract-Submissions.png"
              delay={0.7}
              onImageClick={openModal}
            />
            
            <FeatureCard
              icon={<Mail size={24} />}
              title="Built-in Automation"
              description="Once a payment is successfully received, the system automatically sends a custom email with a PDF receipt to the customer. Streamlined workflows with zero manual intervention."
              image="/images/best-product/Custom-Mail-With-PDF-Attachement.png"
              delay={0.9}
              onImageClick={openModal}
            />
            
            <FeatureCard
              icon={<CreditCard size={24} />}
              title="Seamless Payment Integration"
              description="Fully integrated with PayPal for secure transactions. Handle payments effortlessly with built-in support for multiple payment gateways and fraud protection."
              image="/images/best-product/Buit-In-Paypal-Integration.png"
              delay={1.1}
              onImageClick={openModal}
            />
            
            <FeatureCard
              icon={<Globe size={24} />}
              title="Dynamic Currency Converter"
              description="Built-in dynamic currency converter that automatically adjusts pricing based on user location. Support multiple currencies with real-time exchange rates."
              image="/images/best-product/Built-in-Dynamic-Currency-Convereter.png"
              delay={1.3}
              onImageClick={openModal}
            />
            
            <FeatureCard
              icon={<Clock size={24} />}
              title="Time-Based Registration Periods"
              description="Configure multiple registration phases with different pricing tiers. Early bird, regular, and on-spot registration with automated period management."
              image="/images/best-product/Dynamic-Time-Based-Registration-Periods.png"
              delay={1.5}
              onImageClick={openModal}
            />
            
            <FeatureCard
              icon={<Zap size={24} />}
              title="Custom Features on Demand"
              description="Extra functionalities tailored specifically to meet unique client requirements. From custom APIs to specialized modules, we build exactly what you need."
              delay={1.7}
            />
          </div>
        </div>
      </section>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// CTA Section
const CTA = () => (
  <section className="py-16 md:py-20 bg-gradient-to-r from-accent to-violet-500/20">
    <div className="container-locked px-4 text-center">
      <motion.div {...fadeIn(0)} className="max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Power Your Next Conference?</h3>
        <p className="text-white/90 mb-8">Deliver professional, automated, and scalable web solutions for universities, conferences, and organizations worldwide.</p>
        <Button variant="primary" href="#contact" className="text-lg px-8 py-4">
          Get Started Today
        </Button>
      </motion.div>
    </div>
  </section>
)

const BestProduct = () => (
  <>
    <Hero />
    <Features />
    <CTA />
  </>
)

export default BestProduct
