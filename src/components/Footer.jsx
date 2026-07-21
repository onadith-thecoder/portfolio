function Footer() {
  const navLinks = [
    { label: 'Home',       href: '#home'       },
    { label: 'About',      href: '#about'      },
    { label: 'Skills',     href: '#skills'     },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Experience', href: '#experience' },
    { label: 'Research',   href: '#research'   },
    { label: 'Contact',    href: '#contact'    },
  ]

  const socialLinks = [
    {
      label: 'Email',
      href: 'mailto:onadhith@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15
                   a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25
                   0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0
                   v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25
                   2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0
                   01-1.07-1.916V6.75"/>
        </svg>
      )
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/94752549850',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099
                   -.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199
                   -.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883
                   -.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606
                   .134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099
                   -.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
                   -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01
                   -.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479
                   0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077
                   4.487.709.306 1.262.489 1.694.625.712.227 1.36.195
                   1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248
                   -1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421
                   7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741
                   .982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001
                   -5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988
                   2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437
                   9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05
                   0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588
                   5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683
                   1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821
                   11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      label: 'GitHub',
      href: 'https://github.com/onadith-thecoder',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205
                   11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015
                   -2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345
                   -.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795
                   .945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305
                   3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46
                   -1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12
                   -.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27
                   1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23
                   3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905
                   1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375
                   .81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0
                   .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63
                   -5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/venuka-onadith-706806266',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852
                   -3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414
                   v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267
                   2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0
                   01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
                   13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0
                   0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451
                   C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0
                   22.222 0h.003z"/>
        </svg>
      )
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/@venukaonadhith6343',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505
                   3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017
                   3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502
                   5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376
                   .505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0
                   002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502
                   -5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/venukaonadhith',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101
                   3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92
                   5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109
                   1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029
                   h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477
                   -2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5
                   .021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26
                   3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3
                   -.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016
                   .05-3.016z"/>
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_.ona_dzee._',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771
                   1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0
                   3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771
                   -4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0
                   -3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919
                   -4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013
                   -3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919
                   1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333
                   .014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333
                   0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618
                   6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0
                   3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98
                   .059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072
                   -4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014
                   15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162
                   6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm
                   6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000
                   -2.881z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-slate border-t border-primary/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center
                        justify-between gap-8 mb-8">

          {/* BRAND */}
          <div>
            <h3 className="font-heading font-bold text-offwhite text-xl mb-1">
              Venuka Onadith
            </h3>
            <p className="font-body text-muted text-sm">
              Aspiring Software Engineer
            </p>
          </div>

          {/* NAV LINKS */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-muted text-sm
                           hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* SOCIAL ICONS — ALL SEVEN */}
          <div className="flex items-center flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="w-9 h-9 rounded-lg bg-navy flex items-center
                           justify-center text-muted border border-primary/10
                           hover:text-primary hover:border-primary/30
                           transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-primary/10 mb-8" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-center
                        justify-between gap-4 text-center">
          <p className="font-body text-muted text-xs">
            © 2026 Venuka Onadith. All rights reserved.
          </p>
          <p className="font-body text-muted text-xs">
            Built with{' '}
            <span className="text-primary">React</span>
            {' & '}
            <span className="text-primary">Tailwind CSS</span>
            {' · Deployed on '}
            <span className="text-primary">Vercel</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
