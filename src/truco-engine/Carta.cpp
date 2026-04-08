#include <string>

using std::string;

namespace UndavTrucoCarta{
	enum TipoPalo{ORO, COPA, ESPADA, BASTO};
	struct Carta {
		TipoPalo palo;
		int valor;
	};

	Carta* CrearCarta(TipoPalo palo, int valor){
		if ((valor < 1 || valor > 12) || (valor == 8 || valor == 9)){
			return nullptr;
		}
		Carta* nuevo = new Carta;
		nuevo->valor=valor;
		nuevo->palo=palo;
		return nuevo;
	}

	int ObtenerValor(const Carta* carta){
		return carta->valor;
	}

	TipoPalo ObtenerPalo(const Carta* carta){
		return carta->palo;
	}

	int ObtenerValorEnTruco(const Carta* carta) {
        int valor = ObtenerValor(carta);
        TipoPalo palo = ObtenerPalo(carta);
        switch (valor) {
            case 1:
                if (palo == ESPADA) return 14;
                if (palo == BASTO) return 13;
                return 8;
            case 7:
                if (palo == ESPADA) return 12;
                if (palo == ORO) return 11;
                return 4;
            case 3: return 10;
            case 2: return 9;
            case 12: return 7;
            case 11: return 6;
            case 10: return 5;
            case 6: return 3;
            case 5: return 2;
            case 4: return 1;
        }
    }

	string ObtenerStringPalo(const Carta* carta){
		switch(carta->palo){
			case ORO: return "Oro";
			case COPA: return "Copa";
			case ESPADA: return "Espada";
			case BASTO: return "Basto";
		}
	}

	void DestruirCarta(Carta* carta){
		delete carta;
	}
}
