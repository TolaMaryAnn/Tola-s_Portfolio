import Intro from "../Components/Intro"
import Profile from "../Components/Profile"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import CursorDot from "../Components/CursorDot";
import Navbar from "../Components/Navbar";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#0a0705] via-[#1a120e] to-[#261811] min-h-screen font-poppins text-gray-200">
      <CursorDot />
      <Navbar />
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
