function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Academic Work
          </p>
          <h2 className="font-heading font-bold text-offwhite text-4xl sm:text-5xl">
            Research
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* FEATURED RESEARCH CARD */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate rounded-2xl p-8 border border-primary/20
                          hover:border-primary/40 transition-all duration-300
                          relative overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-64 h-64
                            bg-primary/5 rounded-full blur-3xl -z-0" />

            <div className="relative z-10">

              {/* TOP ROW — badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-body text-xs font-medium px-3 py-1
                                 rounded-full bg-primary/20 text-primary
                                 border border-primary/30">
                  🏆 Symposium Presenter
                </span>
                <span className="font-body text-xs font-medium px-3 py-1
                                 rounded-full bg-cyan/20 text-cyan
                                 border border-cyan/30">
                  HND Final Phase Research
                </span>
                <span className="font-body text-xs font-medium px-3 py-1
                                 rounded-full bg-navy text-muted
                                 border border-muted/20">
                  Under Panel Review
                </span>
              </div>

              {/* PAPER TITLE */}
              <h3 className="font-heading font-bold text-offwhite text-xl
                             sm:text-2xl leading-snug mb-6">
                How AI-Integrated Real-Time Progress Tracking and
                Suggestion-Making Tools Drive Efficiency and Risk
                Management in the Sri Lankan Construction Industry
              </h3>

              {/* DIVIDER */}
              <div className="w-full h-px bg-primary/10 mb-6" />

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

                <div>
                  <p className="font-body text-primary text-xs uppercase
                               tracking-wider mb-2">
                    Organisation
                  </p>
                  <p className="font-body text-offwhite text-sm font-medium">
                    Vonlan Constructions (Pvt) Ltd.
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">
                    Sanken Group of Companies
                  </p>
                </div>

                <div>
                  <p className="font-body text-primary text-xs uppercase
                               tracking-wider mb-2">
                    Presentation
                  </p>
                  <p className="font-body text-offwhite text-sm font-medium">
                    Saegis Undergraduate Research Symposium
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">
                    August 2026
                  </p>
                </div>

                <div>
                  <p className="font-body text-primary text-xs uppercase
                               tracking-wider mb-2">
                    Research Type
                  </p>
                  <p className="font-body text-offwhite text-sm font-medium">
                    Mixed-Methods Analytical Research
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">
                    Quantitative + Qualitative Analysis
                  </p>
                </div>

                <div>
                  <p className="font-body text-primary text-xs uppercase
                               tracking-wider mb-2">
                    Domain
                  </p>
                  <p className="font-body text-offwhite text-sm font-medium">
                    Artificial Intelligence · Construction Tech
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">
                    Sri Lanka Industry Focus
                  </p>
                </div>

              </div>

              {/* RESEARCH SUMMARY */}
              <div className="bg-navy rounded-xl p-5 border border-primary/10">
                <p className="font-body text-primary text-xs uppercase
                             tracking-wider mb-3">
                  Research Summary
                </p>
                <p className="font-body text-muted text-sm leading-relaxed">
                  This research investigates how AI-powered real-time tracking
                  and intelligent suggestion systems can address inefficiencies
                  in Sri Lanka's construction sector. Grounded in real operational
                  data from Vonlan Constructions, the study analyses how earned
                  value management frameworks combined with AI tooling can improve
                  project delivery timelines and reduce risk exposure across
                  active construction projects.
                </p>
              </div>

              {/* HONEST NOTE */}
              <p className="font-body text-muted/60 text-xs mt-4 italic">
                Note: This is an analytical research paper — it demonstrates
                research methodology, domain knowledge, and professional writing,
                not software development.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Research
