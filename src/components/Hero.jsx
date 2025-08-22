
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
                 bg-gradient-to-br from-gray-100 to-gray-200 
                 dark:from-gray-900 dark:to-gray-800 px-6 md:px-16"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center md:justify-end w-full md:w-1/2"
      >
        <div className="rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-blue-500/50">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-80 object-cover"
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Jananivarthini R
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Software Developer & Content Creator passionate about building digital
          experiences and crafting stories that inspire action.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
