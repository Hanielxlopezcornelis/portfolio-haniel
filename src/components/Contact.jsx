export const Contact = () => {
  return (
    <section style={styles.contactSection}>
      <div style={styles.container}>
        
        <h2 style={styles.sectionTitle}>Contacto</h2>
        
        <div style={styles.contentWrapper}>
          
          <div style={styles.infoColumn}>
            <h3 style={styles.subTitle}>¡Hablemos!</h3>
            <p style={styles.text}>
              Estoy interesado en oportunidades de desarrollo, logística y automatización. 
              Si tienes un proyecto o una vacante, no dudes en escribirme.
            </p>
            
            <div style={styles.contactItem}>
              <span style={styles.icon}>📧</span>
              <span>tu-email@ejemplo.com</span>
            </div>
            
            <div style={styles.contactItem}>
              <span style={styles.icon}>📍</span>
              <span>Buenos Aires, Argentina</span>
            </div>

            <div style={styles.contactItem}>
              <span style={styles.icon}>💼</span>
              <span>Disponible para trabajar</span>
            </div>
          </div>

          <form style={styles.formColumn} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre</label>
              <input type="text" style={styles.input} placeholder="Tu nombre" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" style={styles.input} placeholder="tucorreo@ejemplo.com" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Mensaje</label>
              <textarea style={styles.textarea} rows="5" placeholder="¿En qué puedo ayudarte?"></textarea>
            </div>

            <button type="submit" style={styles.button}>Enviar Mensaje</button>
          </form>

        </div>
      </div>
    </section>
  );
};

const styles = {
  contactSection: {
    padding: '4rem 2rem',
    backgroundColor: '#242424',
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
  contentWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    justifyContent: 'center',
  },
  infoColumn: {
    flex: '1',
    minWidth: '300px',
  },
  subTitle: {
    fontSize: '1.8rem',
    color: '#ffffff',
    marginBottom: '1rem',
  },
  text: {
    color: '#cccccc',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    fontSize: '1.1rem',
  },
  icon: {
    fontSize: '1.5rem',
  },
  
  formColumn: {
    flex: '1',
    minWidth: '300px',
    backgroundColor: '#2a2a2a',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#61dafb',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '1rem',
    boxSizing: 'border-box', 
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#61dafb',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
}