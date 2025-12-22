export const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: "Juego de Cartas: Truco",
      description: "Desarrollo en C++ que simula una partida contra una Inteligencia Artificial. Implementé un 'Bot Estratégico' con algoritmos de decisión para desafiar al usuario. El sistema gestiona la lógica de turnos, validación de reglas y estados del juego en consola.",
      tech: ["C++", "CodeBlocks", "Lógica de Algoritmos"],
      link: "https://github.com/Hanielxlopezcornelis/truco-cpp-game.git", 
      status: "Finalizado"
    },
    {
      id: 2,
      title: "Portfolio Profesional",
      description: "Plataforma web personal para exhibición de trayectoria y habilidades. Diseño responsivo con arquitectura de componentes reutilizables.",
      tech: ["React", "Vite", "JavaScript", "CSS-in-JS"],
      link: "https://github.com/Hanielxlopezcornelis/portfolio-haniel.git",
      status: "En desarrollo"
    }
  ]

  return (
    <section style={styles.projectsSection}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Proyectos Destacados</h2>
        
        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.card}>
              
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <span style={styles.statusBadge}>{project.status}</span>
              </div>
              
              <p style={styles.description}>{project.description}</p>
             
              <div style={styles.techStack}>
                {project.tech.map((t, index) => (
                  <span key={index} style={styles.tag}>{t}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
                Ver Código <span>→</span>
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const styles = {
  projectsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#1e1e1e', 
    color: '#e1e1e1',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    borderBottom: '2px solid #61dafb',
    display: 'inline-block',
    paddingBottom: '10px',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '3rem',
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #333',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#ffffff',
    margin: 0,
    fontWeight: 'bold',
  },
  statusBadge: {
    fontSize: '0.8rem',
    padding: '4px 8px',
    borderRadius: '12px',
    backgroundColor: '#333',
    color: '#61dafb',
    border: '1px solid #61dafb',
  },
  description: {
    fontSize: '1rem',
    color: '#cccccc',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  tag: {
    backgroundColor: 'rgba(97, 218, 251, 0.1)',
    color: '#61dafb',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  linkButton: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    alignSelf: 'flex-start', 
  }
}