import React from "react";
import "../index.css";

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
        <nav className="navbar flex bg-custom-black text-gray-100 items-center h-14 text-xl justify-between pl-12">
            <div className="name flex">
                <p>Andres Fernandez | Personal Website</p>
            </div>
            <div className="left-nav flex  gap-9 pr-12">
                <div>
                    <button onClick={() => scrollToSection(aboutRef)} className="hover:text-gray-400" >
                        <p>About</p>
                    </button>
                </div>
                <div>
                    <button onClick={() => scrollToSection(experienceRef)} className="hover:text-gray-400" >
                        <p>Experience</p>
                    </button>
                </div>
                <div>
                    <button onClick={() => scrollToSection(projectsRef)} className="hover:text-gray-400" >
                        <p>Projects</p>
                    </button>
                </div>
                <div>
                    <button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-400" >
                        <p>Contact</p>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;