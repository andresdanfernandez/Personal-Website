import { motion } from "framer-motion";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      className="bg-white mt-6 py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center"
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
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 text-center mb-8 underline underline-offset-8">
          Projects
        </h1>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "Research Index",
              points: [
                "Developed a web application using the MERN stack enhancing performance and user experience",
                "Efficient data handling and API integration by implementing server-side operations with Node and Express",
                "Enabled seamless and continuous deployment with easy scalability by deploying with Vercel",
                "Implemented MongoDB for database management ensuring secure and scalable storage of data",
              ],
            },
            {
              title: "Endless Scrolling Game",
              points: [
                "Created an endless style scrolling game using Pygame",
                "Implemented game mechanics including player movement, obstacle spawning, and collision detection",
                "Used object-oriented programming principles to implement the Player and Obstacles",
                "Created a dynamic difficulty system by increasing obstacle speed and spawn rate over time",
              ],
            },
            {
              title: "Weather App",
              points: [
                "Developed a responsive weather application using Next.js and React",
                "Implemented OpenWeatherMap API to fetch real-time 7-day weather forecasts",
                "Used TailwindCSS to create a modern UI that is responsive to various device sizes",
                "Implemented error handling to provide user feedback for invalid city inputs",
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-200 ease-in-out"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                {project.title}
              </h2>
              <ul className="space-y-2 text-sm sm:text-base">
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
});

export default Projects;
