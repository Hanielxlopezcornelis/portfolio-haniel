import { Header } from './components/Header';
import { Body } from './components/Body';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
      <div className='App' style={styles.appContainer}>
        <div id='inicio'>
          <Header />
        </div>
        <main style={styles.mainContent}>
          <div id='sobre-mi'>  
          <Body />
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
