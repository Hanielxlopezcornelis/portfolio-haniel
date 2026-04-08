#include <emscripten/emscripten.h>
#include "BotJugadorTruco.h"
#include "ContextoJuegoTruco.h"
#include "Cartas.h"
#include "JugadorTruco.h"
#include "Persona.h"
#include "ManoTruco.h"

// Usamos los namespaces de tu proyecto original
using namespace UndavTrucoBotJugadorTruco;
using namespace UndavTrucoContextoJuegoTruco;
using namespace UndavTrucoCartas;
using namespace UndavTrucoJugadorTruco;
using namespace UndavTrucoPersona;

extern "C" {

    // Función para que React inicialice un bot y pida una jugada
    // Esta función simula el proceso que tenías en tu main.cpp
    EMSCRIPTEN_KEEPALIVE
    int bot_decide_jugada_web(int estrategia_input) {
        // 1. Creamos un mazo y repartimos (como en tu RepartirCartas)
        Cartas* mazo = CrearMazoTruco();
        Cartas* cartasBot = CrearMazoVacio();
        Mezclar(mazo);
        
        for(int i=0; i<3; ++i) {
            AgregarComoUltimaCarta(cartasBot, QuitarPrimeraCarta(mazo));
        }

        // 2. Creamos al Bot (Estrategia: 0 para Conservador, 1 para Arriesgado)
        TipoEstrategiaBot est = (estrategia_input == 0) ? Conservador : Arriesgado;
        BotJugadorTruco* bot = CrearBot(CrearJugadorTruco("truquini", cartasBot), est);

        // 3. El bot elige qué carta jugar (simulamos que juega primero)
        // Usamos tu función JugarCarta de BotJugadorTruco.h
        Carta* cartaElegida = JugarCarta(bot, nullptr, nullptr);
        
        int valorResult = 0;
        if (cartaElegida != nullptr) {
            valorResult = ObtenerValor(cartaElegida);
        }

        // 4. Limpieza de memoria (Importante en C++)
        DestruirBotJugadorTruco(bot);
        DestruirCartas(mazo);
        DestruirCartas(cartasBot);

        return valorResult; // Retornamos el valor de la carta a React (ej: 1, 7, 10...)
    }
}