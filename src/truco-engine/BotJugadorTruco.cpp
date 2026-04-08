#include "BotJugadorTruco.h"
#include "JugadorTruco.h"
#include "Carta.h"
#include "Cartas.h"
#include <cstdlib>
#include <iostream>

using namespace UndavTrucoJugadorTruco;
using namespace UndavTrucoCarta;
using namespace UndavTrucoContextoJuegoTruco;

namespace UndavTrucoBotJugadorTruco {

    struct BotJugadorTruco {
        JugadorTruco* jugador;
        TipoEstrategiaBot estrategia;
    };
    Carta* elegirCartaArriesgada(BotJugadorTruco* bot, Carta* cartaJugadaPorOtroJugador);
    Carta* elegirCartaConservadora(BotJugadorTruco* bot, Carta* cartaJugadaPorOtroJugador, ContextoJuegoTruco* contextoJuego);
    BotJugadorTruco* CrearBot(JugadorTruco* jugador, TipoEstrategiaBot estrategiaBot) {
        if (ObtenerCantidadCartas(jugador) != 3){
            return nullptr;
        }
        BotJugadorTruco* bot = new BotJugadorTruco;
        bot->jugador = jugador;
        bot->estrategia = estrategiaBot;
        return bot;
    }

    JugadorTruco* ObtenerJugadorTruco(const BotJugadorTruco* bot) {
        return bot->jugador;
    }

    // Estrategia conservadora: juega lo mínimo posible para ganar
    Carta* elegirCartaConservadora(BotJugadorTruco* bot, Carta* cartaJugadaPorOtroJugador, ContextoJuegoTruco* contextoJuego) {
        int manosGanadas = ObtenerCantidadManosGanadasJugador2(contextoJuego);
        int manosPerdidas = ObtenerCantidadManosGanadasJugador1(contextoJuego);
        int manosJugadas = ObtenerCantidadManosJugadas(contextoJuego);
        bool necesitaGanar = (manosPerdidas > manosGanadas);

        // Si necesita ganar, juega como arriesgado
        if (necesitaGanar || manosJugadas == 2) {
            return elegirCartaArriesgada(bot, cartaJugadaPorOtroJugador);
        }

        int mejorIndice = -1;
        int mejorValor = 100;
        for (int i = 0; i < 3; ++i) {
            Carta* carta = ObtenerCarta(bot->jugador, static_cast<TipoCartaJugador>(i));
            if (carta != nullptr) {
                int valor = ObtenerValorEnTruco(carta);
                if (cartaJugadaPorOtroJugador == nullptr) {
                    if (valor < mejorValor) {
                        mejorValor = valor;
                        mejorIndice = i;
                    }
                } else {
                    int valorOponente = ObtenerValorEnTruco(cartaJugadaPorOtroJugador);
                    if (valor >= valorOponente && valor < mejorValor) {
                        mejorValor = valor;
                        mejorIndice = i;
                    }
                }
            }
        }

        if (mejorIndice != -1) {
            return JugarCarta(bot->jugador, static_cast<TipoCartaJugador>(mejorIndice));
        }

        // Si no puede ganar, tira la más baja
        mejorValor = 100;
        for (int i = 0; i < 3; ++i) {
            Carta* carta = ObtenerCarta(bot->jugador, static_cast<TipoCartaJugador>(i));
            if (carta != nullptr) {
                int valor = ObtenerValorEnTruco(carta);
                if (valor < mejorValor) {
                    mejorValor = valor;
                    mejorIndice = i;
                }
            }
        }
        return (mejorIndice != -1) ? JugarCarta(bot->jugador, static_cast<TipoCartaJugador>(mejorIndice)) : nullptr;
    }

    // Estrategia arriesgada: juega la mejor carta posible
    Carta* elegirCartaArriesgada(BotJugadorTruco* bot, Carta* /*cartaJugadaPorOtroJugador*/) {
        int mejorIndice = -1;
        int mejorValor = -1;
        for (int i = 0; i < 3; ++i) {
            Carta* carta = ObtenerCarta(bot->jugador, static_cast<TipoCartaJugador>(i));
            if (carta != nullptr) {
                int valor = ObtenerValorEnTruco(carta);
                if (valor > mejorValor) {
                    mejorValor = valor;
                    mejorIndice = i;
                }
            }
        }
        return (mejorIndice != -1) ? JugarCarta(bot->jugador, static_cast<TipoCartaJugador>(mejorIndice)) : nullptr;
    }

    Carta* JugarCarta(BotJugadorTruco* bot, ContextoJuegoTruco* contextoJuego, Carta* cartaJugadaPorOtroJugador) {
        if (bot->estrategia == Conservador) {
            return elegirCartaConservadora(bot, cartaJugadaPorOtroJugador, contextoJuego);
        } else {
            return elegirCartaArriesgada(bot, cartaJugadaPorOtroJugador);
        }
    }

    void DestruirBotJugadorTruco(BotJugadorTruco* bot) {
        delete bot;
    }

    bool CantarTruco(BotJugadorTruco* bot, ContextoJuegoTruco* /*contexto*/) {
        for (int i = 0; i < 3; ++i){
            Carta* carta = ObtenerCarta(bot->jugador, static_cast<TipoCartaJugador>(i));
            if (carta != nullptr && ObtenerValorEnTruco(carta) >= 11){
                return true;
            }
        }
        int chance = (bot->estrategia == Arriesgado) ? 30 : 5;
        return (rand() % 100 < chance);
    }

    bool ResponderTruco(BotJugadorTruco* bot, ContextoJuegoTruco* /*contexto*/) {
        int mejorValor = 0;
        for (int i = 0; i < 3; ++i){
            Carta* carta = ObtenerCarta(bot->jugador, static_cast<TipoCartaJugador>(i));
            if (carta != nullptr){
                int valor = ObtenerValorEnTruco(carta);
                if (valor > mejorValor) mejorValor = valor;
            }
        }
        return (bot->estrategia == Conservador) ? mejorValor >= 9 : mejorValor >= 6;
    }
}
