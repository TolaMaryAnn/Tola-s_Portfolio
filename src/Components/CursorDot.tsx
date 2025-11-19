import React, { useEffect, useRef } from "react";

const CursorDot: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouse.current = { x: touch.clientX, y: touch.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15; // smooth interpolation
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 12}px, ${
          pos.current.y - 12
        }px)`;
      }

      requestAnimationFrame(animate);
    };

    animate(); // start the loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed w-4 h-4 rounded-full bg-[#7B4B35] z-50 shadow-lg"
    />
  );
};

export default CursorDot;
