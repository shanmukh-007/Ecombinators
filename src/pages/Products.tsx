import { motion } from 'framer-motion'
import { ArrowRight, Bot, Brain, Zap, Database, LineChart, Shield, Sparkles, CheckCircle } from 'lucide-react'
import React from 'react'

const fadeIn = (delay = 0) => ({ 
  initial: { opacity: 0, y: 10 }, 
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, 
  viewport: { once: true } 
})

interface Product {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  category: string
}

const products: Product[] = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'AI Agent Platform',
    description: 'Deploy intelligent agents that automate complex workflows and make autonomous decisions.',
    features: [
      'Multi-agent orchestration',
      'Natural language processing',
      'Task automation & scheduling',
      'Real-time decision making'
    ],
    category: 'Automation'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Custom LLM Solutions',
    description: 'Fine-tuned language models tailored to your specific business needs and domain.',
    features: [
      'Domain-specific training',
      'Prompt engineering',
      'Model fine-tuning',
      'API integration'
    ],
    category: 'AI/ML'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'RAG Knowledge Systems',
    description: 'Retrieval-Augmented Generation systems that provide accurate, context-aware responses.',
    features: [
      'Vector database integration',
      'Semantic search',
      'Document processing',
      'Real-time updates'
    ],
    category: 'Data'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Process Automation Suite',
    description: 'End-to-end automation solutions that streamline operations and reduce manual work.',
    features: [
      'Workflow automation',
      'Integration with existing tools',
      'Custom rule engines',
      'Performance monitoring'
    ],
    category: 'Automation'
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Predictive Analytics',
    description: 'AI-powered analytics that forecast trends and provide actionable business insights.',
    features: [
      'Predictive modeling',
      'Data visualization',
      'Anomaly detection',
      'Custom dashboards'
    ],
    category: 'Analytics'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'AI Security & Compliance',
    description: 'Ensure your AI systems are secure, compliant, and aligned with industry standards.',
    features: [
      'Security audits',
      'Compliance monitoring',
      'Data privacy protection',
      'Risk assessment'
    ],
    category: 'Security'
  }
]

const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => (
  <motion.div
    {...fadeIn(index * 0.1)}
    whileHover={{ scale: 1.02, y: -4 }}
    className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 hover:ring-accent/40 transition-all"
  >
    <div className="flex items-start gap-4">
      <div className="text-accent p-3 bg-accent/10 rounded-xl">
        {product.icon}
      </div>
      <div className="flex-1">
        <span className="text-xs text-accent/80 font-semibold uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="mt-1 text-xl font-bold">{product.title}</h3>
      </div>
    </div>
    
    <p className="mt-4 text-white/70 text-sm leading-relaxed">
      {product.description}
    </p>
    
    <div className="mt-6 space-y-2">
      {product.features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
          <CheckCircle size={16} className="text-accent flex-shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <button className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
      Learn More <ArrowRight size={16} />
    </button>
  </motion.div>
)

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 hero-pattern" />
        <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-16 w-80 h-80 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="relative container-locked px-4">
          <motion.div {...fadeIn(0)} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="animated-gradient gradient-text">
                Powerful AI Products for Modern Businesses
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover our suite of AI-powered solutions designed to transform your operations, 
              enhance decision-making, and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container-locked px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-locked px-4 py-16 md:py-24">
        <motion.div
          {...fadeIn(0.2)}
          className="card rounded-2xl p-8 md:p-12 ring-1 ring-white/10 bg-gradient-to-br from-accent/10 to-violet-500/10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-400 text-white rounded-xl px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 rounded-xl px-6 py-3 font-semibold hover:border-accent/50 hover:text-accent transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Products

