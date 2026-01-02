export const AboutMe = () => {
  return (
    <section style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>
          Hola, soy <span style={styles.highlight}>Haniel Xuan</span>
        </h1>
        <h2 style={styles.subtitle}>
          Estudiante de Ingeniería en Informatica & Licenciatura en Artes Audiovisuales
        </h2>
        <p style={styles.description}>
          Capacidad para la gestión operativa y resolución lógica de problemas.
          Experiencia práctica en coordinación de recursos y manejo de bases de datos.
          Especialista en optimizar tareas administrativas utilizando Inteligencia Artificial para reducir tiempos de ejecución.
        </p>
        
        <div style={styles.buttonContainer}>
          <a href="/cv-haniel.pdf" download="CV_Haniel_Xuan_Lopez_Cornelis.pdf" rel="noopener noreferrer" style={styles.primaryButton}>Descargar CV</a>
          <a href="#contacto" style={styles.secondaryButton}>Contactar</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    color: '#e1e1e1',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center'
  },
  heroSection: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 1rem 0',
    fontWeight: '700'
  },
  highlight: {
    color: '#61dafb'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#aaaaaa',
    marginBottom: '1.5rem',
    fontWeight: '400'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#cccccc',
    maxWidth: '700px',
    margin: '0 auto 2rem auto'
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  primaryButton: {
    padding: '10px 25px',
    fontSize: '1rem',
    backgroundColor: '#61dafb',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block'
  },
  secondaryButton: {
    padding: '10px 25px',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    color: '#61dafb',
    border: '2px solid #61dafb',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block'
  }
};