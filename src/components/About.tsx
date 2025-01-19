import { motion } from "framer-motion";
import { forwardRef } from "react";
import Github_Logo from "../assets/github_logo.svg";
import Resume from "../assets/resume.svg";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      className="bg-white min-h-screen w-full sm:px-6 lg:px-8 flex items-center mt-6 my-6 justify-center text-6xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container max-w-4xl w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col items-center">
          <motion.h1
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline underline-offset-8 text-blue-900"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-base m-10 sm:text-lg md:text-xl lg:text-xl mb-8 mt-4 text-black tracking-widest leading-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I am a student at Florida International University pursuing a
            Bachelor of Science in
            <span className="font-extrabold text-blue-900">
              {" "}
              Computer Science.
            </span>{" "}
            I have a passion for both{" "}
            <span className="font-extrabold text-blue-900"> software </span>
            and <span className="font-extrabold text-blue-900"> hardware</span>.
            I am always striving to learn new things and my interests are
            broad. With a strong foundation in{" "}
            <span className="font-extrabold text-blue-900">web development</span>
            , I've had the opportunity to work as an intern at Miami-Dade
            County, where I modernized parts of a website using{" "}
            <span className="font-extrabold text-blue-900">Javascript</span> and{" "}
            <span className="font-extrabold text-blue-900">Vue.js</span>.
            Currently, I am a student research analyst at the Artificial
            Intelligence Laboratory under the guidance of Professor Sumit Jha,
            diving deeper into Artificial Intelligence and Machine learning.
            The most important thing to me professionally is working on
            something that{" "}
            <span className="font-extrabold text-blue-900">
              impacts people's lives
            </span>
            .
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center text-blue-900 gap-16"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            className="hover:cursor-pointer flex flex-col items-center"
            target="_blank"
            href="https://github.com/andresdanfernandez"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-12 sm:w-16"
              src={Github_Logo}
              alt="Github Logo"
              width="70px"
            />
            <p className="text-sm mt-2">Github</p>
          </motion.a>
          <motion.a
            className="hover:cursor-pointer flex flex-col items-center"
            target="_blank"
            href="https://drive.google.com/file/d/1d1quwH5uuH18XxjI6-BM1Gr4PUldOc2V/view?usp=sharing"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-12 sm:w-16"
              src={Resume}
              alt="Resume Icon"
              width="70px"
            />
            <p className="text-sm mt-2">Resume</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default About;
