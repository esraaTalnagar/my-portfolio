import Navbar from "./Components/Navbar"
import ContactMe from "./Components/contactMe";
import Cover from "./Components/Cover";
import Services from "./Components/services";
import AboutMe from "./Components/aboutMe";
import Education from "./Components/Education";
import WorkExperience from "./Components/workExperience";
import Projects from "./Components/projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="cover">
      <Cover />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <ContactMe />
    </div>
  );
}

export default App
