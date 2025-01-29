import { motion } from "framer-motion";
import { forwardRef } from "react";

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-blue-900 mb-12 text-center underline"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h1>

        <motion.div
          className="flex flex-col space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-900">
              Software Developer Intern | Miami-Dade County
            </h2>
            <ul className="text-base sm:text-lg list-disc pl-5 space-y-3 text-gray-700">
              <li>
                Spearheaded the transition to a new architecture using{" "}
                <span className="font-extrabold text-blue-900">JavaScript</span>{" "}
                and <span className="font-extrabold text-blue-900">Vue.js</span>,
                holding weekly detailed planning sessions, increasing
                development speed by{" "}
                <span className="font-extrabold text-blue-900">25%</span>.
              </li>
              <li>
                Enhanced code maintainability and readability, reducing future
                developer confusion and improving development efficiency.
              </li>
              <li>
                Boosted front-end performance by leveraging a modern{" "}
                <span className="font-extrabold text-blue-900">JavaScript</span>{" "}
                framework, leading to a faster and more responsive user
                experience.
              </li>
              <li>
                Facilitated smooth knowledge transfer for developers by
                documenting the new architecture and components, ensuring
                continuity and ease of onboarding.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default Experience;
