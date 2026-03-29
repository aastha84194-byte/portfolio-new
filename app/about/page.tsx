"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="glow-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span className="text-gradient">Me</span></h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Background</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              I am a passionate developer focusing on the intersection of engaging UI design, 3D web technologies, and scalable backend architectures. I love building digital experiences that evoke awe and leave a lasting impression.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              My journey started with a fascination for interactive media, which naturally grew into full-stack development. I continuously learn and adapt to the ever-evolving tech landscape.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color-alt)', marginBottom: '1rem' }}>Tech Stack</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
               {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Three.js', 'Framer Motion', 'TailwindCSS', 'PostgreSQL', 'Python'].map(tech => (
                 <span key={tech} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                   {tech}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
