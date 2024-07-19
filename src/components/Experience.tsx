import { forwardRef } from "react";
import AI from "../assets/ai.svg";
import Brain from "../assets/brain.svg";

const Experience =  forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div ref={ref} className="h-screen bg-slate-200 mt-4 flex items-center justify-center text-4xl border">
            <div className="justify-center w-10/12 h-5/6" >
                <div className="h-20 flex justify-center" >
                    <h1 className="font-extrabold underline underline-offset-[18px] text-6xl text-blue-900" >Experience.</h1>
                </div>
                <div className="flex flex-row justify-between w-full h-5/6" >

                    <div className="mx-5 mt-5 w-full h-full" >
                        <h1 className="text-[22px]" >Information Tech Intern | Miami-Dade County</h1>
                        <ul className="text-[18px] list-disc pl-5 ml-6 space-y-3 mt-4" >
                            <li>
                                <p>Developed parts of the front-end of a company website using <span className="font-extrabold text-blue-900" >Vue.js</span> and <span className="font-extrabold text-blue-900" >Javascript</span></p>
                            </li>
                            <li>
                                <p>Replaced <span className="font-extrabold text-blue-900">Java</span> server-side code that used JSP to <span className="font-extrabold text-blue-900">Javascript</span> for a more component based system</p>
                            </li>
                            <li>
                                <p>Collaborated with the development team to ensure a smooth transition to the new front-end architecture</p>
                            </li>
                            <li>
                                <p>Improved code maintainability and readability saving future developer hours</p>
                            </li>
                        </ul>
                    </div>
                    <div className=" h-full mt-6 border border-l-[5px] border-black"></div>
                    <div className="mx-5 mt-5 w-full h-full">
                        <h1 className="text-[22px]" >Research Assistant | Florida International University</h1>
                        <ul className=" text-[18px] list-disc pl-5 ml-6 space-y-3 mt-4" >
                            <li>
                                <p>Recently started working with Dr. Sumit Jha in his <span className="font-extrabold text-blue-900" >Artificial Intelligence</span> Laboratory at FIU</p>
                            </li>
                        </ul>
                        <div className="border flex gap-20 justify-center mt-16" >
                            <img src={AI} alt="AI Icon" width="120px" />
                            <img src={Brain} alt="Brain Icon" width="105px" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
});

export default Experience;