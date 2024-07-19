import { forwardRef } from "react";
import Lightning from "../assets/lightning.svg";
import Plus from "../assets/plus.svg";
import Laptop from "../assets/laptop.svg";
import Github_Logo from "../assets/github_logo.svg";
import Resume from "../assets/resume.svg";

const About = forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div ref={ref} className=" bg-slate-200 h-screen flex items-center mt-4 justify-center text-6xl">
            <div className="container flex w-10/12 h-3/4 border" >
                <div className="w-3/4 flex flex-col pl-6 pr-6 border mt-6 overflow-auto break-words"  >
                    <h1 className="font-extrabold underline underline-offset-8 text-blue-900" >About Me.</h1>
                    <p className="text-[17px] mt-4 text-black tracking-wide leading-10" >
                        I am a student at Florida International University pursuing a Bachelor of Science in
                        <span className="font-extrabold text-blue-900"> Electrical Engineering </span> with a Minor <br /> in <span className="font-extrabold text-blue-900">Computer Science</span>. I have a passion for both <span className="font-extrabold text-blue-900"> software </span>
                        and <span className="font-extrabold text-blue-900"> hardware</span>. I am always striving to learn
                        new things and my interests are broad. With a strong foundation in <span className="font-extrabold text-blue-900" >web development</span>, I've had the opportunity to work as an intern at Miami-Dade County, where I modernized parts of a website using <span className="font-extrabold text-blue-900" >Javascript</span> and <span className="font-extrabold text-blue-900" >Vue.js</span>. Currently, I am a student research anaylst at the Artificial Intelligence Laboratory under the guidance of Professor Sumit Jha. The most important thing to me professionally is
                        working on something that <span className="font-extrabold text-blue-900"> impacts people's lives</span>.
                    </p>
                </div>
                <div className="flex flex-col border h-full justify-center w-1/2" >
                    <div className="flex justify-evenly h-48 gap-4">
                            <img src={Lightning} width="180px" alt="Lightning" />
                            <img src={Plus} alt="plus" width="120px" />
                            <img className="ml-4" src={Laptop} alt="laptop" width="180px" />
                    </div>
                    <div className="flex border justify-center ml-5 text-blue-900 gap-36 items-center h-56" >
                        <a className="hover:cursor-pointer" target="_blank" href="https://github.com/andresdanfernandez" >
                            <img src={Github_Logo} alt="Github Logo" width="70px" />
                            <p className="text-[14px] mt-2 ml-[0.9rem]" >Github</p>
                        </a>
                        <a className="hover:cursor-pointer" target="_blank" href="https://drive.google.com/file/d/1eLM9TZn7YJ-aOwwbAIKhGuInHOoujpyR/view?usp=sharing" >
                            <img src={Resume} alt="Resume Icon" width="70px" />
                            <p className="text-[14px] mt-2 ml-2 ">Resume</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default About;