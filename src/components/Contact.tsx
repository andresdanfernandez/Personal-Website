import { forwardRef } from "react";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import LinkedIn from "../assets/linkedin.svg";

const Contact =  forwardRef<HTMLDivElement>((props,ref) => {

    return (
        <div ref={ref} className="bg-slate-200 mt-4 h-screen items-center flex justify-center text-6xl border">
            <div className="justify-center w-10/12 h-5/6" >
                <div className="h-20 flex justify-center" >
                        <h1 className="font-extrabold underline underline-offset-[18px] text-6xl text-blue-900" >Contact.</h1>
                </div>
                <div className="flex flex-row w-full h-4/5 mt-5 items-center" >
                    <div className="h-96 flex flex-col gap-10 w-1/2 justify-center items-center">
                        <img className="ml-auto mr-80" src={Email} alt="Email Icon" width="80px"/>
                        <img className="ml-auto mr-80" src={Phone} alt="Phone Icon" width="80px"/>
                        <img className="ml-auto mr-80" src={LinkedIn} alt="LinkedIn Icon" width="80px"/>
                    </div>
                    <div className="h-96 text-[50px] flex flex-col gap-16 w-1/2 border justify-center items-center" >
                        <a className="text-blue-900 underline underline-offset-4" href="mailto:andyf9903@gmail.com" target="_blank">Email me!</a>
                        <p>305-508-8968</p>
                        <a className="text-blue-900 underline underline-offset-4" href="https://www.linkedin.com/in/andresdfernandez/" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Contact;