#include "JugadorTruco.h"
#include "ManoTruco.h"
#include "EnumsTruco.h"

using UndavTrucoJugadorTruco::JugadorTruco;

namespace UndavTrucoContextoJuegoTruco{
	struct ContextoJuegoTruco {
		JugadorTruco* jugador1;
		JugadorTruco* jugador2;
		int manosJugador1ganadas;
		int manosJugador2ganadas;
		int manosJugadas;
		bool juegoTerminado;
	};

    //precondicion:ninguno
    //postcondicion:devuelve si @contexto es una instancia valida o no
	bool contextoNoValido(const ContextoJuegoTruco* contexto);

	ContextoJuegoTruco* CrearContextoJuegoTruco(JugadorTruco* jugador1, JugadorTruco* jugador2) {
		ContextoJuegoTruco* contexto = new ContextoJuegoTruco;
		contexto->jugador1 = jugador1;
		contexto->jugador2 = jugador2;
		contexto->manosJugador1ganadas = 0;
		contexto->manosJugador2ganadas = 0;
		contexto->manosJugadas = 0;
		contexto->juegoTerminado = false;
		return contexto;
	}

    bool contextoNoValido(const ContextoJuegoTruco* contexto){
         return contexto == nullptr;
    }

	bool JuegoTerminado(const ContextoJuegoTruco* contexto) {
		if (contextoNoValido(contexto)){
                return false;
        }
		return contexto->juegoTerminado;
	}

	void AgregarResultadoManoTruco(ContextoJuegoTruco* contexto, TipoResultadoManoTruco resultado){
         if (contextoNoValido(contexto) || contexto->juegoTerminado) {
                return;
         }
         switch (resultado){
                case GANO_JUGADOR1:
                     contexto->manosJugador1ganadas++;
                     contexto->manosJugadas++;
                     break;
                case GANO_JUGADOR2:
                     contexto->manosJugador2ganadas++;
                     contexto->manosJugadas++;
                     break;
                case EMPATE:
                     contexto->manosJugadas++;
                     break;
         }
         if (contexto->manosJugador1ganadas == 2 || contexto->manosJugador2ganadas == 2 || contexto->manosJugadas == 3 ) {
                contexto->juegoTerminado = true;
         }
    }

	int ObtenerCantidadManosGanadasJugador1(const ContextoJuegoTruco* contexto){
        if (contextoNoValido(contexto)){
                return 0;
        }
        return contexto->manosJugador1ganadas;
    }

	int ObtenerCantidadManosGanadasJugador2(const ContextoJuegoTruco* contexto){
        if (contextoNoValido(contexto)){
                return 0;
        }
        return contexto->manosJugador2ganadas;
    }

	int ObtenerCantidadManosJugadas(const ContextoJuegoTruco* contexto){
        if (contextoNoValido(contexto)){
                return 0;
        }
        return contexto->manosJugadas;
    }

	void DestruirContextoJuegoTruco(ContextoJuegoTruco* contexto){
         delete contexto;
    }
}

