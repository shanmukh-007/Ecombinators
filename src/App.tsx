import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import InteractiveLayer from './components/InteractiveLayer'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import BestProduct from './pages/BestProduct'
import About from './pages/About'

export default function App() {
  return (
    <Router>
      <InteractiveLayer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/best-product" element={<BestProduct />} />
        </Routes>
      </Layout>
    </Router>
  )
}
