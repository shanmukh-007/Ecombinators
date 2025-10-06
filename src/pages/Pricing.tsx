import { motion } from 'framer-motion'
import { Check, ArrowRight, Shield, Database, Mail, CreditCard, Globe, Clock, Settings, Sparkles, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const fadeIn = (delay = 0) => ({ 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, 
  viewport: { once: true } 
})

const SectionTitle: React.FC<{ kicker?: string, title: string, subtitle?: string }> = ({ kicker, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto">
    {kicker && (<p className="text-accent/90 font-semibold tracking-wide mb-2">{kicker}</p>)}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{title}</h2>
    {subtitle && (<p className="text-white/70">{subtitle}</p>)}
  </div>
)

// Image Modal Component
const ImageModal: React.FC<{ isOpen: boolean, imageSrc: string, onClose: () => void }> = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-7xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>
        <img src={imageSrc} alt="Preview" className="w-full h-auto rounded-lg shadow-2xl" />
      </motion.div>
    </div>
  )
}

const Pricing: React.FC = () => {
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

  const features = [
    'Independent Admin Panel for Each Website',
    'Complete Content Management System',
    'Registration & Payment Processing',
    'Abstract Submission Management',
    'Brochure Download Tracking',
    'Automated Email Notifications with PDF Receipts',
    'PayPal Payment Integration',
    'Dynamic Currency Converter',
    'Time-Based Registration Periods',
    'Responsive Mobile-Friendly Design',
    'SSL Security Certificate',
    'Regular Updates & Bug Fixes'
  ]

  const adminFeatures = [
    { icon: <Shield size={20} />, title: 'Admin Dashboard', image: '/images/pricing/admin-panel.png' },
    { icon: <Database size={20} />, title: 'Registration Management', image: '/images/pricing/registration-management.png' },
    { icon: <Database size={20} />, title: 'Abstract Submissions', image: '/images/pricing/abstract-submissions.png' },
    { icon: <Database size={20} />, title: 'Brochure Downloads', image: '/images/pricing/brochure-downloaders.png' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-28 bg-[url('/images/best-product/oxford-building.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative container-locked px-4 flex flex-col justify-center items-center">
          <motion.div {...fadeIn(0)} className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Professional Conference Management
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-xl text-white mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              Everything you need to run successful conferences with professional websites and powerful admin tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Examples Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container-locked px-4">
          <SectionTitle
            kicker="Live Examples"
            title="See What You Get"
            subtitle="Professional conference websites with full admin control"
          />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Main Website */}
            <motion.div {...fadeIn(0.2)} className="group">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/20 bg-transparent backdrop-blur-sm hover:ring-white/40 transition-all">
                <a
                  href="https://intelliglobalconferences.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img
                    src="/images/pricing/main-website.png"
                    alt="Main Conference Website"
                    className="w-full h-auto cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal('/images/pricing/main-website.png')
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Visit Live Website <ArrowRight size={20} />
                    </span>
                  </div>
                </a>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Main Conference Website</h3>
                <p className="text-white mb-4">Full-featured conference management platform</p>
                <a
                  href="https://intelliglobalconferences.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  intelliglobalconferences.com <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Secondary Website */}
            <motion.div {...fadeIn(0.4)} className="group">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/20 bg-transparent backdrop-blur-sm hover:ring-white/40 transition-all">
                <a
                  href="https://nursingeducationconferences.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img
                    src="/images/pricing/secondary-website.png"
                    alt="Secondary Conference Website"
                    className="w-full h-auto cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal('/images/pricing/secondary-website.png')
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Visit Live Website <ArrowRight size={20} />
                    </span>
                  </div>
                </a>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Secondary Conference Website</h3>
                <p className="text-white mb-4">Specialized conference site with independent admin</p>
                <a
                  href="https://nursingeducationconferences.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  nursingeducationconferences.org <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-locked px-4">
          <motion.div {...fadeIn(0.2)} className="max-w-4xl mx-auto">
            {/* Setup Fee Badge - Outside the card */}
            <div className="flex justify-center mb-4">
              <div className="bg-white text-black px-8 py-3 rounded-full font-extrabold text-xl md:text-2xl shadow-2xl border-4 border-black">
                🎉 $0 Setup Fee - <span className="text-green-500">FREE!</span>
              </div>
            </div>

            {/* Main Pricing Card */}
            <div className="relative rounded-3xl overflow-hidden">

              <div className="relative bg-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">

                <div className="mt-8 text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Conference Website Package</h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl md:text-7xl font-black text-white">$350</span>
                    <span className="text-2xl text-white">/month</span>
                  </div>
                  <p className="text-green-500 text-sm md:text-base italic mb-6 font-semibold">
                    Price and Plans are negotiable
                  </p>
                  <p className="text-xl text-white max-w-2xl mx-auto">
                    Complete maintenance and support for your conference management platform
                  </p>
                </div>

                {/* Package Details */}
                <div className="bg-transparent rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                    <Settings className="text-white" size={28} />
                    Combo Package Includes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 rounded-full bg-transparent border border-white">
                        <Check size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">1 Main Website</p>
                        <p className="text-sm text-white">Full-featured conference platform</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1 rounded-full bg-transparent border border-white">
                        <Check size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">5 Secondary Websites</p>
                        <p className="text-sm text-white">For different conferences/events</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-6 text-center text-white">Everything Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        {...fadeIn(0.1 * index)}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 p-1 rounded-full bg-transparent border border-white flex-shrink-0">
                          <Check size={16} className="text-white" />
                        </div>
                        <span className="text-white">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">Get Started Today</h3>
                  <p className="text-white/80 text-lg mb-6">
                    <a
                      href="/#contact"
                      className="text-accent hover:text-accent/80 transition-colors underline"
                    >
                      Contact us
                    </a>
                    {' '}for custom requirements and pricing
                  </p>
                  <p className="text-white/70 text-sm italic mb-8">
                    Note: Pricing varies based on the number of websites required and custom features requested.
                    <a
                      href="/#contact"
                      className="text-accent hover:text-accent/80 transition-colors ml-1"
                    >
                      Contact us
                    </a>
                    {' '}for a personalized quote.
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-black transition-all"
                  >
                    Contact Now <ArrowRight size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Note */}
            <motion.div {...fadeIn(0.6)} className="mt-8 text-center">
              <div className="inline-block bg-transparent border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-white">
                  <span className="font-semibold text-white">Note:</span> Pricing varies based on the number of websites required and custom features requested.
                  <Link to="/" className="text-white hover:text-white/80 ml-1 underline">Contact us</Link> for a personalized quote.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admin Panel Features Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-locked px-4">
          <SectionTitle
            kicker="Powerful Management"
            title="Independent Admin Panels"
            subtitle="Each website comes with its own comprehensive admin dashboard for complete control"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {adminFeatures.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeIn(0.2 * index)}
                className="group cursor-pointer"
                onClick={() => openModal(feature.image)}
              >
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/20 bg-transparent backdrop-blur-sm hover:ring-white/40 transition-all">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-transparent border border-white text-white">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container-locked px-4">
          <motion.div {...fadeIn(0.2)} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
              Ready to Elevate Your Conference Experience?
            </h2>
            <p className="text-lg md:text-xl text-white mb-10">
              Join leading organizations worldwide who trust Vizax for their conference management needs
            </p>
            <div className="flex justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-black transition-all"
              >
                Contact Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal isOpen={isModalOpen} imageSrc={currentImage} onClose={closeModal} />
    </div>
  )
}

export default Pricing

