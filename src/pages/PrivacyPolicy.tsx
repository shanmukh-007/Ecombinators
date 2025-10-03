import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-black py-20">
      <div className="container-locked px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/70 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect different types of information to provide and improve our service to you.
              </p>
              <h3 className="text-xl font-semibold text-white mt-4 mb-3">Types of Data Collected:</h3>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, organization details</li>
                <li><strong>Registration Data:</strong> Conference registration details, payment information</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on our services</li>
                <li><strong>Tracking & Cookies Data:</strong> Information collected through cookies and similar technologies</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To process conference registrations and payments</li>
                <li>To send important notifications and updates</li>
                <li>To communicate with you regarding your conference</li>
                <li>To provide customer support and assistance</li>
                <li>To monitor the usage of our services</li>
                <li>To gather analysis valuable to improve our services</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>With payment processors to handle conference fees</li>
                <li>With third-party service providers who provide services on our behalf</li>
                <li>When required by law or to protect our rights</li>
                <li>With conference organizers who use our platform</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                The security of your data is important to us. We use commercially reasonable administrative, technical, and physical measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure data storage practices</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Privacy Rights</h2>
              <p>
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing and promotional communications</li>
                <li>Request correction of inaccurate personal data</li>
                <li>Data portability - receive your data in a structured format</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand how you use our services.
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Preference cookies to remember your settings</li>
                <li>You can control cookie preferences through your browser settings</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> vizaxtech@gmail.com</p>
                <p><strong>Phone:</strong> +91 77023 04377</p>
                <p><strong>WhatsApp:</strong> +91 77023 04377</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
