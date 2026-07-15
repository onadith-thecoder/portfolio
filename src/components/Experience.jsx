import { experience } from '../data/experience'

const TimelineItem = ({ children, isLast = false }) => (
  <div className="relative pl-8">
    {/* VERTICAL LINE */}
    {!isLast && (
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-primary/20" />
    )}
    {/* DOT */}
    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full
                    bg-primary border-2 border-navy" />
    {children}
  </div>
)

const SectionLabel = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-6 mt-2">
    <span className="text-xl">{icon}</span>
    <h3 className="font-heading font-semibold text-offwhite text-lg">
      {title}
    </h3>
  </div>
)

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="font-heading font-bold text-offwhite text-4xl sm:text-5xl">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN — Work + Certifications */}
          <div className="flex flex-col gap-10">

            {/* WORK EXPERIENCE */}
            <div>
              <SectionLabel icon="💼" title="Work Experience" />
              <div className="flex flex-col gap-6">
                {experience.work.map((job, index) => (
                  <TimelineItem
                    key={job.id}
                    isLast={index === experience.work.length - 1}
                  >
                    <div className="bg-slate rounded-xl p-5 border border-primary/10
                                    hover:border-primary/30 transition-all duration-200 mb-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-heading font-semibold text-offwhite text-base">
                          {job.role}
                        </h4>
                        <span className="font-body text-primary text-xs px-2 py-1
                                         bg-primary/10 rounded-full whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                      <p className="font-body text-primary text-sm mb-1">
                        {job.organisation}
                      </p>
                      <p className="font-body text-muted text-xs mb-3">
                        {job.group}
                      </p>
                      <p className="font-body text-muted text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </TimelineItem>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <SectionLabel icon="🏆" title="Certifications" />
              <div className="flex flex-col gap-4">
                {experience.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-slate rounded-xl p-5 border border-primary/10
                               hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="font-heading font-semibold text-offwhite text-sm mb-1">
                          {cert.name}
                        </h4>
                        <p className="font-body text-muted text-xs">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className={`font-body text-xs px-3 py-1 rounded-full
                                       border whitespace-nowrap
                                       ${cert.status === 'Completed'
                                         ? 'bg-primary/20 text-primary border-primary/30'
                                         : 'bg-cyan/20 text-cyan border-cyan/30'
                                       }`}>
                        {cert.status === 'Completed' ? '✓ Completed' : '⟳ In Progress'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — Education */}
          <div>
            <SectionLabel icon="🎓" title="Education" />
            <div className="flex flex-col gap-6">
              {experience.education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  isLast={index === experience.education.length - 1}
                >
                  <div className="bg-slate rounded-xl p-5 border border-primary/10
                                  hover:border-primary/30 transition-all duration-200 mb-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-heading font-semibold text-offwhite text-base">
                        {edu.degree}
                      </h4>
                      <span className={`font-body text-xs px-2 py-1 rounded-full
                                       whitespace-nowrap
                                       ${edu.status === 'In Progress'
                                         ? 'bg-cyan/20 text-cyan'
                                         : 'bg-primary/20 text-primary'
                                       }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="font-body text-primary text-sm mb-1">
                      {edu.institution}
                    </p>
                    {edu.delivery && (
                      <p className="font-body text-muted text-xs mb-2">
                        {edu.delivery}
                      </p>
                    )}
                    <p className="font-body text-muted text-xs">
                      {edu.period}
                    </p>
                    {edu.graduation && (
                      <p className="font-body text-primary/70 text-xs mt-1">
                        {edu.graduation}
                      </p>
                    )}
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
