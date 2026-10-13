import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'
import Projects from '@/pages/projects'
import Brainy from '@/pages/brainy'
import Rin from '@/pages/rin'
import AboutMe from '@/pages/about-me'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/brainy" element={<Brainy />} />
      <Route path="/projects/rin" element={<Rin />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  )
}

export default App
