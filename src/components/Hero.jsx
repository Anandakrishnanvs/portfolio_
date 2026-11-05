import { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Developer',
  'AI Explorer',
  'Problem Solver',
  'CSE Student',
  'Python Enthusiast',
  'Open Source Builder',
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 animate-spin-slow opacity-70 blur-sm"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-2xl shadow-cyan-500/50">
                <img
                  src="/images/profile.jpg"
                  alt="Anandakrishnan V S"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-3 right-3 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-900 shadow-lg shadow-green-400/50 animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 mb-4 font-light tracking-widest uppercase">
            Hello, I&apos;m
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gradient animate-gradient">
            Anandakrishnan V S
          </h1>

          {/* Typewriter Role */}
          <div className="text-2xl sm:text-3xl md:text-4xl mb-8 h-12 flex items-center justify-center">
            <span className="text-cyan-400">I&apos;m a&nbsp;</span>
            <span className="text-gradient font-bold border-r-2 border-cyan-400 pr-1 animate-cursor">
              {displayed}
            </span>
          </div>

          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Hi, I&apos;m a fourth-year CSE student from <span className="text-cyan-400 font-semibold">Kerala 🌴</span> who builds things for the web — and lately, with AI.
            I love turning real-world problems into clean, working software, and I&apos;m currently diving deep into{' '}
            <span className="text-cyan-400 font-semibold">Generative AI &amp; new AI tools</span>.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mb-10">
            <a
              href="https://github.com/Anandakrishnanvs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/60 transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/anandakrishnan-v-s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/60 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:anandakrishnanvs121@gmail.com"
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-cyan-400/60 transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            <a
              href="#projects"
              className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              View Projects ↓
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="text-white/60 hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
