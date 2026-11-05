const About = () => {
  const funFacts = [
    { emoji: '🎓', text: 'Fourth-year Computer Science & Engineering student' },
    { emoji: '🌴', text: 'From Kerala — God\'s Own Country' },
    { emoji: '🏏', text: 'Cricket enthusiast — love watching and playing the game' },
    { emoji: '🎮', text: 'Gamer at heart — strategy & adventure games are my jam' },
    { emoji: '🌙', text: 'Night owl coder — my best code happens after midnight' },
  ];

  const currentlyLearning = [
    'Generative AI & Large Language Models',
    'New AI Tools & Frameworks',
    'Advanced React Patterns & Hooks',
    'System Design fundamentals',
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gradient">
          About Me
        </h2>
        <p className="text-white/50 text-center mb-16 text-lg">Get to know the person behind the code</p>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              Hey! I&apos;m{' '}
              <span className="text-cyan-400 font-semibold">Anandakrishnan V S</span> — a fourth-year
              CSE student from <span className="text-cyan-400 font-semibold">Kerala 🌴</span>, passionate about
              building real-world software that actually solves problems. What started as curiosity
              about &quot;how do apps work?&quot; has grown into a serious craft.
            </p>
            <p>
              I&apos;m highly skilled in{' '}
              <span className="text-cyan-400 font-semibold">Python, C, and C++</span>, with a strong
              foundation in data structures and algorithms. I genuinely enjoy the challenge of breaking
              down complex problems and crafting elegant, efficient solutions.
            </p>
            <p>
              I&apos;ve shipped real projects — a live village tourism website at{' '}
              <span className="text-cyan-400 font-semibold">malarikkal.in</span>, a Flutter railway app,
              a full-stack gym platform, and more. Each one taught me something new and pushed me further.
            </p>
          </div>

          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              I have solid understanding of core CS concepts like{' '}
              <span className="text-cyan-400 font-semibold">Operating Systems, Computer Networks,</span> and{' '}
              <span className="text-cyan-400 font-semibold">Database Management</span>. I&apos;m comfortable
              with both procedural and object-oriented paradigms.
            </p>
            <p>
              Right now I&apos;m fascinated by <span className="text-cyan-400 font-semibold">Generative AI</span> — LLMs,
              prompt engineering, and how AI can be woven into real products. Exploring this space is
              what gets me excited to open my laptop every day (or more honestly, every night 🌙).
            </p>

            {/* Currently Learning */}
            <div className="glass rounded-xl p-5 mt-4 border border-cyan-400/20">
              <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <span>📚</span> Currently Learning
              </h4>
              <ul className="space-y-2">
                {currentlyLearning.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white/90">
            Beyond the Code 🚀
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {funFacts.map((fact, i) => (
              <div
                key={i}
                className="glass rounded-xl p-4 text-center hover:bg-white/15 transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/40"
              >
                <div className="text-3xl mb-2">{fact.emoji}</div>
                <p className="text-white/80 text-sm leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Academic Year', value: '4th Year' },
            { label: 'Projects Shipped', value: '5+' },
            { label: 'Programming Languages', value: '5+' },
            { label: 'Technologies', value: '10+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/40"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
