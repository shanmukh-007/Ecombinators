import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InteractiveLayer from './components/InteractiveLayer'
import Layout from './components/Layout'
import BestProduct from './pages/BestProduct'
import About from './pages/About'

export default function App() {
  return (
    <Router>
      <InteractiveLayer />
      <Layout>
        <Routes>
          <Route path="/" element={<BestProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}
