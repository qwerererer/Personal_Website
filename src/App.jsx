import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Personal_Website/" element={<Home />} />
        <Route path="/Personal_Website/resume" element={<Resume />} />
        <Route path="/Personal_Website/portfolio" element={<Portfolio />} />
      </Routes>
    </Layout>
  )
}

export default App
