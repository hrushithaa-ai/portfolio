import { motion } from "framer-motion"

function Skills() {

  const skills = {
    "AI & ML": [
      "Machine Learning",
      "NLP",
      "LLM",
      "RAG",
      "Prompt Engineering",
      "Chatbot Development"
    ],

    "Frontend": [
      "HTML",
      "CSS",
      "React",
      "Tailwind CSS"
    ],

    "Languages": [
      "Python",
      "Java"
    ],

    "Tools": [
      "VS Code",
      "MySQL",
      "GitHub"
    ]
  }

  return (
    <section
      id="skills"
      className="py-32 px-6 relative z-10"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Skills & Technologies
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Tools shaping my
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              {" "}AI journey.
            </span>

          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {Object.entries(skills).map(([category, items], index) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2
              }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10"
            >

              <h3 className="text-3xl font-bold mb-8">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4">

                {items.map((skill) => (

                  <span
                    key={skill}
                    className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition duration-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills