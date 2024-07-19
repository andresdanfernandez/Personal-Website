import { forwardRef } from "react";
import AI from "../assets/ai.svg";
import Brain from "../assets/brain.svg";

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-white py-12 px-4 mt-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 text-center mb-8 underline underline-offset-8">
          Experience
        </h1>
        
        <div className="flex flex-col lg:flex-row justify-between w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Information Tech Intern | Miami-Dade County
            </h2>
            <ul className="text-base sm:text-lg list-disc pl-5 space-y-3">
              <li>
                Developed parts of the front-end of a company website using <span className="font-extrabold text-blue-900">Vue.js</span> and <span className="font-extrabold text-blue-900">Javascript</span>
              </li>
              <li>
                Replaced <span className="font-extrabold text-blue-900">Java</span> server-side code that used JSP to <span className="font-extrabold text-blue-900">Javascript</span> for a more component based system
              </li>
              <li>
                Collaborated with the development team to ensure a smooth transition to the new front-end architecture
              </li>
              <li>
                Improved code maintainability and readability saving future developer hours
              </li>
            </ul>
          </div>

          <div className="hidden lg:block w-px bg-black"></div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Research Assistant | Florida International University
            </h2>
            <ul className="text-base sm:text-lg list-disc pl-5 space-y-3 mb-8">
              <li>
                Recently started working with Dr. Sumit Jha in his <span className="font-extrabold text-blue-900">Artificial Intelligence</span> Laboratory at FIU
              </li>
            </ul>
            <div className="flex justify-center items-center space-x-8">
              <img src={AI} alt="AI Icon" className="w-24 sm:w-32" />
              <img src={Brain} alt="Brain Icon" className="w-20 sm:w-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;