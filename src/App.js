import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <div className="h-64 bg-slate flex items-center justify-center">
        <p className="text-muted font-body">More sections coming soon...</p>
      </div>
    </div>
  )
}

export default App
