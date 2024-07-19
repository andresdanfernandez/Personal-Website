import React, { useState } from "react";
import "../index.css";
import Menu from "../assets/menu.svg";

type NavProps = {
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

function Nav({ aboutRef, experienceRef, projectsRef, contactRef}: NavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth"});
        setIsMenuOpen(false);
    }

    return (
        <nav className="bg-custom-black text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <p className="text-lg sm:text-xl font-medium">Andres Fernandez | Personal Website</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {[
                                { name: 'About', ref: aboutRef },
                                { name: 'Experience', ref: experienceRef },
                                { name: 'Projects', ref: projectsRef },
                                { name: 'Contact', ref: contactRef },
                            ].map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.ref)}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="bg-gray-400 inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-300 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <img src={Menu} alt="Menu" className=" h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {[
                            { name: 'About', ref: aboutRef },
                            { name: 'Experience', ref: experienceRef },
                            { name: 'Projects', ref: projectsRef },
                            { name: 'Contact', ref: contactRef },
                        ].map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.ref)}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Nav;