import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling to top, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    const throttledHandleScroll = throttle(handleScroll, 16) // ~60fps
    window.addEventListener('scroll', throttledHandleScroll)
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [lastScrollY])

  // Simple throttle function
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    closeMobileMenu()
    
    // Navigate to home page and scroll to contact
    window.location.href = '/#contact'
  }

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
    <motion.div
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10"
    >
      <div className="container-locked flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-white">vizax</span>
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
            to="/about"
            className={`hover:text-white transition-colors ${isActive('/about') ? 'text-white font-semibold' : ''}`}
          >
            About
          </Link>
          <Link to="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link to="/" className="hover:text-white transition-colors" onClick={handleContactClick}>Contact</Link>
          <Link
            to="/terms"
            className={`hover:text-white transition-colors ${isActive('/terms') ? 'text-white font-semibold' : ''}`}
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className={`hover:text-white transition-colors ${isActive('/privacy') ? 'text-white font-semibold' : ''}`}
          >
            Privacy Policy
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button variant="secondary" href="#contact">Book a Call</Button>
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
              to="/about"
              onClick={closeMobileMenu}
              className={`text-white/80 hover:text-white transition-colors py-2 ${isActive('/about') ? 'text-white font-semibold' : ''}`}
            >
              About
            </Link>
            <Link
              to="/#features"
              onClick={closeMobileMenu}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Features
            </Link>
            <Link
              to="/"
              onClick={(e) => {
                closeMobileMenu()
                handleContactClick(e)
              }}
              className="text-white/80 hover:text-white transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              to="/terms"
              onClick={closeMobileMenu}
              className={`text-white/80 hover:text-white transition-colors py-2 ${isActive('/terms') ? 'text-white font-semibold' : ''}`}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              onClick={closeMobileMenu}
              className={`text-white/80 hover:text-white transition-colors py-2 ${isActive('/privacy') ? 'text-white font-semibold' : ''}`}
            >
              Privacy Policy
            </Link>
            <div className="pt-2">
              <Button variant="secondary" href="#contact">Book a Call</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.div>
  )
}

const Footer = ({ handleContactClick }: { handleContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
  <footer className="py-10 border-t border-white/10 mt-auto">
    <div className="container-locked px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
      <p>© {new Date().getFullYear()} Vizax. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/#features" className="hover:text-white">Features</Link>
        <Link to="/" className="hover:text-white" onClick={handleContactClick}>Contact</Link>
        <Link to="/terms" className="hover:text-white">Terms</Link>
        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
        <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:border-accent/50 hover:text-accent" onClick={handleContactClick}>
          Book a Call
        </a>
      </div>
    </div>
  </footer>
)

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = '/'
      return
    }
    
    // If already on home page, scroll to contact
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Small delay to ensure page navigation completes
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer handleContactClick={handleContactClick} />
    </div>
  )
}

export default Layout
