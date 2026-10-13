import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'
import Projects from '@/pages/projects'
import AboutMe from '@/pages/about-me'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  )
}

export default App
