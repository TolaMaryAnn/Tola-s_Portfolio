import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import profileIllustration from "../assets/1763054632167-removebg-preview.png";

const SplashPage: React.FC = () => {
  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  type Glitter = {
    left: string;
    top: string;
    size: string;
    delay: string;
  };

  const [glitters, setGlitters] = useState<Glitter[]>([]);

  useEffect(() => {
    const items: Glitter[] = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 3}s`,
    }));

    setGlitters(items);
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-between bg-[#4E3629] text-black p-2 relative overflow-hidden">
      {glitters.map((g, i) => (
        <span
          key={i}
          className="absolute bg-yellow-200 rounded-full animate-glitter"
          style={{
            left: g.left,
            top: g.top,
            width: g.size,
            height: g.size,
            animationDelay: g.delay,
          }}
        ></span>
      ))}

      <div
        className={`w-full mb-8 transition-all duration-1000 ease-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        {/* Mobile */}
        <div className="flex flex-col items-center sm:hidden space-y-2">
          <div className="flex flex-col items-center justify-center bg-[#A36D5C] p-2 rounded-lg shadow-md">
            <p className="text-xs tracking-wide uppercase text-[#7B4B35]">
              {weekday}
            </p>
            <div className="flex items-center space-x-1">
              <span className="text-xl text-gray-200 font-bold">{day}</span>
              <span className="text-sm text-gray-200">{month}</span>
              <span className="text-sm text-[#7B4B35]">{year}</span>
            </div>
            <div className="mt-1 w-8 h-1 bg-[#7B4B35] rounded-full"></div>
          </div>

          <h1 className="text-2xl text-white mt-4 font-bold text-center">
            Tola 🤎 &#9889;
          </h1>
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex w-full justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-gray-200 font-bold">
            Tola 🤎 &#9889;
          </h1>
          <div className="flex flex-col items-center justify-center bg-[#A36D5C] p-2 rounded-lg shadow-md">
            <p className="text-xs md:text-sm tracking-wide uppercase text-[#7B4B35]">
              {weekday}
            </p>
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="text-xl text-gray-200 md:text-2xl font-bold">
                {day}
              </span>
              <span className="text-sm text-gray-200 md:text-base">
                {month}
              </span>
              <span className="text-sm md:text-base text-[#7B4B35]">
                {year}
              </span>
            </div>
            <div className="mt-1 w-8 h-1 bg-[#7B4B35] rounded-full"></div>
          </div>
        </div>
      </div>

      <div
        className={`relative flex justify-center items-center mt-6 sm:mt-12 w-full transition-all duration-1000 ease-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl text-gray-200 xs:text-5xl sm:text-6xl md:text-7xl lg:text-[12rem] font-extrabold text-center relative z-10 leading-none">
          PORTFOLIO
        </h2>

        <img
          src={profileIllustration}
          alt="Profile Illustration"
          className="absolute w-20 xs:w-24 sm:w-28 md:w-36 lg:w-48 h-auto z-20 top-0 left-0"
          style={{
            transformOrigin: "top left",
            animation: "swing 2s ease-in-out infinite",
          }}
        />

        <style>
          {`
          img {
            transform: translate(-10%, -35%);
          }
          @media (min-width: 640px) {
            img {
              transform: translate(-30%, -20%);
            }
          }

          @keyframes swing {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(8deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-8deg); }
          }

          @keyframes glitter {
            0%, 100% { opacity: 0.2; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          .animate-glitter {
            animation: glitter 2s infinite ease-in-out alternate;
          }
          `}
        </style>
      </div>

      {/* Social icons */}
      <div
        className={`flex flex-wrap justify-center gap-4 sm:gap-10 lg:mt-18 mt-8 transition-all duration-1000 ease-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {[FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp].map((Icon, i) => (
          <a
            key={i}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#C79A7D] text-gray-200 rounded-full p-2 sm:p-3 hover:text-[#7B4B35] transition-all duration-300"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        ))}
      </div>

      <Link
        to="/home"
        className={` self-end inline-flex items-center px-5 py-3 
    bg-gradient-to-r from-[#7B4B35] to-[#C79A7D] 
    text-gray-200 text-sm md:text-base font-semibold 
    rounded-full shadow-lg hover:shadow-xl 
    transition-all duration-300 group
    mt-4 sm:mt-0
    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
  `}
      >
        <span className="mr-2 inline-block animate-bounce text-[#D9A066]">
          ⤵
        </span>
        Enter Portfolio
      </Link>
    </div>
  );
};

export default SplashPage;
