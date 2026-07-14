import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />

      {/* Section 1 — tall enough to test scroll */}
      <div id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl font-bold text-offwhite mb-4">
            Venuka Onadith
          </h1>
          <p className="font-body text-primary text-xl">
            Aspiring Software Engineer
          </p>
        </div>
      </div>

      {/* Section 2 — scroll test */}
      <div className="h-screen bg-slate flex items-center justify-center">
        <p className="text-muted font-body text-lg">
          Scroll test — navbar should be solid here
        </p>
      </div>

    </div>
  )
}

export default App