import { skills } from '../data/skills'

const CategorySection = ({ title, icon, items, variant = 'default' }) => (
  <div className="bg-slate rounded-2xl p-6 border border-primary/10
                  hover:border-primary/20 transition-all duration-300">

    {/* CATEGORY HEADER */}
    <div className="flex items-center gap-3 mb-5">
      <span className="text-2xl">{icon}</span>
      <h3 className="font-heading font-semibold text-offwhite text-lg">
        {title}
      </h3>
    </div>

    {/* SKILL PILLS */}
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const name = typeof item === 'string' ? item : item.name
        const level = typeof item === 'object' ? item.level : null

        return (
          <div
            key={name}
            className={`
              relative px-4 py-2 rounded-full text-sm font-body font-medium
              transition-all duration-200 cursor-default
              ${variant === 'learning'
                ? 'bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30'
                : level === 'competent'
                  ? 'bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25'
                  : level === 'familiar' || level === 'learning'
                    ? 'bg-navy text-muted border border-muted/20 hover:border-primary/30 hover:text-offwhite'
                    : 'bg-navy text-offwhite border border-primary/20 hover:border-primary/40'
              }
            `}
          >
            {variant === 'learning' && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5
                               bg-primary rounded-full animate-pulse" />
            )}
            {name}
          </div>
        )
      })}
    </div>
  </div>
)

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            What I Work With
          </p>
          <h2 className="font-heading font-bold text-offwhite text-4xl sm:text-5xl">
            Skills & Tools
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          <CategorySection
            title="Languages"
            icon="💻"
            items={skills.languages}
          />

          <CategorySection
            title="Frameworks & Libraries"
            icon="⚙️"
            items={skills.frameworks}
          />

          <CategorySection
            title="Tools & Platforms"
            icon="🛠️"
            items={skills.tools}
          />

          <CategorySection
            title="Currently Learning"
            icon="🚀"
            items={skills.learning}
            variant="learning"
          />

        </div>

        {/* HONEST NOTE */}
        <div className="text-center mt-10">
          <p className="font-body text-muted text-sm max-w-xl mx-auto leading-relaxed">
            Skills are listed honestly — backed by coursework, projects, or
            active self-study. I believe in transparency over impression management.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Skills
