import React, { forwardRef } from "react";

const Contact =  forwardRef<HTMLDivElement>((props,ref) => {

    return (
        <div ref={ref} className="h-screen flex items-center justify-center text-4xl border">
            <h1>Contact</h1>
        </div>
    )
});

export default Contact;