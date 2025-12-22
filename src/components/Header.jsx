export const Header = () => {
  return (
    <header style={styles.header}>
        <div style={styles.logoContainer}>
          <a href="#inicio" style={{ textDecoration: 'none' }}>
            <h1 style={styles.logoText}>Haniel Xuan López Cornelis</h1>
          </a>
        </div>
        <nav>
            <ul style={styles.navUl}>
                <li style={styles.navLi}><a href="#sobre-mi" style={styles.link}>Sobre Mi</a></li>
                <li style={styles.navLi}><a href="#experiencia" style={styles.link}>Experiencia</a></li>
                <li style={styles.navLi}><a href="#educacion" style={styles.link}>Educacion</a></li>
                <li style={styles.navLi}><a href="#habilidades" style={styles.link}>Habilidades</a></li>
                <li style={styles.navLi}><a href="#proyectos" style={styles.link}>Proyectos</a></li>
                <li style={styles.navLi}><a href="#contacto" style={styles.link}>Contacto</a></li>
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
  },
  logoText: {
    color: '#61dafb', 
    margin: 0,
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
  },
  navUl: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem', 
    margin: 0,
    padding: 0,
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
  }
}