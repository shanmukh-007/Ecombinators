import { motion } from 'framer-motion'
import { ArrowRight, Shield, Mail, CreditCard, Globe, Clock, Settings, Database, X, Phone, MapPin } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Animation helper
const fadeIn = (delay = 0) => ({ 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, 
  viewport: { once: true } 
})


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
  <section className="relative overflow-hidden py-12 md:py-28 bg-[url('/images/best-product/oxford-building.webp')] bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
    <div className="relative container-locked px-4 flex flex-col justify-center items-center">
      <motion.div {...fadeIn(0)} className="text-center max-w-4xl mx-auto w-full px-4">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight mb-2 md:mb-6">
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Conference Website</span>
          <span className="text-white block drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Provider</span>
        </h1>
        <p className="text-sm sm:text-base md:text-2xl text-white/80 mb-3 md:mb-8 max-w-3xl mx-auto">
          Complete A to Z Tech Support for Entire Conference Organizations
        </p>
        <div className="flex flex-col items-center gap-1 mb-3 md:mb-8 text-center">
          <a href="https://www.law.ox.ac.uk/content/event/2nd-international-conference-nursing-education-and-healthcare" target="_blank" rel="noreferrer" className="block w-40 h-30 sm:w-64 sm:h-48 rounded-xl overflow-hidden transition-all">
            <img src="/images/best-product/oxford-logo.png" alt="University of Oxford Logo" className="w-full h-full object-contain p-2" />
          </a>
          <span className="text-accent/90 font-semibold text-xs sm:text-base">Trusted by University of Oxford and leading institutions</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center">
          <a href="https://nursingeducationconferences.org" target="_blank" rel="noreferrer" className="text-xs sm:text-sm md:text-base text-white hover:text-accent transition-colors flex items-center gap-1">
            View Live Example <ArrowRight size={14} className="sm:size-16 md:size-18" />
          </a>
          <a href="https://nursingeducationconferences.org" target="_blank" rel="noreferrer" className="block w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 rounded-xl overflow-hidden ring-1 ring-white/20 hover:ring-accent/40 transition-all">
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
              description="Track and manage brochure downloads with detailed logs including user emails and download dates for marketing insights."
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
  <section id="contact" className="py-16 md:py-20 bg-[#070707]">
    <div className="container-locked px-4 text-center">
      <motion.div {...fadeIn(0)} className="max-w-2xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Get In Touch</h3>
        <p className="text-white/90">We're here to help you create the perfect conference website. Contact us for custom solutions tailored to your event.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
          {/* WhatsApp */}
          <a href="https://wa.me/917702304377" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all group">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white flex-shrink-0 group-hover:scale-110 transition-transform">
              <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" fill="#FFFFFF"/>
            </svg>
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold break-all">+91 77023 04377</div>
              <div className="text-white/70 text-sm">WhatsApp</div>
            </div>
          </a>
          
          {/* Email */}
          <a href="mailto:vizaxtech@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all group">
            <Mail size={24} className="text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold break-all">vizaxtech@gmail.com</div>
              <div className="text-white/70 text-sm">Email</div>
            </div>
          </a>
          
          {/* Location */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <MapPin size={24} className="text-white flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold">Visakhapatnam (Vizag)</div>
              <div className="text-white/70 text-sm">Location</div>
            </div>
          </div>
          
          {/* Phone Call */}
          <a href="tel:+917702304377" className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all group">
            <Phone size={24} className="text-white flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold break-all">+91 77023 04377</div>
              <div className="text-white/70 text-sm">Call</div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

const BestProduct = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#features') {
      const element = document.getElementById('features')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (location.hash === '#contact') {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  )
}

export default BestProduct
