import React, { useState } from 'react';

export const TrucoScreen = () => {
    const [mensaje, setMensaje] = useState("¡Bienvenido al Truco!");

    // Función que llamará al WASM cuando lo tengamos compilado
    const jugarTurno = () => {
        setMensaje("La máquina está pensando...");
        // Aquí llamaremos a la lógica de C++
    };

    return (
        <div style={{ background: '#242424', padding: '20px', borderRadius: '15px' }}>
            <h2>{mensaje}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={jugarTurno} style={{ padding: '10px' }}>Tirar Carta</button>
                <button style={{ padding: '10px', background: 'orange' }}>Cantar Truco</button>
            </div>
        </div>
    );
};