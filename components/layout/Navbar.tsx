"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [activePath, setActivePath] = useState("#home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.path.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActivePath(`#${section}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: "1.5rem 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(3, 3, 5, 0.4)",
        backdropFilter: "blur(10px)"
      }}
    >
      <Link href="#home" style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "2px" }} className="glow-text text-gradient">
        NEXUS
      </Link>
      
      <div className="glass-panel hidden-mobile" style={{ display: "flex", gap: "2rem", padding: "0.8rem 2rem", borderRadius: "50px" }}>
        {navItems.map((item) => {
          const isActive = activePath === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              onClick={() => setActivePath(item.path)}
              style={{
                position: "relative",
                color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                fontWeight: isActive ? 600 : 400,
                transition: "color 0.3s ease",
                padding: "0.2rem 0"
              }}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--accent-color)",
                    boxShadow: "0 0 8px var(--accent-glow)",
                    borderRadius: "2px"
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
      
      <div>
        <button style={{ background: "transparent", border: "1px solid var(--accent-color)", color: "var(--accent-color)", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}
           onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-glow)"; e.currentTarget.style.color = "#fff"; }}
           onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent-color)"; }}
        >
          Resume
        </button>
      </div>
    </motion.nav>
  );
}
