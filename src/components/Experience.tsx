import React, { forwardRef } from "react";

const Experience =  forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="h-screen flex items-center justify-center text-4xl border">
            <h1>Experience</h1>
        </div>
    )
});

export default Experience;