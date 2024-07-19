import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="bg-slate-200 mt-4 py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 text-center mb-8 underline underline-offset-8">
          Projects
        </h1>
        <div className="space-y-8 sm:space-y-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Research Index</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Developed a web application using the <span className="font-extrabold text-blue-900">MERN</span> stack enhancing performance and user experience</li>
              <li>Efficient data handling and API integration by implementing server-side operations with <span className="font-extrabold text-blue-900">Node</span> and <span className="font-extrabold text-blue-900">Express</span></li>
              <li>Enabled seamless and continuous deployment with easy scalability by deploying with <span className="font-extrabold text-blue-900">Vercel</span></li>
              <li>Implemented <span className="font-extrabold text-blue-900">MongoDB</span> for database management ensuring secure and scalable storage of data</li>
            </ul>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Endless Scrolling Game</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Created an endless style scrolling game using Pygame</li>
              <li>Implemented game mechanics including player movement, obstacle spawning, and collision detection</li>
              <li>Used <span className="font-extrabold text-blue-900">object-oriented programming</span> principles to implement the Player and Obstacles</li>
              <li>Created a dynamic difficulty system by increasing obstacle speed and spawn rate over time</li>
            </ul>
          </div>

          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Image to ASCII Program</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Utilized the PIL library to manipulate images</li>
              <li>Resized images to maintain aspect ratio and optimize for ASCII art representation</li>
              <li>Implemented a nested loop that iterates over pixels and converts brightness levels to ASCII characters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;