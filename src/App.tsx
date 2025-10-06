import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InteractiveLayer from './components/InteractiveLayer'
import Layout from './components/Layout'
import BestProduct from './pages/BestProduct'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <Router>
      <InteractiveLayer />
      <Layout>
        <Routes>
          <Route path="/" element={<BestProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  )
}
