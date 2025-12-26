export const Education = () => {
  const education = [
    {
      id: 1,
      year: "2025 - En curso",
      title: "Licenciatura en Artes Audiovisuales",
      institution: "Universidad Nacional de Avellaneda (UNDAV)",
      desc: "Enfoque: Producción, Gestión de recursos y Comunicación efectiva."
    },
    {
      id: 2,
      year: "2023 - En curso",
      title: "Ingeniería en Informática",
      institution: "Universidad Nacional de Avellaneda (UNDAV)",
      desc: "Enfoque: Lógica de programación, Bases de datos y Organización de sistemas."
    }
  ];

  return (
    <section style={styles.container}>
      <h3 style={styles.sectionTitle}>Educación</h3>
      <div style={styles.timeline}>
        {education.map((edu) => (
          <div key={edu.id} style={styles.timelineItem}>
            <div style={styles.timelineDot}></div>
            <div style={styles.timelineContent} className="hover-effect">
              <span style={styles.yearBadge}>{edu.year}</span>
              <h4 style={styles.cardTitle}>{edu.title}</h4>
              <span style={styles.institution}>{edu.institution}</span>
              <p style={styles.textDesc}>{edu.desc}</p>
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
    background: 'linear-gradient(to bottom, transparent 12px, #61dafb 12px)', 
    backgroundSize: '3px 100%',     
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
  },
  timelineItem: {
    marginBottom: '3rem', 
    position: 'relative' 
  },
  timelineDot: {
    position: 'absolute',
    left: '-39px', 
    top: '5px',      
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
  }
}