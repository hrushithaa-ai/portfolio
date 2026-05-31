import { motion } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./ProjectModal"

import sahaayaImg from "../assets/sahaaya.png"
import scholarImg from "../assets/scholarai.png"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Sahaaya",

      subtitle: "AI Wellness Companion",

      image: sahaayaImg,

      description:
        "Sahaaya is an AI-powered student companion designed to support academic productivity and emotional well-being. It includes dedicated Study and Wellness modes that provide intelligent guidance, learning assistance, motivation, and emotionally aware support. The platform aims to become a trusted digital companion for students whenever they need help.",

      vision:
        "The long-term vision is to transform Sahaaya into a multilingual global AI platform that supports students academically and emotionally. Future versions will include personalized learning systems, mental wellness tracking, reminders, planners, and accessibility across multiple international languages.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Groq API",
        "Conversational AI",
        "Prompt Engineering"
      ]
    },

    {
      title: "Scholar AI",

      subtitle: "Research Intelligence System",

      image: scholarImg,

      description:
        "Scholar AI simplifies academic research using Large Language Models and Retrieval-Augmented Generation. Users can upload research papers, receive summaries, ask questions conversationally, and compare multiple papers simultaneously. The goal is to reduce the time required to understand complex academic content.",

      vision:
        "Scholar AI aims to become a powerful research ecosystem for students, researchers, and professionals. Future enhancements include citation generation, advanced paper comparison, semantic search, knowledge graph creation, and collaborative research workflows.",

      tech: [
        "LLM",
        "RAG",
        "HTML",
        "CSS",
        "Research AI",
        "Document Intelligence"
      ]
    }
  ]

  return (
    <section
      id="projects"
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
            Featured Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Building AI products
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              {" "}with meaning.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              transition={{
                duration: 0.3
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">

                <div className="flex items-center justify-between mb-6">

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <span className="text-cyan-400 text-sm">
                    {project.subtitle}
                  </span>

                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description.slice(0, 180)}...
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <button
                  onClick={() =>
                    setSelectedProject(project)
                  }
                  className="mt-8 text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Learn More →
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        closeModal={() =>
          setSelectedProject(null)
        }
      />
    </section>
  )
}

export default Projects