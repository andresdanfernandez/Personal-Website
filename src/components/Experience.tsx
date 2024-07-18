import { forwardRef } from "react";

const Experience =  forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="h-screen bg-slate-200 mt-4 flex items-center justify-center text-4xl border">
            <div className="border border-red-700 justify-center w-10/12 h-5/6" >
                <div className="h-20  border flex justify-center border-blue-800" >
                    <h1 className="font-extrabold underline underline-offset-[14px] text-6xl" >Experience.</h1>
                </div>
                <div className="border border-blue-800 flex flex-col w-full h-5/6" >
                    <div className="border-green-700 mx-5 mr-5 ml-5 w-60 h-96" >

                    </div>
                </div>
            </div>
        </div>
    )
});

export default Experience;