#include "ManoTruco.h"
#include "Carta.h"
#include "EnumsTruco.h"

namespace UndavTrucoManoTruco {

	struct ManoTruco {
        Carta* cartaJugador1;
        Carta* cartaJugador2;
	};



	ManoTruco* CrearManoTruco( Carta* cartaJugador1, Carta* cartaJugador2) {
		ManoTruco* mano = new ManoTruco;
		mano->cartaJugador1 = cartaJugador1;
		mano->cartaJugador2 = cartaJugador2;
		return mano;
	}



	TipoResultadoManoTruco Jugar(const ManoTruco* manoTruco) {
		int valor1 = UndavTrucoCarta::ObtenerValorEnTruco(manoTruco->cartaJugador1);
		int valor2 = UndavTrucoCarta::ObtenerValorEnTruco(manoTruco->cartaJugador2);

		if (valor1 > valor2) {
			return GANO_JUGADOR1;
		}
		else if (valor2 > valor1) {
			return GANO_JUGADOR2;
		}
		else {
			return EMPATE;
		}
	}

	Carta* ObtenerCartaJugador1(const ManoTruco* manoTruco){
		return manoTruco->cartaJugador1;
	}

	Carta* ObtenerCartaJugador2(const ManoTruco* manoTruco){
		return manoTruco->cartaJugador2;
	}

	void DestruirManoTruco(ManoTruco* manoTruco){
		delete manoTruco;
	}
}
