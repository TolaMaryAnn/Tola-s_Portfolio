import Intro from "../Components/Intro"
import Profile from "../Components/Profile"
import Skills from "../Components/Skills"
function HomePage() {
  

    return (
      <div className="bg-gradient-to-br from-black via-[#1a1512] to-[#3a2a22] ">
      <Intro/>
      <Profile/>
      <Skills/>
      </div>
    )
  }
  
  export default HomePage