import { forwardRef } from "react";

const Projects =  forwardRef<HTMLDivElement>((_, ref) => {

    return (
        <div ref={ref} className="h-screen flex items-center justify-center text-4xl border">
            <h1>Projects</h1>
        </div>
    )
});

export default Projects;