export const Experience = () => {
  const experiences = [
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
  ];

  return (
    <section style={styles.container}>
        <h3 style={styles.sectionTitle}>Experiencia Profesional</h3>
        <div style={styles.timeline}>
            {experiences.map((exp) => (
                <div key={exp.id} style={styles.timelineItem}>
                    <div style={styles.timelineContent} className="hover-effect">
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
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    color: '#e1e1e1'
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
  taskList: { 
    paddingLeft: '1.2rem', 
    color: '#ccc' 
  },
  taskItem: { 
    marginBottom: '0.5rem' 
  }
}