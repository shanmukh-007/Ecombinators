import { Sparkles, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

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

const Navbar = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container-locked flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="text-accent" />
          <span className="font-bold">Vizax</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link
            to="/"
            className={`hover:text-white transition-colors ${isActive('/') ? 'text-white font-semibold' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-white transition-colors ${isActive('/products') ? 'text-white font-semibold' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`hover:text-white transition-colors ${isActive('/about') ? 'text-white font-semibold' : ''}`}
          >
            About
          </Link>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="hidden md:block">
          <Button href="#contact">Book a Call</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur"
        >
          <nav className="container-locked px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`text-white/80 hover:text-white transition-colors py-2 ${isActive('/') ? 'text-white font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={closeMobileMenu}
              className={`text-white/80 hover:text-white transition-colors py-2 ${isActive('/products') ? 'text-white font-semibold' : ''}`}
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`text-white/80 hover:text-white transition-colors py-2 ${isActive('/about') ? 'text-white font-semibold' : ''}`}
            >
              About
            </Link>
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={closeMobileMenu}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Contact
            </a>
            <div className="pt-2">
              <Button href="#contact">Book a Call</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  )
}

const Footer = () => (
  <footer className="py-10 border-t border-white/10">
    <div className="container-locked px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
      <p>© {new Date().getFullYear()} Vizax. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/products" className="hover:text-white">Products</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </div>
  </footer>
)

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

