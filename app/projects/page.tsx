"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // We do a generic fetch. Modify username here as needed.
        const res = await fetch('https://api.github.com/users/aastha84194-byte/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const formattedProjects = data.map((repo: any) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "A futuristic project built with passion.",
          repoUrl: repo.html_url,
          demoUrl: repo.homepage,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          tags: [repo.language].filter(Boolean)
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error(error);
        // Fallback mock futuristic projects
        setProjects([
          { id: 1, title: 'Quantum Compute Interface', description: 'Next-gen analytical processing node.', repoUrl: '#', stars: 120, forks: 45, tags: ['React', 'Three.js'] },
          { id: 2, title: 'CyberNet Dashboard', description: 'Real-time global routing visualization.', repoUrl: '#', stars: 89, forks: 12, tags: ['Next.js', 'Framer Motion'] },
          { id: 3, title: 'Neural DB Link', description: 'Hyper-fast decentralized storage access.', repoUrl: '#', stars: 256, forks: 80, tags: ['Rust', 'WebAssembly'] }
        ] as any);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="glow-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>My <span className="text-gradient">Projects</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem' }}>
          An archive of my open-source work, experiments, and digital creations pulled directly from the Git database.
        </p>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid var(--glass-border)', borderTopColor: 'var(--accent-color)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {projects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
