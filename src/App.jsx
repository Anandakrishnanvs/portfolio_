import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-white/60 border-t border-white/10">
        <p>© {new Date().getFullYear()} Anandakrishnan V S. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
