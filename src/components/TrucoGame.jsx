import React, { useEffect, useState, useRef } from 'react';

const TrucoGame = () => {
  const [lines, setLines] = useState([
    "Microsoft Windows [Versión 10.0.19045.5011]",
    "(c) Microsoft Corporation. Reservados todos los derechos.",
    "",
    "C:\\Users\\Haniel> cd Documents\\GitHub\\truco-cpp",
    "C:\\Users\\Haniel\\Documents\\GitHub\\truco-cpp> Truco.exe",
    "Escriba su apodo: Haniel",
    "----------------------------------------------------------",
    "Tus cartas actuales: 1: 11Espada, 2: 2Espada, 3: 11Basto",
    "Se canta TRUCO? (s/n): "
  ]);
  const [inputValue, setInputValue] = useState("");
  const [motorListo, setMotorListo] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    window.Module = {
      locateFile: (path) => path.endsWith('.wasm') ? '/wasm/truco_engine.wasm' : path,
      onRuntimeInitialized: () => {
        setMotorListo(true);
        window.trucoModule = window.Module;
      }
    };
    // Carga del script (solo una vez)
    if (!document.getElementById('truco-script')) {
      const script = document.createElement('script');
      script.id = 'truco-script';
      script.src = '/wasm/truco_engine.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && motorListo) {
      const cmd = inputValue.toLowerCase();
      let response = "";

      if (cmd === 's' || cmd === 'n') {
        response = cmd === 's' ? "La máquina acepta el TRUCO" : "No se cantó truco.";
        setLines(prev => [...prev, cmd, response, "Seleccione del 1 al 3 la carta a jugar: "]);
      } else if (['1', '2', '3'].includes(cmd)) {
        // Aquí llamamos a tu motor de C++ real
        const valorBot = window.trucoModule._bot_decide_jugada_web(0);
        const cartaHumano = cmd === '1' ? "11Espada" : cmd === '2' ? "2Espada" : "11Basto";
        
        setLines(prev => [
          ...prev, 
          cmd,
          `${cartaHumano} VS Carta Bot GANO: Jugador 2`,
          "GANADOR: truquini (Jugador 2)",
          "----------------------------------------------------------",
          "Process returned 0 (0x0)  execution time : 0.125 s",
          "Press any key to restart..."
        ]);
      } else {
        setLines(prev => [...prev, cmd, "Comando no reconocido. Reintente (s/n o 1-3): "]);
      }
      setInputValue("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.dots}><span/><span/><span/></div>
        <span style={styles.title}>C:\Users\Haniel\Truco.exe</span>
      </div>
      <div ref={terminalRef} style={styles.terminal} onClick={() => document.getElementById('term-input').focus()}>
        {lines.map((line, i) => <div key={i}>{line}</div>)}
        <div style={{display: 'flex'}}>
          <span style={{color: '#fff', marginRight: '5px'}}></span>
          <input
            id="term-input"
            autoFocus
            style={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleCommand}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { marginTop: '15px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
  header: { backgroundColor: '#333', padding: '5px 15px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #444' },
  dots: { display: 'flex', gap: '5px', marginRight: '15px' },
  title: { color: '#bbb', fontSize: '11px', fontFamily: 'monospace' },
  terminal: {
    backgroundColor: '#000', color: '#ccc', padding: '15px', height: '250px',
    overflowY: 'auto', textAlign: 'left', fontFamily: 'Consolas, monospace', fontSize: '13px', lineHeight: '1.5'
  },
  input: {
    backgroundColor: 'transparent', border: 'none', color: '#fff', outline: 'none',
    fontFamily: 'Consolas, monospace', fontSize: '13px', width: '100%'
  }
};

export default TrucoGame;