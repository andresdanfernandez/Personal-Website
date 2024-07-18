import React, { forwardRef } from "react";
import Lightning from "../assets/lightning.svg";
import Plus from "../assets/plus.svg";
import Laptop from "../assets/laptop.svg";

const About = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className=" bg-slate-200 h-screen flex items-center mt-2 justify-center text-6xl">
            <div className="container flex w-10/12 h-3/4 border border-red-700" >
                <div className="w-3/4 flex flex-col pl-6 pr-6 border border-red-700 mt-6 overflow-auto break-words"  >
                    <h1 className="font-extrabold underline underline-offset-8 " >About Me</h1>
                    <p className="text-[20px] mt-4 text-black tracking-wide leading-10" >
                        I am a student at Florida International University pursing a Bachelor of Science in
                        <span className="font-extrabold text-blue-700"> Electrical Engineering </span> with a Minor <br /> in <span className="font-extrabold text-blue-700">Computer Science</span>. I have a passion for <span className="font-extrabold text-blue-700"> software </span>
                        and <span className="font-extrabold text-blue-700"> hardware</span>. I am always striving to learn
                        new things <br />and my interests are broad. The most important thing to me professionally is
                        working on something that <span className="font-extrabold text-blue-700"> impacts people's lives</span>.
                    </p>
                </div>
                <div className="flex justify-evenly h-1/2 border border-red-700 mt-12 w-1/2">
                    <img src={Lightning} width="150px" alt="Lightning" />
                    <img src={Plus} alt="plus" width="100px" />
                    <img src={Laptop} alt="laptop" width="150px" />
                </div>
            </div>
        </div>
    )
});

export default About;