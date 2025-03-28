import { useEffect, useState } from "react";

const CustomCursorComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [isTextActive, setIsTextActive] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1300);
    };

    const handleMouseMove = (e) => {
      if (!isLargeScreen) return;
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnterProject = () => {
      if (!isLargeScreen) return;
      setCursorText("View Details");
      setIsTextActive(true);
    };

    const handleMouseLeaveProject = () => {
      setCursorText("");
      setIsTextActive(false);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnterProject);
      card.addEventListener("mouseleave", handleMouseLeaveProject);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);

      projectCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnterProject);
        card.removeEventListener("mouseleave", handleMouseLeaveProject);
      });
    };
  }, [isLargeScreen]);

  if (!isLargeScreen) return null; // Hide cursor on small screens

  return (
    <div
      className={`cursor ${isHidden ? "cursor--off-screen" : "cursor--initialized"} ${isTextActive ? "cursor--large" : ""}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {cursorText && <span className="cursor-text fw-normal text-center">{cursorText}</span>}
    </div>
  );
};

export default CustomCursorComponent;
