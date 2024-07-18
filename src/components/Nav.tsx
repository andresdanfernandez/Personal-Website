import React from "react";

type NavProps = {
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}


function Nav({ aboutRef, experienceRef, projectsRef, contactRef}: NavProps) {

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <nav className="flex items-center h-28 text-3xl justify-between pl-12">
            <div className="name border flex">
                <h1 className="border">Personal Website</h1>
            </div>
            <div className="left-nav border flex  gap-9 pr-12">
                <div>
                    <button onClick={() => scrollToSection(aboutRef)} className="hover:text-gray-400" >
                        <h1>About</h1>
                    </button>
                </div>
                <div>
                    <button onClick={() => scrollToSection(experienceRef)} className="hover:text-gray-400" >
                        <h1>Experience</h1>
                    </button>
                </div>
                <div>
                    <button onClick={() => scrollToSection(projectsRef)} className="hover:text-gray-400" >
                        <h1>Projects</h1>
                    </button>
                </div>
                <div>
                    <button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-400" >
                        <h1>Contact</h1>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;