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
                Spearheaded the transition to a new architecture using <span className="font-extrabold text-blue-900">JavaScript</span> and <span className="font-extrabold text-blue-900">Vue.js</span>, while holding weekly detailed planning sessions increasing development speed by <span className="font-extrabold text-blue-900">25%</span>.
              </li>
              <li>
                Enhanced overall code maintainability and readability resulting in a reduction of future developer confusion and a more efficient development process.
              </li>
              <li>
                Boosted front-end performance by leveraging a modern <span className="font-extrabold text-blue-900">JavaScript</span> framework and implementing best practices, leading to a faster and more responsive user experience.
              </li>
              <li>
                Facilitated a smooth knowledge transfer for other developers by thoroughly documenting the new architecture and its components, ensuring continuity and ease of onboarding.
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
