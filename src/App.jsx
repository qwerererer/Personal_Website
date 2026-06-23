import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/personal_-website/" element={<Home />} />
        <Route path="/personal_-website/resume" element={<Resume />} />
        <Route path="/personal_-website/portfolio" element={<Portfolio />} />
      </Routes>
    </Layout>
  )
}

export default App
