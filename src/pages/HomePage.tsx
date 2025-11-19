import Intro from "../Components/Intro"
import Profile from "../Components/Profile"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-[#1a1512] to-[#3a2a22]">
      <Intro />
      <Profile />

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
