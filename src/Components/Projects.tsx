import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import TeeLandImg from "../assets/Screenshot from 2025-11-15 19-24-38.png";
import ESCImg from "../assets/Screenshot from 2025-11-15 19-35-06.png";
import StarBucksImg from "../assets/Screenshot from 2025-11-15 19-40-45.png";
import SBPImg from "../assets/Screenshot from 2025-11-15 19-47-00.png";
import MiniMeImg from "../assets/Screenshot from 2025-11-15 19-57-12.png";
import ShopVamsImg from "../assets/Screenshot from 2025-11-15 19-59-04.png";

const projects = [
  {
    name: "TeeLand",
    image: TeeLandImg,
    description:
      "I built this landing page when I was exploring the idea of diving into the Web3 space 🙂. It was inspired by the vision of a decentralized digital marketplace where users could mint and trade assets seamlessly. I focused heavily on animations, smooth transitions, and building an interface that feels modern and minimal. This was also one of the projects where I experimented with designing UI from scratch rather than using a template.",
    link: "https://tee-land.vercel.app/",
  },
  {
    name: "ESC",
    image: ESCImg,
    description:
      "Originally intended for a client, this project became a full practice piece that helped me refine layout structure, responsiveness, typography balance, and brand identity representation. I worked on building a clean consulting-style website that presents information clearly while maintaining visual elegance. It was also a good exercise in handling multi-section scroll pages.",
    link: "https://emmanuel-sololeke-consulting.vercel.app/",
  },
  {
    name: "StarBucks",
    image: StarBucksImg,
    description:
      "A high-fidelity cloning project replicating the Starbucks 'For Life' holiday campaign. This helped me sharpen my skills in pixel-perfect UI reproduction, section anatomy, hero layouts, and advanced responsive grids. It also allowed me to understand how top brands structure their content hierarchy visually.",
    link: "https://starbucks-coffee-company-clone.vercel.app/",
  },
  {
    name: "SBP",
    image: SBPImg,
    description:
      "Originally intended for a client, this visually driven project sharpened my skills in building aesthetic-first layouts. It focuses heavily on large hero images, smooth transitions, minimal text overlays, and clean portfolio-like presentation. I particularly enjoyed working on the layout flow and spacing rhythm.",
    link: "https://stylebypeema.vercel.app/",
  },
  {
    name: "MiniMe",
    image: MiniMeImg,
    description:
      "This personal mini project was created purely for fun while practicing motion, soft color palettes, and layout balancing. I used it to experiment with unconventional hero designs and subtle UI animations.",
    link: "https://minime-nine.vercel.app/",
  },
  {
    name: "ShopVams",
    image: ShopVamsImg,
    description:
      "A minimalist, fully responsive e-commerce frontend for a male accessories brand. I focused on clean product listing structure, simple checkout flow simulation, and crisp product card design. Built using modern UI patterns and mobile-first structure.",
    link: "https://shopvams.vercel.app/",
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px)",
            backgroundSize: "100% 120px",
            animation: "moveDown 12s linear infinite",
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
            backgroundSize: "120px 100%",
            animation: "moveRight 12s linear infinite",
          }}
        ></div>
      </div>

      <style>
        {`
          @keyframes moveDown {
            0% { background-position-y: 0; }
            100% { background-position-y: 60px; }
          }
          @keyframes moveRight {
            0% { background-position-x: 0; }
            100% { background-position-x: 60px; }
          }
        `}
      </style>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <h2 className="text-xl tracking-widest mb-6">PROJECTS</h2>
        <p className="mb-12" style={{ color: "#BFA18F" }}>
          A few selected projects I've done. I haven't built much... more are
          coming soon!
        </p>

        <div
          className="
    flex flex-row overflow-x-auto gap-x-6 px-4
    sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8
    sm:overflow-x-visible
    scrollbar-hide
  "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const shortText = project.description.slice(0, 80) + "...";

            return (
              <div
                key={index}
                className="
          min-w-[80%] sm:min-w-0
    rounded-xl shadow-lg overflow-hidden transform transition
    hover:scale-105 hover:shadow-2xl relative backdrop-blur-sm
  "
                style={{
                  backgroundColor: "rgba(78, 54, 41, 0.35)",
                  scrollSnapAlign: "center",
                }}
              >
                <h3
                  className="font-semibold text-lg mb-2 p-4"
                  style={{ color: "#D9A066" }}
                >
                  {project.name}
                </h3>

                <div className="relative group">
                  <div className="px-4 pt-4">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-44 object-cover rounded-xl shadow-md"
                    />
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    absolute right-3 
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    transition-all duration-500 
    translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0
    scale-100 sm:scale-75 sm:group-hover:scale-100
    p-[10px]
    rounded-2xl
    backdrop-blur-md shadow-lg border
  "
                    style={{
                      background: "rgba(217, 160, 102, 0.18)",
                      borderColor: "#C79A7D",
                      top: "12px",
                    }}
                  >
                    <FaExternalLinkAlt
                      className="text-2xl"
                      style={{ color: "#D9A066" }}
                    />
                  </a>
                </div>

                <div className="p-4">
                  <p className="text-sm text-white">
                    {isExpanded ? project.description : shortText}
                  </p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="mt-2 text-xs underline"
                    style={{ color: "#D9A066" }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
