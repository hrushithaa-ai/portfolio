import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 relative z-10"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">

            Designing
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              {" "}human-centered AI
            </span>

            <br />

            experiences for the future.

          </h2>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10"
        >

          <p className="text-gray-300 leading-relaxed text-lg">

            I’m an AIML student passionate about building
            intelligent systems that combine technology,
            creativity, and emotional understanding.
            My interests revolve around conversational AI,
            healthcare-oriented innovation, and designing
            thoughtful digital experiences that feel
            genuinely helpful to people.

          </p>

          <p className="text-gray-400 leading-relaxed mt-6 text-lg">

            Currently, I’m exploring areas like NLP,
            LLMs, RAG systems, chatbot development,
            and modern frontend technologies while
            continuously experimenting with AI-powered
            products and interfaces. I enjoy transforming
            ideas into meaningful digital experiences that
            balance innovation, usability, and human connection.

          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default About