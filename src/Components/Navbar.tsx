import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${scrolled
                ? "translate-y-0 opacity-100 bg-black/80 backdrop-blur-xl border-b border-[#7B4B35]/40 shadow-lg py-4"
                : "-translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
                <div
                    className="text-2xl font-bold font-montserrat tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D9A066] to-[#C79A7D] cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    Tola ⚡
                </div>
                <div className="hidden sm:flex space-x-10 items-center">
                    {["Skills", "Projects", "Contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase())}
                            className="relative text-gray-200 text-sm font-medium tracking-wider uppercase group hover:text-[#D9A066] transition-colors"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#D9A066] transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
