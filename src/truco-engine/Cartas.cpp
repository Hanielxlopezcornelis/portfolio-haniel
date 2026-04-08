#include "Carta.h"
#include "Cartas.h"
#include <cstdlib>
#include <ctime>


namespace UndavTrucoCartas{

    struct Cartas{
        UndavTrucoCarta::Carta* cartas[40];
        int CantidadActual;
    };

    //precondicion:@maximo y @numero son instancias validas
    //postcondicion:devuelve una instancia valida que representa un numero
    int numeroAleatorio(int maximo);


    //precondicion:ambos elementos son instancias validas
    //intercambia los valores de los elementos
    void Intercambiar(UndavTrucoCarta::Carta*& a, UndavTrucoCarta::Carta*& b);

    //precondicion:@a y @b son instancias validas
    //devuelve un bool que representa si la carta @a es de menor valor que @b
    bool EsMenorValor (UndavTrucoCarta::Carta* a, UndavTrucoCarta::Carta* b);

    //precondicion:@cartas es una instancia valida
    //encuentra la posicion en la que @carta se encuentra en @cartas y la devuelve
    int ObtenerIndiceCarta(Cartas* cartas, Carta* carta);

	Cartas* CrearMazoTruco(){
	    srand(time(0)); // inicializa la semilla con la hora actual

        Cartas* mazo = new Cartas;
        mazo->CantidadActual = 0;
        int indice = 0;
        for (int palo = UndavTrucoCarta::ORO; palo <= UndavTrucoCarta::BASTO; palo++) {
            for (int valor = 1; valor <= 12; valor++) {
                if (valor != 8 && valor != 9){
                    mazo->cartas[indice] = UndavTrucoCarta::CrearCarta(
                    static_cast<UndavTrucoCarta::TipoPalo>(palo),
                    valor);
                    indice++;
                    mazo->CantidadActual = indice;
                }
            }
        }
        return mazo;
    }

	Cartas* CrearMazoVacio(){
	    Cartas* mazo = new Cartas;
        mazo->CantidadActual = 0;
        return mazo;
	}

	Cartas* CrearCartas(Carta* cartas[], int cantidad){
        Cartas* mazo = new Cartas;
        for (int i = 0; i < cantidad && i < 40; i++) {
            mazo->cartas[i] = cartas[i];
        }
        mazo->CantidadActual = (cantidad <= 40) ? cantidad : 40;
        return mazo;
	}

	void Mezclar(Cartas* cartas){
        static int numero = 9;
        for (int i = cartas->CantidadActual - 1; i > 0; i--) {
            int j = numeroAleatorio(i + 1); // sin necesidad de una "semilla"
            Intercambiar(cartas->cartas[i],cartas->cartas[j]);
        }
        numero++;
	}

	void OrdenarMayorAMenorPorValorEnTruco(Cartas* cartas){
        for(int i = 0; i<cartas->CantidadActual;++i){
            for(int j = i +1; j < cartas->CantidadActual;++j){
                if(EsMenorValor(cartas->cartas[i], cartas->cartas[j])){
                    Intercambiar(cartas->cartas[i],cartas->cartas[j]);
                }
            }
        }
	}

	void AgregarComoPrimeraCarta(Cartas* cartas, Carta* carta){
	    int IndiceCarta = ObtenerIndiceCarta(cartas,carta);
        UndavTrucoCarta::Carta* cartaAMover = cartas->cartas[IndiceCarta];
        for (int i = IndiceCarta; i > 0; i--) {
            cartas->cartas[i] = cartas->cartas[i - 1];
        }
        cartas->cartas[0] = cartaAMover;
	}

	void AgregarComoUltimaCarta(Cartas* cartas, Carta* carta){
	    if (cartas->CantidadActual >= 40 || carta == nullptr){return;}
	    int cantidadActual = cartas->CantidadActual;
        cartas->cartas[cantidadActual] = carta;
        cartas->CantidadActual++;
	}

	Carta* QuitarPrimeraCarta(Cartas* cartas){
        if (cartas == nullptr || cartas->CantidadActual == 0){
            return nullptr;
        }
        UndavTrucoCarta::Carta* cartaQuitada = cartas->cartas[0];
        for (int i = 0; i < cartas->CantidadActual - 1; ++i) {
            cartas->cartas[i] = cartas->cartas[i + 1];
        }
        cartas->cartas[cartas->CantidadActual - 1] = nullptr;
        cartas->CantidadActual--;
        return cartaQuitada;
	}

	Carta* QuitarUltimaCarta(Cartas* cartas){
        if (cartas == nullptr || cartas->CantidadActual == 0) {
            return nullptr;
        }
        int ultimaPos = cartas->CantidadActual - 1;
        UndavTrucoCarta::Carta* cartaQuitada = cartas->cartas[ultimaPos];
        cartas->cartas[ultimaPos] = nullptr;
        cartas->CantidadActual--;
        return cartaQuitada;
    }

	Carta* ObtenerCartaEnPosicion(const Cartas* cartas, int posicion){
        if (posicion >= 0 && posicion < cartas->CantidadActual){
            return cartas->cartas[posicion];
        }
        return nullptr;
	}

	void DestruirCartas(Cartas* cartas){
        for (int i = 0; i < cartas->CantidadActual; ++i) {
            delete cartas->cartas[i];
        }
        delete cartas;
	}

	int numeroAleatorio(int maximo){
	    return rand() % maximo;
    }


    void Intercambiar(UndavTrucoCarta::Carta*& a, UndavTrucoCarta::Carta*& b){
        UndavTrucoCarta::Carta* auxiliar = a;
        a = b;
        b = auxiliar;
    }

    bool EsMenorValor (UndavTrucoCarta::Carta* a, UndavTrucoCarta::Carta* b){
        return UndavTrucoCarta::ObtenerValorEnTruco(a) < UndavTrucoCarta::ObtenerValorEnTruco(b);
    }

    int ObtenerIndiceCarta(Cartas* cartas, Carta* carta){
        for(int i=0;i<cartas->CantidadActual;i++){
            if(carta == cartas->cartas[i]){
                return i;
            }
        }
        return -1; // si la carta no esta en el mazo
    }
}
