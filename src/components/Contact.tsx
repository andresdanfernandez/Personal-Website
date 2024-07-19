import { forwardRef } from "react";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import LinkedIn from "../assets/linkedin.svg";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="bg-white py-12 px-4 sm:px-6 mt-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 text-center mb-12 underline underline-offset-8">
          Contact.
        </h1>
        <div className="flex flex-col gap-8 sm:gap-12 items-center">
          <div className="flex items-center gap-4 sm:gap-8">
            <img src={Email} alt="Email Icon" className="w-8 sm:w-12 md:w-16" />
            <a 
              className="text-blue-900 underline underline-offset-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-blue-700 transition-colors" 
              href="mailto:andyf9903@gmail.com" 
              target="_blank" 
            >
              Email me!
            </a>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <img src={Phone} alt="Phone Icon" className="w-8 sm:w-12 md:w-16" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">305-508-8968</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <img src={LinkedIn} alt="LinkedIn Icon" className="w-8 sm:w-12 md:w-16" />
            <a 
              className="text-blue-900 underline underline-offset-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-blue-700 transition-colors" 
              href="https://www.linkedin.com/in/andresdfernandez/" 
              target="_blank" 
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;