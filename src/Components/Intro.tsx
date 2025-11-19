import React, { useMemo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Intro: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleClick = () => {
    setLoaded(false);
    setTimeout(() => setLoaded(true), 50);
  };

  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 4,
      color: Math.random() > 0.5 ? "#D9A066" : "#C79A7D",
      opacity: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  const blobs = useMemo(
    () => [
      {
        top: "-32px",
        left: "-80px",
        size: "w-72 h-72",
        color: "#7B4B35",
        anim: "animate-float-slow",
      },
      {
        top: "160px",
        right: "-80px",
        size: "w-80 h-80",
        color: "#C79A7D",
        anim: "animate-float-slower",
      },
      {
        bottom: "80px",
        left: "50%",
        size: "w-96 h-96",
        color: "#D9A066",
        anim: "animate-float-slowest",
        translate: "-translate-x-1/2",
      },
    ],
    []
  );

  const fullText = "Hey, I am Tola 🤎⚡";
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`relative py-6 lg:min-h-screen lg:w-full text-white overflow-hidden
        transition-all duration-1000 ease-out
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute ${b.size} rounded-full opacity-20 blur-3xl ${
            b.anim
          } animate-twinkle ${b.translate || ""}`}
          style={{
            top: b.top,
            bottom: b.bottom,
            left: b.left,
            right: b.right,
            background: b.color,
          }}
        />
      ))}

      <div className="absolute top-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 flex items-center space-x-4 bg-black/30 px-10 py-4 rounded-full backdrop-blur-md border border-[#7B4B35]/40 whitespace-nowrap">
        <button
          onClick={() => {
            document.getElementById("skills")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-sm font-medium hover:text-[#C79A7D] hover:text-base transition-all duration-300"
        >
          Skills
        </button>

        <button
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-sm font-medium hover:text-[#C79A7D] hover:text-base transition-all duration-300"
        >
          Projects
        </button>

        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-sm font-medium hover:text-[#C79A7D] hover:text-base transition-all duration-300"
        >
          Contact Me
        </button>
      </div>

      <div className="hidden sm:flex absolute top-6 right-6 space-x-4">
        {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
          <div
            key={i}
            className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center border border-[#7B4B35]/40 
              hover:border-[#C79A7D] transform transition duration-500 ease-out 
              hover:-translate-y-2 hover:scale-110 hover:rotate-6"
          >
            <Icon className="text-[#C79A7D] text-4xl" />
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center text-center h-full px-4 md:px-20 pt-28 md:pt-32">
        <h1 className="text-4xl md:text-7xl lg:text-8xl mt-24 lg:mt-18 font-bold leading-tight text-[#C79A7D]">
          {displayText}
        </h1>

        <p className="text-xl md:text-3xl mt-4 bg-gradient-to-r from-[#D9A066] via-[#C79A7D] to-[#7B4B35] bg-clip-text text-transparent">
          Frontend Engineer • Web3 Developer
        </p>

        <div className="lg:mt-20 mt-20">
          <p className="text-xs tracking-widest text-[#C79A7D] mb-3">
            MY RESUME
          </p>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/MaryAnn_Omotola_Ojegbile.pdf";
              link.download = "MaryAnn_Omotola_Ojegbile.pdf";
              link.target = "_blank";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="
  mt-2 px-6 py-3 bg-black/50 border border-[#7B4B35]/40 rounded-xl hover:bg-[#C79A7D] hover:text-black transition font-semibold text-sm inline-block text-center cursor-pointer
  "
          >
            <span className="transform hover:scale-125 transition-transform duration-300">
              📄
            </span>
            DOWNLOAD
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#7B4B35]/20"></div>
    </div>
  );
};

export default Intro;
