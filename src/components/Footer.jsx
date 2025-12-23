import React, { useState, useEffect } from 'react';

export const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const currentContainer = isMobile 
        ? { ...styles.container, ...styles.mobileContainer } 
        : styles.container;
        
    const currentRightSection = isMobile 
        ? { ...styles.rightSection, ...styles.mobileSectionCentered } 
        : styles.rightSection;

    const currentLeftSection = isMobile
        ? { ...styles.leftSection, ...styles.mobileSectionCentered }
        : styles.leftSection;
    return (
        <footer style={styles.footer}>
            <div style={currentContainer}>
                <div style={styles.leftSection}>
                    <h3 style={styles.name}>Haniel Xuan</h3>
                    <p style={styles.copy}>© {new Date().getFullYear()} - Todos los derechos reservados.</p>
                </div>
            <div style={currentRightSection}>
                <p style={styles.connectText}>Conectemos:</p>
                <div style={styles.links}>
                    <a href="https://www.linkedin.com/in/haniel-xuan-lopez-cornelis-dwfe/" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
                    <a href="https://github.com/Hanielxlopezcornelis" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
                    <a href="mailto:hanielxuanlc@gmail.com" style={styles.link}>Email</a>
                </div>
            </div>
            </div>
        </footer>
    )
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a', 
    color: '#ffffff',
    padding: '2rem 0',
    marginTop: 'auto', 
    borderTop: '1px solid #333',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem',
    flexWrap: 'wrap', 
    gap: '1rem',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#61dafb', 
  },
  copy: {
    margin: '5px 0 0 0',
    fontSize: '0.9rem',
    color: '#888',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', 
  },
  connectText: {
    margin: '0 0 5px 0',
    fontSize: '0.9rem',
    color: '#ccc',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s',
  },
  mobileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '2rem',
  },
  mobileSectionCentered: {
    alignItems: 'center', 
    width: '100%',
  }
}

