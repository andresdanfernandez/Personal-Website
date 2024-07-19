import React, { forwardRef } from "react";

const Projects =  forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="bg-slate-200 mt-4 h-screen flex items-center justify-center text-4xl border">
            <div className="justify-center w-10/12 h-5/6" >
                <div className="h-20  flex justify-center" >
                        <h1 className="font-extrabold underline underline-offset-[18px] text-6xl text-blue-900" >Projects.</h1>
                </div>
                <div className="grid grid-rows-3 divide-y-2 justify-center w-full h-full" >
                    <div>
                        <h1 className="text-[20px] ml-2">Research Index</h1>
                            <p className="ml-8 text-[15px]" >&#x2022; Developed a web application using the <span className="font-extrabold text-blue-900" >MERN</span> stack enhancing performance and user experience</p>
                            <p className="ml-8 text-[15px]" >&#x2022; Efficient data handling and API integration by implementing server-side operations with <span className="font-extrabold text-blue-900" >Node</span> and <span className="font-extrabold text-blue-900" >Express</span></p>
                            <p className="ml-8 text-[15px]" >&#x2022; Enabled seamless and continuous deployment with easy scalability by deploying with <span className="font-extrabold text-blue-900" >Vercel</span></p>
                            <p className="ml-8 text-[15px]" >&#x2022; Implemented <span className="font-extrabold text-blue-900" >MongoDB</span> for database management ensuring secure and scalable storage of data</p>
                    </div>
                    <div>
                        <h1 className="text-[20px] ml-2">Endless Scrolling Game</h1>
                            <p className="ml-8 text-[15px]" >&#x2022; Created an endless style scrolling game using Pygame</p>
                            <p className="ml-8 text-[15px]" >&#x2022; Implemented game mechanics including player movement, obstacle spawning, and collision detection</p>
                            <p className="ml-8 text-[15px]" >&#x2022; Used <span className="font-extrabold text-blue-900" >object-oriented programming</span> principles to implement the Player and Obstacles</p>
                            <p className="ml-8 text-[15px]" >&#x2022; Created a dynamic difficulty system by increasing obstacle speed and spawn rate over time</p>
                    </div>
                    <div>
                        <h1 className="text-[20px] ml-2">Image to ASCII Program</h1>
                            <p className="ml-8 text-[15px]" >&#x2022; Utilized the PIL library to manipulate images</p>
                            <p className="ml-8 text-[15px]" >&#x2022; Resized images to maintain aspect ratio and optimize for ASCII art representation</p>
                            <p className="ml-8 text-[15px]" >&#x2022; Implemented a nested loop that iterates over pixels and converts brightness levels to ASCII characters</p>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Projects;