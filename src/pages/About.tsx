import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Award, TrendingUp, Globe, Heart } from 'lucide-react'
import React from 'react'

const fadeIn = (delay = 0) => ({ 
  initial: { opacity: 0, y: 10 }, 
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, 
  viewport: { once: true } 
})

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
}

const values: Value[] = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation First',
    description: 'We push the boundaries of AI technology to deliver cutting-edge solutions that drive real business value.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client-Centric',
    description: 'Your success is our success. We work closely with you to understand your needs and deliver tailored solutions.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Impact',
    description: 'We build solutions that scale globally while maintaining local relevance and cultural sensitivity.'
  }
]

const stats = [
  { value: '50+', label: 'AI Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '15+', label: 'Industry Verticals' }
]

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer',
    bio: 'PhD in Machine Learning from MIT. 15+ years building AI systems at scale.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering',
    bio: 'Former Tech Lead at Google. Expert in distributed systems and AI infrastructure.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Aisha Patel',
    role: 'Director of AI Research',
    bio: 'Published researcher in NLP and computer vision. Stanford AI Lab alumna.',
    avatar: 'https://i.pravatar.cc/150?img=9'
  },
  {
    name: 'James Wilson',
    role: 'VP of Product',
    bio: 'Product leader with 10+ years in AI/ML products. Ex-Amazon, Microsoft.',
    avatar: 'https://i.pravatar.cc/150?img=13'
  }
]

const About: React.FC = () => {
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
              <Heart size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">About Vizax</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="animated-gradient gradient-text">
                Building the Future of AI-Powered Business
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              We're a team of AI experts, engineers, and innovators dedicated to transforming 
              businesses through intelligent automation and cutting-edge AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-locked px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn(0)}>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-extrabold">Our Mission</h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              At Vizax, we believe that AI should be accessible, practical, and transformative. 
              Our mission is to democratize AI technology and help businesses of all sizes harness 
              its power to solve real-world problems.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              We combine deep technical expertise with a pragmatic approach to deliver AI solutions 
              that are not just innovative, but also reliable, scalable, and aligned with your 
              business objectives.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn(0.2)} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container-locked px-4 py-16 md:py-24">
        <motion.div {...fadeIn(0)} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Values</h2>
          <p className="text-white/70 text-lg">
            The principles that guide everything we do
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              {...fadeIn(index * 0.1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:ring-accent/40 transition-all"
            >
              <div className="text-accent p-3 bg-accent/10 rounded-xl inline-block mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container-locked px-4 py-16 md:py-24">
        <motion.div {...fadeIn(0)} className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-accent w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Meet Our Team</h2>
          </div>
          <p className="text-white/70 text-lg">
            World-class AI experts and engineers driving innovation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              {...fadeIn(index * 0.1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card rounded-2xl p-6 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:ring-accent/40 transition-all text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-accent/20"
              />
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-locked px-4 py-16 md:py-24">
        <motion.div
          {...fadeIn(0.2)}
          className="card rounded-2xl p-8 md:p-12 ring-1 ring-white/10 bg-gradient-to-br from-accent/10 to-violet-500/10 text-center"
        >
          <TrendingUp className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Whether you're looking to transform your business with AI or join our team of innovators, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-400 text-white rounded-xl px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 rounded-xl px-6 py-3 font-semibold hover:border-accent/50 hover:text-accent transition-colors"
            >
              View Careers
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About

