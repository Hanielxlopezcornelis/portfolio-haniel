const Skills = () => {
  const skills = [
    { 
      category: "Sistemas & Office", 
      items: ["Google Sheets (Avanzado)", "Fórmulas & Filtros", "Google Drive", "Trello"]
    },
    { 
      category: "Inteligencia Artificial", 
      items: ["Ingeniería de Prompts", "Gemini / ChatGPT", "Automatización de Tareas"] 
    },
    { 
      category: "Gestión & Lógica", 
      items: ["Lógica de Inventario", "Diagramas de Flujo", "Optimización de Procesos", "Redacción Técnica"] 
    }
  ];

  return (
    <section style={styles.container}>
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

export default Skills;