import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const currentNavStyle = isMobile 
    ? { ...styles.navUl, ...styles.mobileNav, ...(isOpen ? styles.mobileNavOpen : styles.mobileNavClosed) }
    : styles.navUl;
  return (
    <header style={styles.header}>
        <div style={styles.logoContainer}>
          <a href="#inicio" style={{ textDecoration: 'none' }}>
            <h1 style={styles.logoText}>HXLC</h1>
          </a>
        </div>

        

        <nav style={styles.navContainer}>
          {isMobile && (
            <button style={styles.hamburger} onClick={toggleMenu}>
                <span style={styles.bar}></span>
                <span style={styles.bar}></span>
                <span style={styles.bar}></span>
            </button>
          )}

            <ul style={currentNavStyle}>
                <li style={styles.navLi}><a href="#sobre-mi" style={styles.link} onClick={toggleMenu}>Sobre Mi</a></li>
                <li style={styles.navLi}><a href="#experiencia" style={styles.link} onClick={toggleMenu}>Experiencia</a></li>
                <li style={styles.navLi}><a href="#educacion" style={styles.link} onClick={toggleMenu}>Educacion</a></li>
                <li style={styles.navLi}><a href="#habilidades" style={styles.link} onClick={toggleMenu}>Habilidades</a></li>
                <li style={styles.navLi}><a href="#proyectos" style={styles.link} onClick={toggleMenu}>Proyectos</a></li>
                <li style={styles.navLi}><a href="#contacto" style={styles.link} onClick={toggleMenu}>Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

const styles = {
    header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 2rem',
    backgroundColor: '#1a1a1a', 
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1001,
  },
  logoText: {
    color: '#61dafb', 
    margin: 0,
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', 
  },
  navUl: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem', 
    margin: 0,
    padding: 0,
    transition: 'all 0.3s ease-in-out',
  },
  navLi: {
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '1rem',
    fontFamily: 'Arial, sans-serif',
    fontWeight: '500',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '21px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1002,
    padding: 0,
  },
  bar: {
    width: '100%',
    height: '3px',
    backgroundColor: '#61dafb',
    borderRadius: '3px',
  },
  mobileNav: {
    position: 'absolute',
    top: '70px',
    left: 0,
    width: '100%',
    backgroundColor: '#1a1a1a',
    flexDirection: 'column', 
    alignItems: 'center',
    padding: '2rem 0',
    boxShadow: '0 10px 10px rgba(0,0,0,0.2)',
  },
  mobileNavClosed: {
    display: 'none',
  },
  mobileNavOpen: {
    display: 'flex',
  }
}