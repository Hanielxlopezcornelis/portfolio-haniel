import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Experience }  from './components/Experience';
import { Skills } from './components/Skills';

function App() {
  return (
      <div style={{ backgroundColor: '#242424', minHeight: '100vh', color: 'white' }}>
        <Header />
        <main style={{ paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div id="experiencia">
            <Experience />
          </div>

          <div id="proyectos">
              <Projects />
          </div>

          <div id="habilidades">
              <Skills />
          </div>

          <div id="educacion">
              <Education />
          </div>
        </main>
      </div>
  )
}

export default App
