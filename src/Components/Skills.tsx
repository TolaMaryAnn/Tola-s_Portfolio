import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGit,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React.js", icon: <FaReact /> }, // Added React.js
  { name: "TypeScript", icon: <SiTypescript /> }, // Correct TypeScript icon
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "Git", icon: <FaGit /> },
];

const colors = [
  "bg-gradient-to-br from-[#1A0F0A] to-[#2C1B12] border border-[#7B4B35]/30",
  "bg-gradient-to-br from-[#20140D] to-[#382216] border border-[#8C5A42]/30",
  "bg-gradient-to-br from-[#140C08] to-[#25150E] border border-[#5A3828]/30",
];

export default function Skills() {
  return (
    <section className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl tracking-widest mb-6">SKILLS</h2>

        <div className="flex flex-wrap gap-4 justify-center py-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center min-w-[6rem] w-24 h-24 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(217,160,102,0.2)] hover:-translate-y-2 ${colors[i % colors.length]} text-[#D9A066]`}
            >
              <div className="text-4xl text-gray-200 hover:text-[#D9A066] transition-colors">{skill.icon}</div>
              <span className="text-xs mt-2 text-center font-medium tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
