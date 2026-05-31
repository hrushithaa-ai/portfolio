function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#111827]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-xl font-semibold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          HRUSHITHA
        </h1>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar