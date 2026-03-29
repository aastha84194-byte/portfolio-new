"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
  tags: string[];
}

export default function ProjectCard({ title, description, repoUrl, demoUrl, stars = 0, forks = 0, tags }: ProjectCardProps) {
  return (
    <motion.div
      className="glass-panel"
      whileHover={{ y: -10, boxShadow: "0 10px 30px var(--accent-glow)" }}
      transition={{ duration: 0.3 }}
      style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{title}</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--accent-color)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>
              <ExternalLink size={20} />
            </a>
          )}
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.color='var(--accent-color)'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}>
            <Terminal size={20} />
          </a>
        </div>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>{description}</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {tags && tags.map((tag) => (
          <span key={tag} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(0, 255, 204, 0.1)', color: 'var(--accent-color)', borderRadius: '4px' }}>
            {tag}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Star size={16} /> {stars}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <GitFork size={16} /> {forks}
        </div>
      </div>
    </motion.div>
  );
}
