import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import ScrollProgress from "./components/ScrollProgress"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative bg-[#111827] text-white overflow-hidden scroll-smooth grid-bg">
      <ScrollProgress />

      {/* Cyan Glow */}
      <div
        className="
        fixed
        top-[-120px]
        left-[-120px]
        w-[400px]
        h-[400px]
        bg-cyan-500/20
        rounded-full
        blur-[120px]
        pointer-events-none
        "
      ></div>

      {/* Purple Glow */}
      <div
        className="
        fixed
        bottom-[-120px]
        right-[-120px]
        w-[400px]
        h-[400px]
        bg-purple-500/20
        rounded-full
        blur-[120px]
        pointer-events-none
        "
      ></div>

      {/* Main Sections */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App