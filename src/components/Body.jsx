export const Body = () => {
  const experiences =[
    {
      id: 1,
      year: "2025 - Presente",
      role: "Coordinador de Logística y Recursos",
      subRole: "",
      tasks: [
        "Gestión de recursos y stock: Relevamiento y adquisición de materiales.",
        "Control y Planificación: Armado y control de calidad de pedidos.",
        "Coordinación de Agenda: Sincronización de cronogramas con herramientas colaborativas."
      ]
    },
    {
      id: 2,
      year: "2023 - Presente",
      role: "Desarrollador de Lógica y Documentación Técnica",
      subRole: "",
      tasks: [
        "Estandarización de Procesos: Redacción de documentación técnica clara.",
        "Lógica de Sistemas: Diseño de diagramas de flujo y algoritmos de decisión.",
        "Trabajo Colaborativo: Gestión de repositorios y versiones de proyecto."
      ]
    }
  ]

  const education = [
    {
      id: 1,
      year: "2023 - En curso",
      title: "Ingeniería en Informática",
      institution: "Universidad Nacional de Avellaneda (UNDAV)",
      desc: "Enfoque: Lógica de programación, Bases de datos y Organización de sistemas."
    },
    {
      id: 2,
      year: "2025 - En curso",
      title: "Licenciatura en Artes Audiovisuales",
      institution: "Universidad Nacional de Avellaneda (UNDAV)",
      desc: "Enfoque: Producción, Gestión de recursos y Comunicación efectiva."
    }
  ]

  const skills =[
    { category: "Sistemas & Office", 
      items: ["Google Sheets (Avanzado)", 
              "Fórmulas & Filtros", 
              "Google Drive", 
              "Trello"]
    },
    { category: "Inteligencia Artificial", 
      items: ["Ingeniería de Prompts",
              "Gemini / ChatGPT", 
              "Automatización de Tareas"] 

    },
    { category: "Gestión & Lógica", 
      items: ["Lógica de Inventario",
              "Diagramas de Flujo",
              "Optimización de Procesos",
              "Redacción Técnica"] 
    }
  ]
  
  return (
    <section style={styles.bodyContainer} id="inicio">
      
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
          <button style={styles.primaryButton}>Descargar CV</button>
          <button href="#contacto" style={styles.secondaryButton}>Contactar</button>
        </div>
      </div>

      <div style={styles.sectionContainer}>
        <h3 style={styles.sectionTitle}>Experiencia Profesional</h3>

        <div style={styles.timeline}>
            {experiences.map((exp) => (
                <div key={exp.id} style={styles.timelineItem}>
                    <div style={styles.timelineContent}>
                        <span style={styles.yearBadge}>{exp.year}</span>
                        <h4 style={styles.cardTitle}>{exp.role}</h4>
                        {exp.subRole && <span style={styles.cardSubtitle}>{exp.subRole}</span>}
                        <ul style={styles.taskList}>
                            {exp.tasks.map((task, index) => (
                                <li key={index} style={styles.taskItem}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div style={styles.sectionContainer}>
        <h3 style={styles.sectionTitle}>Educación</h3>
        <div style={styles.timeline}>
          {education.map((edu) => (
            <div key={edu.id} style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.timelineContent}>
                <span style={styles.yearBadge}>{edu.year}</span>
                <h4 style={styles.cardTitle}>{edu.title}</h4>
                <span style={styles.institution}>{edu.institution}</span>
                <p style={styles.textDesc}>{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.sectionContainer}>
        <h3 style={styles.sectionTitle}>Habilidades Técnicas</h3>
        <div style={styles.skillsGrid}>
          {skills.map((skillGroup, index) => (
            <div key={index} style={styles.skillCard}>
              <h4 style={styles.skillCategory}>{skillGroup.category}</h4>
              <div style={styles.tagsContainer}>
                {skillGroup.items.map((item, i) => (
                  <span key={i} style={styles.skillTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    color: '#e1e1e1',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '6rem'
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
    fontWeight: 'bold'
  },
  secondaryButton: {
    padding: '10px 25px',
    backgroundColor: 'transparent',
    color: '#61dafb',
    border: '2px solid #61dafb',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  sectionContainer: {
    width: '100%',
    marginBottom: '4rem'
  },
  sectionTitle: {
    fontSize: '2rem', 
    borderBottom: '2px solid #61dafb', 
    paddingBottom: '0.5rem', 
    marginBottom: '3rem', 
    display: 'inline-block'
  },
  timeline: {
    position: 'relative',
    paddingLeft: '30px',
    borderLeft: '3px solid #61dafb'
  },
  timelineItem: {
    marginBottom: '3rem', 
    position: 'relative' 
  },
  timelineDot: {
    position: 'absolute',
    left: '-39px', 
    top: '0',
    width: '15px',
    height: '15px',
    backgroundColor: '#1a1a1a',
    border: '3px solid #61dafb',
    borderRadius: '50%'
  },
  timelineContent: {
    backgroundColor: '#2a2a2a',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)', 
    position: 'relative',
    top: '-5px'
  },
  yearBadge: {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#61dafb',
    color: '#1a1a1a',
    borderRadius: '4px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  cardTitle: { 
    color: '#ffffff', 
    fontSize: '1.4rem', 
    margin: '0 0 0.5rem 0'
  },
  cardSubtitle: { 
    display: 'block', 
    fontSize: '0.95rem', 
    color: '#888',
    marginBottom: '1rem', 
    fontStyle: 'italic'
  },
  institution: { 
    display: 'block', 
    fontSize: '1rem', 
    color: '#61dafb', 
    marginBottom: '0.5rem', 
    fontWeight: 'bold' 
  },
  textDesc: { 
    fontSize: '1rem', 
    color: '#ccc' 
  },
  taskList: { 
    paddingLeft: '1.2rem', 
    color: '#ccc' 
  },
  taskItem: { 
    marginBottom: '0.5rem' 
  },
  skillsGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
    gap: '2rem' 
  },
  skillCard: { 
    backgroundColor: '#2a2a2a', 
    padding: '1.5rem', 
    borderRadius: '10px', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)', 
    borderTop: '3px solid #61dafb' 
  },
  skillCategory: { 
    fontSize: '1.2rem', 
    marginBottom: '1rem', 
    color: '#ffffff', 
    textAlign: 'center' 
  },
  tagsContainer: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '0.5rem', 
    justifyContent: 'center' 
  },
  skillTag: { 
    padding: '5px 10px', 
    backgroundColor: '#333', 
    color: '#61dafb', 
    borderRadius: '15px', 
    fontSize: '0.9rem', 
    border: '1px solid #444' 
  }
};