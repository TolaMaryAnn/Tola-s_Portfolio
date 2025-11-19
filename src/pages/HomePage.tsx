import Intro from "../Components/Intro"
import Profile from "../Components/Profile"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import CursorDot from "../Components/CursorDot";


function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-[#1a1512] to-[#3a2a22] relative h-screen overflow-hidden">
      <div className="h-full overflow-y-scroll scrollbar-none">
        <CursorDot />
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
    </div>
  );
}


export default HomePage;
