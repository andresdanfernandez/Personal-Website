import { forwardRef } from "react";
import Lightning from "../assets/lightning.svg";
import Plus from "../assets/plus.svg";
import Laptop from "../assets/laptop.svg";
import Github_Logo from "../assets/github_logo.svg";
import Resume from "../assets/resume.svg";

const About = forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div ref={ref} className=" bg-slate-200 min-h-screen w-full sm:px-6 lg:px-8 flex items-center mt-4 justify-center text-6xl">
            <div className="container max-w-4xl w-full" >
                <div className=" flex flex-col items-center"  >
                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline underline-offset-8 text-blue-900">About Me</h1>
                        <p className="text-base m-10 sm:text-lg md:text-xl lg:text-xl mb-8 mt-4 text-black tracking-widest leading-normal" >
                            I am a student at Florida International University pursuing a Bachelor of Science in
                            <span className="font-extrabold text-blue-900"> Electrical Engineering </span> with a Minor in <span className="font-extrabold text-blue-900">Computer Science</span>. I have a passion for both <span className="font-extrabold text-blue-900"> software </span>
                            and <span className="font-extrabold text-blue-900"> hardware</span>. I am always striving to learn
                            new things and my interests are broad. With a strong foundation in <span className="font-extrabold text-blue-900" >web development</span>, I've had the opportunity to work as an intern at Miami-Dade County, where I modernized parts of a website using <span className="font-extrabold text-blue-900" >Javascript</span> and <span className="font-extrabold text-blue-900" >Vue.js</span>. Currently, I am a student research anaylst at the Artificial Intelligence Laboratory under the guidance of Professor Sumit Jha, diving deeper into Artificial Intelligence and Machine learning. The most important thing to me professionally is
                            working on something that <span className="font-extrabold text-blue-900"> impacts people's lives</span>.
                        </p>
                </div>

                <div className="flex justify-center items-center gap-4 mb-6" >
                    <img className="w-1/3 max-w-[120px]"  src={Lightning} width="180px" alt="Lightning" />
                    <img className="w-1/5 max-w-[60px]" src={Plus} alt="plus" width="120px" />
                    <img className="w-1/3 max-w-[120px]" src={Laptop} alt="laptop" width="180px" />
                </div>

                    <div className="flex justify-center text-blue-900 gap-16" >
                        <a className="hover:cursor-pointer flex flex-col items-center" target="_blank" href="https://github.com/andresdanfernandez" >
                            <img className="w-12 sm:w-16" src={Github_Logo} alt="Github Logo" width="70px" />
                            <p className="text-sm mt-2" >Github</p>
                        </a>
                        <a className="hover:cursor-pointer flex flex-col items-center" target="_blank" href="https://drive.google.com/file/d/1MgbmJvSejKIxxZIdV2k9Sc3_LnSe-YZ-/view?usp=sharing" >
                            <img className="w-12 sm:w-16" src={Resume} alt="Resume Icon" width="70px" />
                            <p className="text-sm mt-2">Resume</p>
                        </a>
                    </div>
                
            </div>
        </div>
    );
});

export default About;
