import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Research from './components/Research'

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />

      {/* Temporary placeholder */}
      <div className="h-64 bg-slate flex items-center justify-center">
        <p className="text-muted font-body">Contact & Footer coming soon...</p>
      </div>
    </div>
  )
}

export default App
