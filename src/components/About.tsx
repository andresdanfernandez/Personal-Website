import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="h-screen flex items-center justify-center text-4xl border">
            <h1>About</h1>
        </div>
    )
});

export default About;