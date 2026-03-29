"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel"
        style={{ width: '100%', maxWidth: '600px', padding: '3rem' }}
      >
        <h1 className="glow-text text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Initiate Contact</h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
          Have a project in mind or want to collaborate? Send a transmission.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Identifier (Name)</label>
            <input type="text" id="name" className="glass-panel" style={{ padding: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }} placeholder="Enter your name" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Return Address (Email)</label>
            <input type="email" id="email" className="glass-panel" style={{ padding: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }} placeholder="Enter your email" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Transmission (Message)</label>
            <textarea id="message" rows={5} className="glass-panel" style={{ padding: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', resize: 'vertical' }} placeholder="Type your message here..."></textarea>
          </div>

          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: 'var(--accent-glow)', border: '1px solid var(--accent-color)', color: '#fff', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '1rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
          >
            <Send size={18} /> Transmit Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
