import { projects } from '../data/projects'

const StatusBadge = ({ status }) => {
  const styles = {
    'completed': 'bg-primary/20 text-primary border-primary/30',
    'in-development': 'bg-cyan/20 text-cyan border-cyan/30',
    'planned': 'bg-muted/20 text-muted border-muted/30',
  }

  const labels = {
    'completed': '✓ Completed',
    'in-development': '⟳ In Development',
    'planned': '◷ Planned',
  }

  return (
    <span className={`text-xs font-body font-medium px-3 py-1 
                      rounded-full border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

const ProjectCard = ({ project }) => (
  <div className="bg-slate rounded-2xl p-6 border border-primary/10
                  hover:border-primary/30 transition-all duration-300
                  flex flex-col gap-5 group">

    {/* TOP ROW — type + status */}
    <div className="flex items-center justify-between flex-wrap gap-2">
      <span className="font-body text-muted text-xs uppercase tracking-widest">
        {project.type}
      </span>
      <StatusBadge status={project.status} />
    </div>

    {/* TITLE */}
    <h3 className="font-heading font-bold text-offwhite text-xl
                   group-hover:text-primary transition-colors duration-200">
      {project.title}
    </h3>

    {/* DESCRIPTION */}
    <p className="font-body text-muted text-sm leading-relaxed flex-grow">
      {project.description}
    </p>

    {/* TECH PILLS */}
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="font-body text-xs px-3 py-1 rounded-full
                     bg-navy text-muted border border-primary/20"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* ACTION BUTTONS */}
    <div className="flex items-center gap-3 pt-2 border-t border-primary/10">

      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-sm text-muted
                     hover:text-primary transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385
                     .6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235
                     -3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41
                     -1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87
                     1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305
                     .765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385
                     1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23
                     .96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23
                     3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                     0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22
                     0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57
                     A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      ) : (
        <span className="flex items-center gap-2 font-body text-xs text-muted/40">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385
                     .6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235
                     -3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41
                     -1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87
                     1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305
                     .765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385
                     1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23
                     .96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23
                     3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                     0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22
                     0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57
                     A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Repo coming soon
        </span>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-sm text-muted
                     hover:text-cyan transition-colors duration-200 ml-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor"
               viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4
                     M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Live Demo
        </a>
      )}

    </div>
  </div>
)

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="font-heading font-bold text-offwhite text-4xl sm:text-5xl">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GITHUB CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-muted text-sm mb-4">
            More projects and experiments on GitHub
          </p>
          <a
            href="https://github.com/onadith-thecoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-medium
                       px-6 py-3 rounded-lg border border-primary/30
                       text-primary hover:bg-primary/10
                       transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385
                       .6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235
                       -3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41
                       -1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87
                       1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305
                       .765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385
                       1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23
                       .96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23
                       3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
                       0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22
                       0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57
                       A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
