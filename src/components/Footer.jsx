export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.leftSection}>
                    <h3 style={styles.name}>Haniel Xuan</h3>
                    <p style={styles.copy}>© {new Date().getFullYear()} - Todos los derechos reservados.</p>
                </div>
            <div style={styles.rightSection}>
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
    backgroundColor: '#1a1a1a', // Mismo color que el Header
    color: '#ffffff',
    padding: '2rem 0',
    marginTop: 'auto', // Ayuda a que se empuje al fondo
    borderTop: '1px solid #333',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem',
    flexWrap: 'wrap', // Para que se adapte en celulares
    gap: '1rem',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#61dafb', // Azul React
  },
  copy: {
    margin: '5px 0 0 0',
    fontSize: '0.9rem',
    color: '#888',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // Alineado a la derecha
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
  }
}

