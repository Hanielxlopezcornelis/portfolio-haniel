import { Header } from './components/Header';
import { Body } from './components/Body';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';


function App() {
  return (
      <div style={styles.appContainer}>
        <Header />
        <main style={styles.mainContent}>
          <Body />
          <Projects />
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
