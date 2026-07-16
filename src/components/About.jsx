import profilePhoto from '../assets/images/profile-removebg-preview.png'

function About() {

  const facts = [
    {
      icon: '🎓',
      label: 'Education',
      value: 'B.Eng (Hons) Software Engineering',
      sub: 'Canterbury Christ Church University, UK',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Kelaniya, Sri Lanka',
      sub: 'Open to work and collaborations',
    },
    {
      icon: '💼',
      label: 'Experience',
      value: 'Accounts Assistant',
      sub: 'Vonlan Constructions (Pvt) ltd.',
    },
    {
      icon: '🎯',
      label: 'Seeking',
      value: 'Software Engineering Internship',
      sub: 'Fintech · EdTech · SaaS',
    },
    {
      icon: '🎸',
      label: 'Interests',
      value: 'Tech & Guitar Content',
      sub: 'youtube.com/@venukaonadhith6343',
    },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Get To Know Me
          </p>
          <h2 className="font-heading font-bold text-offwhite text-4xl sm:text-5xl">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — PHOTO */}
          <div className="flex justify-center">
            <div className="relative">

              {/* OUTER GLOW RING */}
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl scale-105" />

              {/* PHOTO */}
              <div className="relative w-64 sm:w-80 rounded-2xl overflow-hidden
                              border-2 border-primary/40
                              shadow-2xl shadow-primary/10">
                <img
                  src={profilePhoto}
                  alt="Venuka Onadith — Aspiring Software Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* DECORATIVE BORDER OFFSET */}
              <div className="absolute -bottom-3 -right-3 w-full h-full
                              rounded-2xl border-2 border-primary/20 -z-10" />

            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="flex flex-col gap-8">

            {/* INTRODUCTION */}
            <p className="font-body text-muted text-base sm:text-lg leading-relaxed">
              I'm an aspiring software engineering student who turns ideas into working,
              user-friendly software. I enjoy the full journey from designing clean
              interfaces to writing the logic that makes them work. I'm driven by
              curiosity about how systems communicate and how large-scale software is
              architected — and I believe the best engineers never stop asking why.
            </p>

            {/* KEY FACTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-slate rounded-xl p-4 border border-primary/10
                             hover:border-primary/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl">{fact.icon}</span>
                    <div>
                      <p className="font-body text-primary text-xs uppercase
                                   tracking-wider mb-1">
                        {fact.label}
                      </p>
                      <p className="font-body text-offwhite text-sm font-medium">
                        {fact.value}
                      </p>
                      <p className="font-body text-muted text-xs mt-0.5">
                        {fact.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CLOSING STATEMENT */}
            <p className="font-body text-muted text-sm leading-relaxed
                          border-l-2 border-primary pl-4">
              I'm passionate about open-source software and building tools that
              communities can freely use. After completing my B.Eng, I aspire to
              pursue a Master's degree and continue growing as an engineer who
              builds things that genuinely matter to people.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
