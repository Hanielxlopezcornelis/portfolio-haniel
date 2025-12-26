import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
      <div className='App' style={styles.appContainer} id='inicio'>
        <div>
          <Header />
        </div>
        <main style={styles.mainContent}>
          <div id='sobre-mi' style={styles.sectionWrapper}>  
            <AboutMe />
          </div>

          <div id='experiencia' style={styles.sectionWrapper}>
            <Experience />
          </div>

          <div id='educacion' style={styles.sectionWrapper}>
            <Education />
          </div>
          
          <div id='habilidades' style={styles.sectionWrapper}>
            <Skills />
          </div>
          
          <div id='proyectos'>
            <Projects />
          </div>

          <div id='contacto' >
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
  )
}

const styles = {
  appContainer: {
    backgroundColor: '#242424',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column', 
    cursor: 'default',
    userSelect: 'none',      
    WebkitUserSelect: 'none',
  },
  mainContent: {
    paddingTop: '100px',
    flex: 1, 
  },
  sectionWrapper: {
    scrollMarginTop: '75px' 
  }
}

export default App
