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
      <div className='App' style={styles.appContainer}>
        <div id='sobre-mi'>
          <Header />
        </div>
        <main style={styles.mainContent}>
          <div>  
            <AboutMe />
          </div>

          <div id='experiencia'>
            <Experience />
          </div>
        
          <div id='educacion'>
            <Education />
          </div>
          
          <div id='habilidades'>
            <Skills />
          </div>
          
          <div id='proyectos'>
            <Projects />
          </div>

          <div id='contacto'>
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
  },
  mainContent: {
    paddingTop: '100px',
    flex: 1, 
  }
}

export default App
