import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />

      {/* Temporary scroll test section */}
      <div className="h-screen bg-slate flex items-center justify-center">
        <p className="text-muted font-body text-lg">
          More sections coming soon...
        </p>
      </div>
    </div>
  )
}

export default App
