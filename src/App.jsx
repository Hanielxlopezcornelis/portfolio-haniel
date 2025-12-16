import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  return (
      <div style={{ backgroundColor: '#242424', minHeight: '100vh', color: 'white' }}>
        <Header />
        <main style={{ paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem' }}>
          <Body />
        </main>
      </div>
  )
}

export default App
