import Nav from "./Nav";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { useRef } from "react";

function App() {

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  return (
    <>
      <Nav
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <About ref={aboutRef}/>
      <Experience ref={experienceRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
    </>
  )
}

export default App
