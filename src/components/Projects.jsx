const Projects = () => {
  const projects = [
    {
      title: 'malarikkal.in',
      subtitle: 'Village Tourism Website',
      year: '2026',
      description:
        "A responsive tourism portal for Malarickal's water lily lakes where visitors browse a photo gallery, plan their trip with visit and transit information, and contact local boat captains directly through call and WhatsApp links.",
      detail:
        "Built an admin panel with JWT authentication (HttpOnly cookies) to manage boat captains, photo uploads (Supabase Storage), and visitor enquiries — backed by Node.js, Express.js, and MongoDB.",
      technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'JWT'],
      image: '/images/waterlilly.jpeg',
      github: 'https://github.com/Anandakrishnanvs',
      live: 'https://malarikkal.in',
      status: 'Live',
    },
    {
      title: 'Railway Passenger Support',
      subtitle: 'Cross-Platform Mobile App',
      year: '2026',
      description:
        'A cross-platform Flutter app addressing everyday passenger needs: real-time train schedules, PNR tracking, and complaint registration — with 3D station mapping and REST API integration.',
      detail: '',
      technologies: ['Flutter', 'Dart', 'REST APIs', '3D Mapping'],
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800',
      github: 'https://github.com/Anandakrishnanvs',
      live: null,
      status: 'Completed',
    },
    {
      title: 'Gym Management System',
      subtitle: 'Full-Stack Fitness Platform',
      year: '2025',
      description:
        'A full-stack fitness platform where members track progress, manage payments, and receive AI-suggested personalised workout and diet plans tailored to their goals.',
      detail: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AI Integration'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      github: 'https://github.com/Anandakrishnanvs',
      live: null,
      status: 'Completed',
    },
    {
      title: 'Polyhub',
      subtitle: 'Educational Platform',
      year: '2024',
      description:
        'A web portal that gives polytechnic students module-wise notes, past papers, and study resources all in one place — making academic life a whole lot easier.',
      detail: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800',
      github: 'https://github.com/Anandakrishnanvs/polyhub',
      live: null,
      status: 'Completed',
    },
    {
      title: 'Shopify ',
      subtitle: 'E-Commerce Website',
      year: '2024',
      description:
        'A full-stack e-commerce application with JWT authentication, cart management, and RESTful APIs — backed by MongoDB for persistent storage.',
      detail: '',
      technologies: ['Express.js', 'MongoDB', 'JWT', 'Node.js', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      github: 'https://github.com/Anandakrishnanvs/Shopify',
      live: null,
      status: 'Completed',
    },
  ];

  const statusColors = {
    Live: 'bg-green-500/20 text-green-300 border-green-500/40',
    Completed: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    'In Progress': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gradient">
          My Projects
        </h2>
        <p className="text-white/50 text-center mb-16 text-lg">Things I&apos;ve built with passion</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden group hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] hover:border-cyan-400/40 flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                {/* Year badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white/10 text-white/80 border-white/20">
                    {project.year}
                  </span>
                </div>
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[project.status]}`}>
                    {project.status === 'Live' && '● '}{project.status}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-cyan-400">{project.title}</h3>
                  <p className="text-white/40 text-sm font-medium tracking-wide">{project.subtitle}</p>
                </div>
                <p className="text-white/80 mb-3 leading-relaxed text-sm flex-1">{project.description}</p>
                {project.detail && (
                  <p className="text-white/55 mb-4 leading-relaxed text-xs italic border-l-2 border-cyan-400/40 pl-3">
                    {project.detail}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white font-semibold text-sm transition-colors group/btn"
                  >
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Anandakrishnanvs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/20 hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
