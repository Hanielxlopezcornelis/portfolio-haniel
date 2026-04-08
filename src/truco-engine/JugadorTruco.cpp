#include "JugadorTruco.h"
#include "Carta.h"
#include "Cartas.h"
#include "Persona.h"
#include "EnumsTruco.h"

namespace UndavTrucoJugadorTruco{


	struct JugadorTruco{
	    Persona* persona;
        Carta* cartas[3];
	    bool cartaJugada[3];
	};

    // Precondicion: @carta es una instancia valida
	// Postcondicion: devuelve si la carta pertenece al rango de cartas de CartaJugador
	bool RangoDeCarta(TipoCartaJugador carta);

	JugadorTruco* CrearJugadorTruco(Persona* persona) {
        JugadorTruco* jugador = new JugadorTruco;
        jugador->persona = persona;
        for (int i = 0; i < 3; i++) {
            jugador->cartas[i] = nullptr;
            jugador->cartaJugada[i] = false;
        }
        return jugador;
    }

    JugadorTruco* CrearJugadorTruco(std::string apodo,Cartas* cartas) {
        JugadorTruco* jugador = new JugadorTruco;
        jugador->persona = UndavTrucoPersona::CrearPersona("", "", apodo);
        for (int i = 0; i < 3; i++) {
            jugador->cartas[i] = UndavTrucoCartas::ObtenerCartaEnPosicion(cartas, i);
            jugador->cartaJugada[i] = false;
        }
        return jugador;
    }

    Cartas* ObtenerCartas(const JugadorTruco* jugador) {
        UndavTrucoCarta::Carta* cartasJugador[3];
        for (int i = 0; i < 3; i++) {
            cartasJugador[i] = jugador->cartas[i];
        }
        return UndavTrucoCartas::CrearCartas(cartasJugador, 3);
    }

    Persona* ObtenerPersona(const JugadorTruco* jugador) {
        return jugador->persona;
    }

    void AsignarCartas(JugadorTruco* jugador,Carta* cartas[3]) {
        for (int i = 0; i < 3; i++) {
            jugador->cartas[i] = cartas[i];
            jugador->cartaJugada[i] = false;
        }
    }

    int ObtenerCantidadCartas(const JugadorTruco* jugador) {
        int cantidad = 0;
        for (int i = 0; i < 3; i++) {
            if (jugador->cartas[i] != nullptr && !jugador->cartaJugada[i]) {
                cantidad++;
            }
        }
        return cantidad;
    }

    Carta* ObtenerCarta(const JugadorTruco* jugador, TipoCartaJugador carta) {
        if (RangoDeCarta(carta)){
                return nullptr;
        }
        int idx = static_cast<int>(carta);
        if (jugador->cartaJugada[idx]) {
                return nullptr;
        }
        return jugador->cartas[idx];
    }

    Carta* JugarCarta(JugadorTruco* jugador, TipoCartaJugador carta) {
        if (RangoDeCarta(carta)) return nullptr;
        int idx = static_cast<int>(carta);
        if (jugador->cartas[idx] != nullptr && !jugador->cartaJugada[idx]) {
            jugador->cartaJugada[idx] = true;
            return jugador->cartas[idx];
        }
        return nullptr;
    }

    void DestruirJugadorTruco(JugadorTruco* jugador) {
        delete jugador;
    }

    bool RangoDeCarta(TipoCartaJugador carta) {
        return carta < CARTA_1 || carta > CARTA_3;
    }
}
