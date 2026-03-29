"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Zap, Search, Activity, Terminal, Send } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Home() {
  const [sysLog, setSysLog] = useState<string[]>([]);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  
  // Terminal Boot Sequence Simulator
  useEffect(() => {
    const logs = [
      "INITIALIZING KERNEL...",
      "LOADING NEURAL NETWORKS...",
      "BYPASSING SECURITY PROTOCOLS...",
      "ACCESS GRANTED.",
      "WELCOME TO NEXUS_SYS v2.4"
    ];
    let i = 0;
    const interval = setInterval(() => {
      if(i < logs.length) {
        setSysLog(prev => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // GitHub Projects Fetcher
  useEffect(() => {
    async function fetchProjects() {
      try {
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
        setProjects([
          { id: 1, title: 'Quantum Compute Interface', description: 'Next-gen analytical processing node utilizing unconstrained variables.', repoUrl: '#', stars: 120, forks: 45, tags: ['React', 'Three.js'] },
          { id: 2, title: 'CyberNet Dashboard', description: 'Real-time global routing visualization deployed via cloud.', repoUrl: '#', stars: 89, forks: 12, tags: ['Next.js', 'Framer Motion'] },
          { id: 3, title: 'Neural DB Link', description: 'Hyper-fast decentralized storage access for unstructured inputs.', repoUrl: '#', stars: 256, forks: 80, tags: ['Rust', 'WebAssembly'] },
          { id: 4, title: 'Spectra Optics', description: 'Algorithmic refractor mimicking neural pathways in 3D space.', repoUrl: '#', stars: 54, forks: 9, tags: ['WebGL', 'GLSL'] }
        ] as any);
      } finally {
        setLoadingProjects(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div style={{ paddingBottom: '5rem' }}>
      
      {/* 1. HERO SECTION */}
      <section id="home" className="container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {/* Left HUD Strip */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
           style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '2rem' }}
           className="hidden-mobile"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
             <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, var(--accent-color))' }}></div>
             <Cpu size={24} color="var(--accent-color)" />
             <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '4px' }}>
                SYS.STATUS: ONLINE
             </p>
             <Activity size={24} color="var(--accent-color)" />
             <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to top, transparent, var(--accent-color))' }}></div>
          </div>
        </motion.div>

        {/* Hero Content Area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingLeft: 'var(--content-pad-left)', paddingRight: '1rem' }} className="home-layout">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ maxWidth: '650px', zIndex: 10 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(0, 255, 204, 0.1)', color: 'var(--accent-color)', borderRadius: '4px', border: '1px solid var(--accent-color)', fontSize: '0.8rem', letterSpacing: '2px' }}>
                LEVEL 10 ARCHITECT
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>
                LOC: SEC_04_ALPHA
              </span>
            </div>

            <h1 className="glow-text" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: '1', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Digital
              <br />
              <span className="text-gradient">Vanguard.</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6', borderLeft: '2px solid var(--glass-border)', paddingLeft: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '1rem 1rem 1rem 1.5rem', borderRadius: '0 8px 8px 0', backdropFilter: 'blur(4px)' }}>
              I architect immersive 3D experiences, engineer high-octane performance systems, and design interfaces that blur the lines between reality and the digital frontier.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="glass-panel" style={{ padding: '1rem 2.5rem', background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: '#fff', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px var(--accent-glow)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                INITIALIZE <Zap size={18} />
              </a>
              
              <a href="#about" className="glass-panel" style={{ padding: '1rem 2.5rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
              >
                LOCATE DATA <Search size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right HUD Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="glass-panel hidden-tablet right-cmd-panel"
            style={{ width: '380px', height: '420px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignSelf: 'center', borderRight: '2px solid var(--accent-color)', background: 'rgba(5, 5, 8, 0.6)', marginLeft: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <Terminal size={18} color="var(--accent-color)" />
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '1px', fontFamily: "'Space Grotesk', sans-serif" }}>SYSTEM_OVERRIDE</h3>
            </div>
            <div style={{ flexGrow: 1, fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--accent-color)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem', textShadow: '0 0 5px var(--accent-glow)' }}>
              {sysLog.map((log, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>[{new Date().toLocaleTimeString()}]</span> {log}
                </motion.div>
              ))}
              {sysLog.length === 5 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, repeat: Infinity, repeatType: "reverse", duration: 0.8 }} style={{ marginTop: '1rem' }}>
                  <span style={{ display: 'inline-block', width: '12px', height: '16px', background: 'var(--accent-color)' }}></span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '6rem' }}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
           transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <h2 className="glow-text text-gradient" style={{ fontSize: '3rem' }}>About System</h2>
            <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(to right, var(--accent-color), transparent)' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(10, 10, 15, 0.7)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Activity size={20} /> Background Core
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.05rem' }}>
                I am a passionate developer focusing on the intersection of engaging UI design, 3D web technologies, and scalable robust architectures. I love building digital experiences that evoke awe and leave a lasting visceral impression on users.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                My journey stems from a deep fascination with interactive digital media and complex algorithmic systems, evolving naturally into full-stack engineering.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', background: 'rgba(10, 10, 15, 0.7)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color-alt)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={20} /> Technology Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                 {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Three.js', 'WebGL', 'Framer Motion', 'Python', 'Rust'].map(tech => (
                   <span key={tech} style={{ padding: '0.6rem 1.2rem', background: 'rgba(0,0,0,0.4)', borderRadius: '8px', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', transition: 'all 0.3s' }}
                     onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,255,204,0.3)'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.boxShadow = 'none'; }}
                   >
                     {tech}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '8rem' }}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }}
           transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <h2 className="glow-text text-gradient" style={{ fontSize: '3rem' }}>Databases (Projects)</h2>
            <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(to right, var(--accent-color), transparent)' }}></div>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem' }}>
            An archive of my open-source work, visual experiments, and digital creations pulled directly from the global Git database.
          </p>

          {loadingProjects ? (
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '8rem' }}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0.95 } }}
           transition={{ duration: 0.6 }}
           className="glass-panel"
           style={{ width: '100%', maxWidth: '700px', padding: '4rem', background: 'rgba(5, 5, 10, 0.7)', border: '1px solid var(--accent-color)', boxShadow: '0 0 40px rgba(0, 255, 204, 0.1)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <Send size={40} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
            <h2 className="glow-text text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Initiate Contact</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
              Transmit a message to my neural inbox. I'll process the data and respond shortly.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', letterSpacing: '1px' }}>IDENTIFIER</label>
                <input type="text" id="name" className="glass-panel" style={{ padding: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none', transition: 'border 0.3s' }} placeholder="John Doe" onFocus={(e)=>e.currentTarget.style.borderColor='var(--accent-color)'} onBlur={(e)=>e.currentTarget.style.borderColor='var(--glass-border)'} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', letterSpacing: '1px' }}>RETURN PING</label>
                <input type="email" id="email" className="glass-panel" style={{ padding: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none', transition: 'border 0.3s' }} placeholder="john@example.com" onFocus={(e)=>e.currentTarget.style.borderColor='var(--accent-color)'} onBlur={(e)=>e.currentTarget.style.borderColor='var(--glass-border)'} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', letterSpacing: '1px' }}>DATA PACKET</label>
              <textarea id="message" rows={5} className="glass-panel" style={{ padding: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none', resize: 'vertical', transition: 'border 0.3s' }} placeholder="Message content..." onFocus={(e)=>e.currentTarget.style.borderColor='var(--accent-color)'} onBlur={(e)=>e.currentTarget.style.borderColor='var(--glass-border)'}></textarea>
            </div>

            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem', background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: '#fff', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '1rem', transition: 'all 0.3s', letterSpacing: '2px' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 25px var(--accent-color)'; e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'; e.currentTarget.style.background = 'var(--accent-glow)'; e.currentTarget.style.color = '#fff'; }}
            >
               TRANSMIT SECURELY
            </button>
          </form>
        </motion.div>
      </section>

    </div>
  );
}
