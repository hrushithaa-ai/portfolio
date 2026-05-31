import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden pt-24">

      {/* Animated Glow Blobs */}

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        rounded-full
        blur-[120px]
        pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-purple-500/10
        rounded-full
        blur-[120px]
        pointer-events-none
        "
      />

      {/* Floating Cards */}

      <div className="absolute top-[25%] left-[10%] hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
        >
          <p className="text-cyan-400 font-semibold">
            Python
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-[25%] left-[15%] hidden lg:block">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
        >
          <p className="text-purple-400 font-semibold">
            Generative AI
          </p>
        </motion.div>
      </div>

      <div className="absolute top-[30%] right-[10%] hidden lg:block">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
        >
          <p className="text-cyan-400 font-semibold">
            React
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-[20%] right-[15%] hidden lg:block">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
        >
          <p className="text-purple-400 font-semibold">
            Healthcare AI
          </p>
        </motion.div>
      </div>

      {/* Hero Content */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center"
      >

        {/* Subtitle */}

        <p className="text-cyan-400 mb-4 tracking-[0.3em] uppercase text-sm">
          AIML Student • Generative AI Enthusiast
        </p>

        {/* Name */}

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Hrushitha
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            {" "}Sree K
          </span>
        </h1>

        {/* Badge */}

        <div className="inline-flex items-center gap-2 px-5 py-3 mb-8 rounded-full border border-cyan-400/40 bg-cyan-500/15 text-cyan-200 text-sm font-medium shadow-lg shadow-cyan-500/20">
          🤖 Building Human-Centered AI Solutions
        </div>

        {/* Description */}

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Exploring Generative AI, intelligent systems, and healthcare-focused
          innovation to build meaningful digital experiences that support
          learning, research, and human well-being.
        </p>

        {/* Stats Card */}

        <div className="mt-10 max-w-xl mx-auto">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">

            <div className="grid grid-cols-3 gap-4 text-center">

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  2+
                </h3>
                <p className="text-gray-400 text-sm">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400">
                  AI
                </h3>
                <p className="text-gray-400 text-sm">
                  Core Interest
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">
                  LLM + RAG
                </h3>
                <p className="text-gray-400 text-sm">
                  Exploring
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Buttons */}

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </a>

          <a
            href="/Hrushitha_Sree_K_Resume.pdf"
            download
            className="px-8 py-4 rounded-2xl bg-purple-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30 flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition duration-300"
          >
            Contact Me
          </a>

        </div>

        {/* Social Links */}

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://github.com/hrushithaa-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300 text-3xl hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hrushitha-sree-kadali/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300 text-3xl hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero