import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative z-10"
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Let’s create something
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              {" "}impactful.
            </span>

          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">

            I’m always interested in AI innovation,
            creative collaborations, healthcare-oriented
            technology, and meaningful conversations
            around intelligent systems and design.

          </p>

        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* EMAIL */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >

            <h3 className="text-2xl font-semibold mb-4">
              Email
            </h3>

            <p className="text-gray-400 mb-6">
              Reach out for collaborations or opportunities.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition duration-300"
            >
              sree.kadali0604@gmail.com
            </a>

          </motion.div>

          {/* GITHUB */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >

            <h3 className="text-2xl font-semibold mb-4">
              GitHub
            </h3>

            <p className="text-gray-400 mb-6">
              Explore my AI and development projects.
            </p>

            <a
              href="https://github.com/hrushithaa-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition duration-300"
            >
              Visit GitHub →
            </a>

          </motion.div>

          {/* LINKEDIN */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >

            <h3 className="text-2xl font-semibold mb-4">
              LinkedIn
            </h3>

            <p className="text-gray-400 mb-6">
              Connect professionally and stay in touch.
            </p>

            <a
              href="https://www.linkedin.com/in/hrushitha-sree-kadali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition duration-300"
            >
              Connect on LinkedIn →
            </a>

          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-white/10 pt-8">

          <p className="text-gray-500 text-sm">
            Designed & Developed by Hrushitha Sree K • Portfolio
          </p>

        </div>

      </div>

    </section>
  )
}

export default Contact