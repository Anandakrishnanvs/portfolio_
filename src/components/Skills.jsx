const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'C/C++', level: 85, icon: '⚙️' },
        { name: 'JavaScript', level: 78, icon: '📜' },
        { name: 'Dart (Flutter)', level: 70, icon: '🎯' },
      ],
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: [
        { name: 'React', level: 82, icon: '⚛️' },
        { name: 'HTML/CSS', level: 88, icon: '🎨' },
        { name: 'Tailwind CSS', level: 80, icon: '💨' },
        { name: 'Node.js / Express', level: 78, icon: '🟢' },
      ],
    },
    {
      title: 'AI & Emerging Tech',
      icon: '🤖',
      skills: [
        { name: 'Generative AI / LLMs', level: 65, icon: '🧠' },
        { name: 'Prompt Engineering', level: 70, icon: '✍️' },
        { name: 'Data Structures & Algo', level: 88, icon: '📊' },
        { name: 'MongoDB / Databases', level: 78, icon: '💾' },
      ],
    },
  ];

  const learningBadges = [
    'Generative AI', 'LangChain', 'Hugging Face', 'REST APIs', 'System Design', 'TypeScript',
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gradient">
          Skills &amp; Technologies
        </h2>
        <p className="text-white/50 text-center mb-16 text-lg">What I bring to the table</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:border-cyan-400/40"
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center flex items-center justify-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring Badges */}
        <div className="glass rounded-2xl p-6 text-center">
          <h4 className="text-cyan-400 font-semibold text-lg mb-4 flex items-center justify-center gap-2">
            <span>🚀</span> Currently Exploring
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {learningBadges.map((badge, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
