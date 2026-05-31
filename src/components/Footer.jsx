function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center">

          <h2 className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            HRUSHITHA SREE K
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            AIML student passionate about Generative AI,
            intelligent systems, and human-centered technology.
            Building AI solutions that make learning, research,
            and well-being more accessible.
          </p>

          <div className="flex justify-center gap-8 mt-8">

            <a
              href="https://github.com/hrushithaa-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hrushitha-sree-kadali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sree.kadali0604@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              Email
            </a>

          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8"></div>

          <p className="text-sm text-gray-500 mt-6">
            © 2026 Hrushitha Sree K. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer