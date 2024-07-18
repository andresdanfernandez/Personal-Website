import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="h-screen flex items-center justify-center text-4xl border">
            <div className="container border flex w-3/4 h-3/4" >
                <div className="about-section w-1/2 flex flex-col pl-6 pr-6 border ml-20 mt-6"  >
                    <h1>About Me</h1>
                    <p className="text-[16px] mt-4 text-slate-300" >
                        I am a student at Florida International University pursing a Bachelor of Science in
                        Electrical Engineering with a Minor in Computer Science. I am always striving to learn
                        new things and my interests are broad. The most important thing to me professionally is
                        working on something that impacts people's lives.
                    </p>
                </div>
            </div>
        </div>
    )
});

export default About;