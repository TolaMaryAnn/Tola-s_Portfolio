import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGit,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiSolidity,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <FaReact /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "Git", icon: <FaGit /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const colors = [
  "bg-gradient-to-br from-[#7B4B35] to-[#A36D5C]",
  "bg-gradient-to-br from-[#C79A7D] to-[#BFA18F]",
  "bg-gradient-to-br from-[#4E3629] to-[#D9A066]",
];

export default function Skills() {
  return (
    <section className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl tracking-widest mb-6">SKILLS</h2>

        <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-11 lg:gap-4 lg:justify-center py-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center min-w-[6rem] w-24 h-24 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 ${
                colors[i % colors.length]
              } text-black`}
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-xs mt-2 text-center font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
