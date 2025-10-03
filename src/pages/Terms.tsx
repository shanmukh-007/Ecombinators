import { motion } from 'framer-motion'

const Terms = () => {
  const fadeIn = (delay = 0) => ({ 
    initial: { opacity: 0, y: 20 }, 
    whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } }, 
    viewport: { once: true } 
  })

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-black py-20">
      <div className="container-locked px-4">
        <motion.div 
          {...fadeIn(0)}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-white/70 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <motion.div 
              {...fadeIn(0.2)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using our conference website services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn(0.4)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">2. Conference Website Services</h2>
              <p>
                We provide comprehensive conference website solutions including:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Complete website development and hosting</li>
                <li>Registration management systems</li>
                <li>Payment processing integration</li>
                <li>Admin panel for content management</li>
                <li>Email automation and notifications</li>
                <li>Brochure download tracking</li>
                <li>Abstract submission management</li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeIn(0.6)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p>
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using our services for any illegal or unauthorized purposes</li>
                <li>Respecting intellectual property rights</li>
              </ul>
            </motion.div>

            <motion.div 
              {...fadeIn(0.8)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p>
                All payments are non-refundable once the service has been initiated. Payment processing is handled through secure payment gateways, and we do not store your payment information on our servers.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn(1.0)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>
                All website designs, content, features, and functionality developed by us remain our intellectual property. Users retain ownership of their conference content and data.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn(1.2)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability is limited to the amount you paid for our services.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn(1.4)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn(1.6)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> vizaxtech@gmail.com</p>
                <p><strong>Phone:</strong> +91 77023 04377</p>
                <p><strong>WhatsApp:</strong> +91 77023 04377</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Terms
