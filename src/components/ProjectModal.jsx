import { motion } from "framer-motion"

function ProjectModal({ project, closeModal }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-6"
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#1a2332] border border-white/10 rounded-3xl p-8 md:p-10 relative"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl transition"
        >
          ×
        </button>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl border border-white/10 mb-8"
        />

        {/* Title */}
        <h2 className="text-4xl font-bold mb-3">
          {project.title}
        </h2>

        {/* Subtitle */}
        <p className="text-cyan-400 mb-8 text-lg">
          {project.subtitle}
        </p>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Overview
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Vision */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Future Vision
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {project.vision}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal