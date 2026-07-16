import { useState, useEffect } from 'react'

// Moved outside component — this never changes
// so it doesn't need to be inside the function
const titles = [
  'Aspiring Full-stack Software Engineer',
  'UI/UX Neophyte',
  'Open Source Enthusiast',
  'Problem Solver',
]

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === titles.length - 1 ? 0 : prev + 1
        )
        setVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, []) // No warning now — titles is defined outside

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      {/* MAIN CONTENT */}
      <div className="text-center max-w-4xl mx-auto">

        {/* GREETING */}
        <p className="font-body text-muted text-lg mb-4 tracking-widest uppercase">
          Hi, I'm
        </p>

        {/* NAME */}
        <h1 className="font-heading font-bold text-offwhite leading-tight mb-6
                       text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Venuka Onadith
        </h1>

        {/* ANIMATED TITLE */}
        <div className="h-10 mb-8 flex items-center justify-center">
          <h2
            className={`font-heading font-medium text-primary text-xl sm:text-2xl
                        transition-opacity duration-500
                        ${visible ? 'opacity-100' : 'opacity-0'}`}
          >
            {titles[currentIndex]}
          </h2>
        </div>

        {/* INTRODUCTION */}
        <p className="font-body text-muted text-base sm:text-lg leading-relaxed
                      max-w-2xl mx-auto mb-12">
          I'm an aspiring software engineering student who turns ideas into working,
          user-friendly software. I enjoy the full journey from designing clean interfaces
          to writing the logic that makes them work. I'm driven by curiosity about how
          systems communicate and how large-scale software is architected; and I believe
          the best engineers never stop asking why.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#projects"
            className="font-body font-medium px-8 py-4 rounded-lg
                       bg-primary text-navy
                       hover:bg-primary/90 transition-all duration-200
                       w-full sm:w-auto text-center"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="font-body font-medium px-8 py-4 rounded-lg
                       border border-primary text-primary
                       hover:bg-primary/10 transition-all duration-200
                       w-full sm:w-auto text-center"
          >
            Get In Touch
          </a>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-muted text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>

    </section>
  )
}

export default Hero
