import { Header } from './components/Header';

function App() {
  return (
      <div style={{ backgroundColor: '#242424', minHeight: '100vh', color: 'white' }}>
        <Header />
        <main style={{ paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem' }}>
          <h2>Bienvenido al Portfolio</h2>
          <p>Esta es la estructura base. El header está cargado arriba.</p>
        </main>
      </div>
  )
}

export default App
