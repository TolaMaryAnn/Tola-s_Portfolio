

import { useMemo } from "react";
import ProfilePic from "../assets/1763054692778-removebg-preview.png";

function Profile() {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.5 ? "#D9A066" : "#C79A7D",
      size: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center px-4 sm:px-6 overflow-hidden bg-black/10">
    
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
              opacity: star.opacity,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

     
      <div
        className="absolute -top-32 -left-20 w-72 h-72 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: "#7B4B35" }}
      />
      <div
        className="absolute top-40 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float-slower"
        style={{ background: "#C79A7D" }}
      />
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-[100px] animate-float-slowest"
        style={{ background: "#D9A066" }}
      />

     
      <div
        className="relative w-full max-w-4xl rounded-3xl border shadow-xl py-24 px-6 sm:px-10 text-center mt-28 sm:mt-32 backdrop-blur-xl"
        style={{ borderColor: "#7B4B35", backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        
        <div
  className="absolute left-1/2 -top-16 sm:-top-20 -translate-x-1/2 w-40 h-40 rounded-full overflow-hidden shadow-2xl animate-shake"
  style={{
    border: "6px solid #C79A7D",
    boxShadow: "0 0 35px rgba(199,154,125,0.35)",
  }}
>
  <img
     src={ProfilePic}
              alt="Profile"
    className="w-full h-full object-cover bg-[#BFA18F]"
  />
</div>


        <h1
          className="text-3xl sm:text-5xl font-bold mt-20 sm:mt-10 mb-4 sm:mb-6"
          style={{ color: "#D9A066" }}
        >
          MaryAnn Omotola Ojegbile 👋🏾
        </h1>

        <p className="text-base sm:text-xl text-white leading-relaxed mb-4 sm:mb-6">
          I love taking ideas apart and rebuilding them into something cleaner,
          smarter, and more beautiful.
        </p>

        <p className="text-base sm:text-xl text-white leading-relaxed max-w-3xl mx-auto">
          "Through personal projects and gigs 🙂, I’ve experimented with a
          variety of creative and technical challenges, learning how to craft
          experiences that are intuitive, meaningful, and user-focused."
        </p>
      </div>
    </section>
  );
}

export default Profile;
